import React from "react";
import Navbar from "./comp/navbar";
import EventCard from "./comp/banner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import OverView from "./comp/overview";

function Planet() {
  return (
    <div>
      <Navbar />
      <EventCard />
      <div className="w-full">
        <Tabs defaultValue="overview" className="w-full">
          <div className="md:w-9/12 mx-auto mb-4 mt-4 flex flex-wrap overflow-x-scroll md:overflow-hidden">
            <TabsList className="">
              <TabsTrigger value="overview" className="text-xl">
                Overview
              </TabsTrigger>
              <TabsTrigger value="notebook" className="text-xl">
                Notebook
              </TabsTrigger>
              <TabsTrigger value="discussion" className="text-xl">
                Discussion
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="text-xl">
                Leaderboard
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="w-full">
            <OverView />
          </TabsContent>
          <TabsContent value="notebook">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Planet;
