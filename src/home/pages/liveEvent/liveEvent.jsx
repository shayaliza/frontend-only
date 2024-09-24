import { useState } from "react";

const cardData = [
  {
    id: 1,
    imageUrl:
      "https://assets-static.invideo.io/images/large/Youtube_Banner_Size_34749296f8.png",
    title: "Google AI4Code – Understand Code in Python Notebooks",
    description: "Predict the relationship between code and comments",
    tag: "Featured",
    category: "knowledge and learning",
    timeLeft: "a month to go",
  },
  {
    id: 1,
    imageUrl:
      "https://assets-static.invideo.io/images/large/Youtube_Banner_Size_34749296f8.png",
    title: "Google AI4Code – Understand Code in Python Notebooks",
    description: "Predict the relationship between code and comments",
    tag: "Featured",
    category: "knowledge and learning",
    timeLeft: "a month to go",
  },
  {
    id: 1,
    imageUrl:
      "https://assets-static.invideo.io/images/large/Youtube_Banner_Size_34749296f8.png",
    title: "Google AI4Code – Understand Code in Python Notebooks",
    description: "Predict the relationship between code and comments",
    tag: "Featured",
    category: "knowledge and learning",
    timeLeft: "a month to go",
  },
];

const TAB_CONTENTS = {
  active: cardData, // Use cardData for now; replace with actual data if different
  closed: cardData, // Use cardData for now; replace with actual data if different
  upcoming: cardData, // Use cardData for now; replace with actual data if different
};

const Card = ({ imageUrl, title, description, tag, category, timeLeft }) => (
  <div className="card max-w-[290px] min-w-[290px] w-[290px] h-[350px] flex flex-col justify-between shadow-md rounded-3xl relative m-4">
    <div className="bookmark popup absolute top-1/2 right-5 transform -translate-y-1/2 text-xl font-bold">
      :
    </div>
    <div className="card_image h-[40%]">
      <img
        src={imageUrl}
        alt="card banner"
        className="w-full h-full rounded-t-lg"
      />
    </div>
    <div className="popupHolder  absolute top-full right-0 w-48 flex flex-col justify-between bg-white border border-gray-400 shadow-md rounded"></div>
    <div className="heading px-4 py-2.5">
      <h1 className="text-md font-semibold">{title}</h1>
    </div>
    <p className="sub_head px-4 py-1 text-sm font-medium">{description}</p>
    <p className="tag px-4 py-1 text-sm font-medium">{tag}</p>
    <div className="card_footer h-[50px] border-t border-gray-900 flex justify-between items-center px-2">
      <p className="text-xs font-semibold capitalize">{category}</p>
      <span className="text-xs cursor-pointer">{timeLeft}</span>
    </div>
  </div>
);

const NewCard = () => {
  return (
    <>
      <div class="min-w-[300px]  w-full h-[390px] bg-pink my-4 md:mx-3 rounded-2xl">
        <div class="card_poster_holder h-[55%]">
          <img
            src="https://www.bluelearn.in/_next/image?url=https%3A%2F%2Ffiles.bluelearn.in%2FEVENT_IMAGE%2F303%2F2022-07-08T16%253A27%253A53%252B00%253A00-blob&amp;w=1920&amp;q=60"
            alt=""
            class="w-full h-full rounded-t-lg"
          />
        </div>
        <div class="card_body h-[45%] flex flex-col justify-evenly items-center px-10 bg-gray-900 rounded-b-lg">
          <h1 class="text-xl text-white">
            Lorem, ipsum dolor sit ame dolor sit ame
          </h1>
          <p class="text-gray-500">Bluelearn</p>
          <p class="text-gray-500">Jul 5, 2022 8.00pm</p>
        </div>
      </div>
    </>
  );
};

const CompetitionSection = () => {
  const [activeTab, setActiveTab] = useState("active");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" final" style={{ fontFamily: "Nunito" }}>
      <section className=" py-5 relative">
        {/* Upper Section */}
        <div className="">
          <div class="heading_holder px-10 text-center">
            <h1 class="text-3xl font-semibold my-5">Upcoming Events For You</h1>
            <div class="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              incidunt? <span class="text-yellow-500">join now</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-col-2 gap-8">
            <NewCard />
            <NewCard />
            <NewCard />
            <NewCard />
          </div>
        </div>
        <h1 class="text-xl font-semibold my-8 flex justify-center">
          If you missed something, access it right here
        </h1>
        <div className="tab flex justify-center border-b-2 mt-1 sticky top-0 px-10 z-50 bg-white max-[900px]:px-0">
          <button
            className={`tablinks hover:bg-gray-200  text-xl px-6 py-2 ${
              activeTab === "active"
                ? "active text-[#ec1ee2] border-b-2 rounded-none border-black border-solid"
                : ""
            }`}
            onClick={() => handleTabChange("active")}
          >
            Active
          </button>
          <button
            className={` hover:bg-gray-200 text-xl px-6 py-2 ${
              activeTab === "closed"
                ? "active text-[#ec1ee2] border-b-2 rounded-none border-black border-solid"
                : ""
            }`}
            onClick={() => handleTabChange("closed")}
          >
            Closed
          </button>
          <button
            className={`tablinks hover:bg-gray-200  text-xl px-6 py-2 ${
              activeTab === "upcoming"
                ? "active text-[#ec1ee2] border-b-2 rounded-none border-black border-solid"
                : ""
            }`}
            onClick={() => handleTabChange("upcoming")}
          >
            Upcoming
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-col-2 gap-8">
          <NewCard />
        </div>
      </section>
    </div>
  );
};

export default CompetitionSection;
