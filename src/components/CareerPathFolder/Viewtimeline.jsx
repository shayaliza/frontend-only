import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaEdit,
  FaLink,
  FaTrashAlt,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Viewtimelines() {
  const [openIndexes, setOpenIndexes] = useState({});
  const [timelines, setTimelines] = useState([
    {
      title: "HTML",
      items: [
        { text: "article", id: "html1" },
        { text: "article", id: "html2" },
        { text: "article", id: "html3" },
        { text: "article", id: "html4" },
      ],
    },
    {
      title: "CSS",
      items: [
        { text: "article", id: "css1" },
        { text: "article", id: "css2" },
        { text: "article", id: "css3" },
        { text: "article", id: "css4" },
        { text: "article", id: "css5" },
      ],
    },
  ]);

  const toggleDropdown = (index) => {
    setOpenIndexes((prevOpenIndexes) => ({
      ...prevOpenIndexes,
      [index]: !prevOpenIndexes[index],
    }));
  };

  const moveItem = (timelineIndex, itemIndex, direction) => {
    const updatedTimelines = [...timelines];
    const items = [...updatedTimelines[timelineIndex].items];
    const [movedItem] = items.splice(itemIndex, 1);
    const newIndex = direction === "up" ? itemIndex - 1 : itemIndex + 1;

    if (newIndex >= 0 && newIndex < items.length) {
      items.splice(newIndex, 0, movedItem);
      updatedTimelines[timelineIndex].items = items;
      setTimelines(updatedTimelines);
    }
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const startTimelineIndex = Number(source.droppableId.split("-")[1]);
    const endTimelineIndex = Number(destination.droppableId.split("-")[1]);

    const updatedTimelines = [...timelines];

    const startItems = Array.from(updatedTimelines[startTimelineIndex].items);
    const endItems =
      startTimelineIndex === endTimelineIndex
        ? startItems
        : Array.from(updatedTimelines[endTimelineIndex].items);

    const [movedItem] = startItems.splice(source.index, 1);

    endItems.splice(destination.index, 0, movedItem);

    if (startTimelineIndex === endTimelineIndex) {
      updatedTimelines[startTimelineIndex].items = endItems;
    } else {
      updatedTimelines[startTimelineIndex].items = startItems;
      updatedTimelines[endTimelineIndex].items = endItems;
    }

    setTimelines(updatedTimelines);
  };

  const {handleTimelinePopup} = useOutletContext();

  const navigate = useNavigate();

  const handleQuiz = () => {
    navigate("/career-path/preview/quiz");
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="droppable">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="min-w-full"
            >
              {timelines.map((timeline, timelineIndex) => (
                <div
                  key={timelineIndex}
                  className="mb-4 border border-gray-200 rounded-md shadow-md mx-4"
                >
                  <div className="flex items-center justify-between border-b border-gray-300 p-2 bg-gray-100">
                    <div className="flex">
                      <h2 className="text-lg font-bold flex items-center">
                        {timeline.title}{" "}
                        <span className="text-xs font-normal opacity-80 ml-2">
                          ({timeline.items.length} items)
                        </span>
                      </h2>
                      <button
                        className="ml-3"
                        onClick={() => toggleDropdown(timelineIndex)}
                      >
                        {openIndexes[timelineIndex] ? (
                          <FaChevronUp className="h-4 w-4 text-black" />
                        ) : (
                          <FaChevronDown className="h-4 w-4 text-black" />
                        )}
                      </button>
                    </div>
                    <div className="flex gap-4 justify-between">
                      <button
                        onClick={handleTimelinePopup}
                        className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
                      >
                        Add
                      </button>
                      <button>
                        <FaEdit className="text-black" />
                      </button>
                      <button>
                        <FaArrowUp className="text-black" />
                      </button>
                      <button>
                        <FaArrowDown className="text-black" />
                      </button>
                    </div>
                  </div>
                  {openIndexes[timelineIndex] && (
                    <Droppable droppableId={`droppable-${timelineIndex}`}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className="min-w-full border-t border-gray-300"
                        >
                          <div className="bg-white p-2 space-y-2 overflow-auto">
                            {" "}
                            {/* Added padding and space between items */}
                            {timeline.items.map((item, itemIndex) => (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={itemIndex}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="w-full overflow-auto cursor-move bg-gray-50 border-b border-gray-300 p-3 flex justify-between space-x-2 items-center rounded-md"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <FaArrowUp className="h-4 w-4 text-gray-600" />
                                      <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800">
                                        {item.text}
                                      </span>
                                      <div className="flex items-center space-x-2">
                                        <span className="font-medium">
                                          {item.id}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <button
                                        type="button"
                                        className="inline-flex items-center rounded border border-gray-800 px-3 py-1.5 text-sm font-medium leading-4 text-white bg-gray-800 hover:bg-gray-900"
                                      >
                                        Publish item
                                      </button>
                                      <button className="border border-green-600 text-green-600 hover:bg-green-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full">
                                        <FaDollarSign className="h-4 w-4" />
                                      </button>
                                      <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full">
                                        <FaLink className="h-4 w-4" />
                                      </button>
                                      <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full">
                                        <FaEdit className="h-4 w-4" />
                                      </button>
                                      <button className="border border-red-600 text-red-600 hover:bg-red-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full">
                                        <FaTrashAlt className="h-4 w-4" />
                                      </button>
                                      <button
                                        onClick={() =>
                                          moveItem(
                                            timelineIndex,
                                            itemIndex,
                                            "up"
                                          )
                                        }
                                        disabled={itemIndex === 0}
                                      >
                                        <FaChevronUp className="h-4 w-4 text-black" />
                                      </button>
                                      <button
                                        onClick={() =>
                                          moveItem(
                                            timelineIndex,
                                            itemIndex,
                                            "down"
                                          )
                                        }
                                        disabled={
                                          itemIndex ===
                                          timeline.items.length - 1
                                        }
                                      >
                                        <FaChevronDown className="h-4 w-4 text-black" />
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        </div>
                      )}
                    </Droppable>
                  )}
                </div>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default Viewtimelines;
