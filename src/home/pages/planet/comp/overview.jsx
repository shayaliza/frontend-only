import React from "react";
import Stepper from "./stepper";
import { useState } from "react";

function OverView() {
  const [activeTab, setActiveTab] = useState("tab1"); // State to manage the active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Set the active tab when a button is clicked
  };

  return (
    <div>
      <Stepper />
      <div className="flex w-9/12 mx-auto">
        {/* Button Section */}
        <div className="flex flex-col">
          <button
            className={`py-3 px-4 text-left text-sm font-medium w-[150px] ${
              activeTab === "tab1"
                ? "bg-green-600 text-white"
                : "bg-white text-green-600 hover:bg-gray-100"
            }`}
            onClick={() => handleTabChange("tab1")}
          >
            About
          </button>
          <button
            className={`py-3 px-4 text-left text-sm font-medium w-[150px] ${
              activeTab === "tab2"
                ? "bg-green-600 text-white"
                : "bg-white text-green-600 hover:bg-gray-100"
            }`}
            onClick={() => handleTabChange("tab2")}
          >
            Evaluation
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6">
          {activeTab === "tab1" && (
            <div className="border-l-2 border-black pl-2">
              <h2 className="text-md font-semibold">Content for Tab 1</h2>
              <p className="text-gray-700 text-sm">
                About Global AI Hackfest AI Planet is excited to announce the
                Global AI HackFest 2023, a collaborative effort with AI Business
                School, Global AI Hub, C-Level, and Learn Machine Learning. Our
                mission is to inspire the global community to create innovative
                solutions using state-of-the-art AI technologies and empower
                participants to launch their own successful startups. The Global
                AI HackFest serves as a platform for bringing together AI
                enthusiasts, developers, researchers, and entrepreneurs from all
                over the world. By fostering a spirit of collaboration and
                innovation, we aim to address pressing real-world challenges and
                unlock the transformative potential of AI across various
                industries. Why are we doing this? We believe in the power of AI
                to revolutionize the way we live, work, and communicate. By
                hosting the Global AI HackFest, we hope to: Drive innovation:
                The AI HackFest provides an environment where creative minds can
                come together to ideate, prototype, and develop groundbreaking
                AI solutions. Promote entrepreneurship: We encourage
                participants to take their innovative solutions beyond the AI
                HackFest and turn them into successful startups, contributing to
                the growth of the global AI ecosystem. Foster collaboration: By
                connecting experts, enthusiasts, and organizations from diverse
                backgrounds, we aim to facilitate knowledge sharing and
                collaboration that can lead to transformative AI advancements.
                Nurture talent: The AI HackFest serves as a learning ground for
                participants to enhance their AI skills, gain hands-on
                experience with cutting-edge technologies, and learn from
                industry leaders. Address real-world problems: By focusing on
                practical challenges, we aim to create a positive impact on
                society and the environment through the application of AI. Join
                us at the Global AI HackFest 2023 to be a part of this exciting
                journey towards a smarter, more innovative, and prosperous
                future!
              </p>
              <h2 className="text-md font-semibold">Content for Tab 1</h2>
              <p className="text-gray-700 text-sm">
                About Global AI Hackfest AI Planet is excited to announce the
                Global AI HackFest 2023, a collaborative effort with AI Business
                School, Global AI Hub, C-Level, and Learn Machine Learning. Our
                mission is to inspire the global community to create innovative
                solutions using state-of-the-art AI technologies and empower
                participants to launch their own successful startups. The Global
                AI HackFest serves as a platform for bringing together AI
                enthusiasts, developers, researchers, and entrepreneurs from all
                over the world. By fostering a spirit of collaboration and
                innovation, we aim to address pressing real-world challenges and
                unlock the transformative potential of AI across various
                industries. Why are we doing this? We believe in the power of AI
                to revolutionize the way we live, work, and communicate. By
                hosting the Global AI HackFest, we hope to: Drive innovation:
                The AI HackFest provides an environment where creative minds can
                come together to ideate, prototype, and develop groundbreaking
                AI solutions. Promote entrepreneurship: We encourage
                participants to take their innovative solutions beyond the AI
                HackFest and turn them into successful startups, contributing to
                the growth of the global AI ecosystem. Foster collaboration: By
                connecting experts, enthusiasts, and organizations from diverse
                backgrounds, we aim to facilitate knowledge sharing and
                collaboration that can lead to transformative AI advancements.
                Nurture talent: The AI HackFest serves as a learning ground for
                participants to enhance their AI skills, gain hands-on
                experience with cutting-edge technologies, and learn from
                industry leaders. Address real-world problems: By focusing on
                practical challenges, we aim to create a positive impact on
                society and the environment through the application of AI. Join
                us at the Global AI HackFest 2023 to be a part of this exciting
                journey towards a smarter, more innovative, and prosperous
                future!
              </p>
              <h2 className="text-md font-semibold">Content for Tab 1</h2>
              <p className="text-gray-700 text-sm">
                About Global AI Hackfest AI Planet is excited to announce the
                Global AI HackFest 2023, a collaborative effort with AI Business
                School, Global AI Hub, C-Level, and Learn Machine Learning. Our
                mission is to inspire the global community to create innovative
                solutions using state-of-the-art AI technologies and empower
                participants to launch their own successful startups. The Global
                AI HackFest serves as a platform for bringing together AI
                enthusiasts, developers, researchers, and entrepreneurs from all
                over the world. By fostering a spirit of collaboration and
                innovation, we aim to address pressing real-world challenges and
                unlock the transformative potential of AI across various
                industries. Why are we doing this? We believe in the power of AI
                to revolutionize the way we live, work, and communicate. By
                hosting the Global AI HackFest, we hope to: Drive innovation:
                The AI HackFest provides an environment where creative minds can
                come together to ideate, prototype, and develop groundbreaking
                AI solutions. Promote entrepreneurship: We encourage
                participants to take their innovative solutions beyond the AI
                HackFest and turn them into successful startups, contributing to
                the growth of the global AI ecosystem. Foster collaboration: By
                connecting experts, enthusiasts, and organizations from diverse
                backgrounds, we aim to facilitate knowledge sharing and
                collaboration that can lead to transformative AI advancements.
                Nurture talent: The AI HackFest serves as a learning ground for
                participants to enhance their AI skills, gain hands-on
                experience with cutting-edge technologies, and learn from
                industry leaders. Address real-world problems: By focusing on
                practical challenges, we aim to create a positive impact on
                society and the environment through the application of AI. Join
                us at the Global AI HackFest 2023 to be a part of this exciting
                journey towards a smarter, more innovative, and prosperous
                future!
              </p>
            </div>
          )}
          {activeTab === "tab2" && (
            <div className="border-l-2 border-black pl-2">
              <h2 className="text-md font-semibold">Content for Tab 1</h2>
              <p className="text-gray-700 text-sm">
                About Global AI Hackfest AI Planet is excited to announce the
                Global AI HackFest 2023, a collaborative effort with AI Business
                School, Global AI Hub, C-Level, and Learn Machine Learning. Our
                mission is to inspire the global community to create innovative
                solutions using state-of-the-art AI technologies and empower
                participants to launch their own successful startups. The Global
                AI HackFest serves as a platform for bringing together AI
                enthusiasts, developers, researchers, and entrepreneurs from all
                over the world. By fostering a spirit of collaboration and
                innovation, we aim to address pressing real-world challenges and
                unlock the transformative potential of AI across various
                industries. Why are we doing this? We believe in the power of AI
                to revolutionize the way we live, work, and communicate. By
                hosting the Global AI HackFest, we hope to: Drive innovation:
                The AI HackFest provides an environment where creative minds can
                come together to ideate, prototype, and develop groundbreaking
                AI solutions. Promote entrepreneurship: We encourage
                participants to take their innovative solutions beyond the AI
                HackFest and turn them into successful startups, contributing to
                the growth of the global AI ecosystem. Foster collaboration: By
                connecting experts, enthusiasts, and organizations from diverse
                backgrounds, we aim to facilitate knowledge sharing and
                collaboration that can lead to transformative AI advancements.
                Nurture talent: The AI HackFest serves as a learning ground for
                participants to enhance their AI skills, gain hands-on
                experience with cutting-edge technologies, and learn from
                industry leaders. Address real-world problems: By focusing on
                practical challenges, we aim to create a positive impact on
                society and the environment through the application of AI. Join
                us at the Global AI HackFest 2023 to be a part of this exciting
                journey towards a smarter, more innovative, and prosperous
                future!
              </p>
              <h2 className="text-md font-semibold">Content for Tab 1</h2>
              <p className="text-gray-700 text-sm">
                About Global AI Hackfest AI Planet is excited to announce the
                Global AI HackFest 2023, a collaborative effort with AI Business
                School, Global AI Hub, C-Level, and Learn Machine Learning. Our
                mission is to inspire the global community to create innovative
                solutions using state-of-the-art AI technologies and empower
                participants to launch their own successful startups. The Global
                AI HackFest serves as a platform for bringing together AI
                enthusiasts, developers, researchers, and entrepreneurs from all
                over the world. By fostering a spirit of collaboration and
                innovation, we aim to address pressing real-world challenges and
                unlock the transformative potential of AI across various
                industries. Why are we doing this? We believe in the power of AI
                to revolutionize the way we live, work, and communicate. By
                hosting the Global AI HackFest, we hope to: Drive innovation:
                The AI HackFest provides an environment where creative minds can
                come together to ideate, prototype, and develop groundbreaking
                AI solutions. Promote entrepreneurship: We encourage
                participants to take their innovative solutions beyond the AI
                HackFest and turn them into successful startups, contributing to
                the growth of the global AI ecosystem. Foster collaboration: By
                connecting experts, enthusiasts, and organizations from diverse
                backgrounds, we aim to facilitate knowledge sharing and
                collaboration that can lead to transformative AI advancements.
                Nurture talent: The AI HackFest serves as a learning ground for
                participants to enhance their AI skills, gain hands-on
                experience with cutting-edge technologies, and learn from
                industry leaders. Address real-world problems: By focusing on
                practical challenges, we aim to create a positive impact on
                society and the environment through the application of AI. Join
                us at the Global AI HackFest 2023 to be a part of this exciting
                journey towards a smarter, more innovative, and prosperous
                future!
              </p>
              <h2 className="text-md font-semibold">Content for Tab 1</h2>
              <p className="text-gray-700 text-sm">
                About Global AI Hackfest AI Planet is excited to announce the
                Global AI HackFest 2023, a collaborative effort with AI Business
                School, Global AI Hub, C-Level, and Learn Machine Learning. Our
                mission is to inspire the global community to create innovative
                solutions using state-of-the-art AI technologies and empower
                participants to launch their own successful startups. The Global
                AI HackFest serves as a platform for bringing together AI
                enthusiasts, developers, researchers, and entrepreneurs from all
                over the world. By fostering a spirit of collaboration and
                innovation, we aim to address pressing real-world challenges and
                unlock the transformative potential of AI across various
                industries. Why are we doing this? We believe in the power of AI
                to revolutionize the way we live, work, and communicate. By
                hosting the Global AI HackFest, we hope to: Drive innovation:
                The AI HackFest provides an environment where creative minds can
                come together to ideate, prototype, and develop groundbreaking
                AI solutions. Promote entrepreneurship: We encourage
                participants to take their innovative solutions beyond the AI
                HackFest and turn them into successful startups, contributing to
                the growth of the global AI ecosystem. Foster collaboration: By
                connecting experts, enthusiasts, and organizations from diverse
                backgrounds, we aim to facilitate knowledge sharing and
                collaboration that can lead to transformative AI advancements.
                Nurture talent: The AI HackFest serves as a learning ground for
                participants to enhance their AI skills, gain hands-on
                experience with cutting-edge technologies, and learn from
                industry leaders. Address real-world problems: By focusing on
                practical challenges, we aim to create a positive impact on
                society and the environment through the application of AI. Join
                us at the Global AI HackFest 2023 to be a part of this exciting
                journey towards a smarter, more innovative, and prosperous
                future!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OverView;
