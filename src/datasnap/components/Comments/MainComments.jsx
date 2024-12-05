import { useState } from 'react';

import RenderComments from './RenderComments';

const MainComments = () => {
  const [maxDepth, setMaxDepth] = useState(Infinity);
  const [isAllCollapsed, setIsAllCollapsed] = useState(false);
  const dummyComments = [
    {
      id: 1,
      author: "chakalaka13",
      time: "2y ago",
      content: "I think there hasn't yet been invented a way to structure comments for such a high volume. Communication, naturally, just doesn't happen this way. Idk if there is a way to properly do it without Machine Learning",
      upvotes: 1,
      replies: [
        {
          id: 2,
          author: "Fad31",
          time: "3mo ago",
          content: "sadasd",
          upvotes: 1,
          replies: [
            {
              id: 3,
              author: "[deleted]",
              time: "3mo ago",
              content: "",
              upvotes: 0,
              replies: []
            }
          ]
        },
        {
          id: 4,
          author: "pvhbk",
          time: "2y ago",
          content: "I think I'm a bit biased in that I'm used to reddit from using it for many years now, but I find it somewhat easier to conceptualize than Twitter nesting. But I agree reddit nesting gets unreadable at a certain point, and mobile browser is pretty messed up at even 1-2 comments deep.",
          upvotes: 1,
          replies: [
            {
              id: 5,
              author: "[deleted]",
              time: "1y ago",
              content: "",
              upvotes: 0,
              replies: []
            }
          ]
        }
      ]
    },
    {
        id: 6,
        author: "chakalaka13",
        time: "2y ago",
        content: "I think there hasn't yet been invented a way to structure comments for such a high volume. Communication, naturally, just doesn't happen this way. Idk if there is a way to properly do it without Machine Learning",
        upvotes: 1,
        replies: [
          {
            id: 7,
            author: "Fad31",
            time: "3mo ago",
            content: "sadasd",
            upvotes: 1,
            replies: [
              {
                id: 8,
                author: "[deleted]",
                time: "3mo ago",
                content: "",
                upvotes: 0,
                replies: []
              }
            ]
          },
          {
            id: 9,
            author: "pvhbk",
            time: "2y ago",
            content: "I think I'm a bit biased in that I'm used to reddit from using it for many years now, but I find it somewhat easier to conceptualize than Twitter nesting. But I agree reddit nesting gets unreadable at a certain point, and mobile browser is pretty messed up at even 1-2 comments deep.",
            upvotes: 1,
            replies: [
              {
                id: 10,
                author: "[deleted]",
                time: "1y ago",
                content: "",
                upvotes: 0,
                replies: []
              }
            ]
          }
        ]
      },
  ];

  const handleDepthChange = (e) => {
    const depth = parseInt(e.target.value);
    setMaxDepth(depth === 0 ? Infinity : depth);
  };

  const toggleAllComments = () => {
    setIsAllCollapsed(!isAllCollapsed);
  };

  return (
    <div className="">
      <div className="mb-4 flex items-center space-x-4">
        <button
          onClick={toggleAllComments}
          className="rounded bg-transparent px-4 py-2 border dark:text-white text-black hover:text-white hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          {isAllCollapsed ? 'Expand All' : 'Collapse All'}
        </button>
        <div className="flex items-center space-x-2 p-1">
          <label htmlFor="depth-select" className="text-sm font-medium">
            Collapse to depth:
          </label>
          <select
            id="depth-select"
            className="rounded border p-1 bg-white dark:bg-transparent text-black dark:text-white cursor-pointer"
            onChange={handleDepthChange}
            value={maxDepth === Infinity ? 0 : maxDepth}
          >
            <option className='text-black' value="0">All</option>
            <option className='text-black' value="1">1</option>
            <option className='text-black' value="2">2</option>
            <option className='text-black' value="3">3</option>
            <option className='text-black' value="4">4</option>
            <option className='text-black' value="5">5</option>
          </select>
        </div>
      </div>
      <RenderComments
        comments={dummyComments}
        maxDepth={maxDepth}
        isAllCollapsed={isAllCollapsed}
      />
    </div>
  );
};

export default MainComments;