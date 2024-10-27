import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route } from "react-router-dom";

const MainLayout = React.lazy(() => import("./../home/pages/layout"));
const Job = React.lazy(() => import("./../home/pages/job/dekstop/job"));
const Notification = React.lazy(() =>
  import("./../home/pages/notification/notification")
);
const MyProgress = React.lazy(() =>
  import("./../home/pages/myProgress/myprogress")
);
const MyFeed = React.lazy(() => import("@/home/pages/myFeed/myfeed"));
const MyFeedDetail = React.lazy(() =>
  import("@/home/pages/myFeed/component/feedDetail")
);
const Topics = React.lazy(() => import("@/home/pages/topics/topics"));
const Competitors = React.lazy(() =>
  import("@/home/pages/competitors/competitors")
);
const LeaderBoard = React.lazy(() =>
  import("@/home/pages/leaderboard/leaderboard")
);
const Courses = React.lazy(() => import("@/home/pages/courses/courses"));
const CareerPath = React.lazy(() =>
  import("@/home/pages/careerPath/careerPath")
);
const SkillPath = React.lazy(() => import("@/home/pages/skillPath/skillPath"));
const Projects = React.lazy(() => import("@/home/pages/projects/projects"));
const AccountSettings = React.lazy(() =>
  import("@/home/pages/accountSettings/accountsSettings")
);
const CoursesMobile = React.lazy(() =>
  import("@/home/pages/mobile/courses/courses")
);
const CareerPathMobile = React.lazy(() =>
  import("@/home/pages/mobile/careerPath/careerPath")
);
const SkillPathMobile = React.lazy(() =>
  import("@/home/pages/mobile/skillPath/skillPath")
);
const MyProgressMobile = React.lazy(() =>
  import("@/home/pages/mobile/myProgress/myprogress")
);
const MyFeedMobile = React.lazy(() =>
  import("@/home/pages/mobile/myFeed/myfeed")
);
const MyFeedDetailMobile = React.lazy(() =>
  import("@/home/pages/mobile/myFeed/myfeed")
);
const ProjectsMobile = React.lazy(() =>
  import("@/home/pages/mobile/projects/projects")
);

const Planet = React.lazy(() => import("@/home/pages/planet/planet"));
import TagProfile from "@/home/pages/topics/oneTopic";
import CourseDetails from "@/home/pages/courses/details";
import ProjectDetails from "@/home/pages/projects/details";
import CareerDetails from "@/home/pages/careerPath/details";
const CareerPathMoreDetails = React.lazy(() =>
  import("@/home/pages/careerPath/moreDetails")
);
const SkillPathMoreDetails = React.lazy(() =>
  import("@/home/pages/skillPath/moreDetails")
);
const ProfileMobile = React.lazy(() =>
  import("@/home/pages/mobile/profile/secondProfile")
);
import SkillPathDetails from "@/home/pages/skillPath/detail";
import LiveEvent from "@/home/pages/liveEvent/liveEvent";
import Assement from "@/home/pages/assesment/assement";
import AssementDetails from "@/home/pages/assesment/deatils";
import Catalog from "@/home/pages/catalog/catalog";
import ProfilePage from "@/home/pages/profile/firstProfile";
import SecondProfilePage from "@/home/pages/profile/secondProfile";
import { Routes } from "react-router-dom";

export default function DashboardRoutes() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Routes>
      <Route path="/dashboard" element={<MainLayout />}>
        <Route path="job" element={<Job />} />
        <Route path="notification" element={<Notification />} />

        <Route
          path="progress"
          index
          element={isMobile ? <MyProgressMobile /> : <MyProgress />}
        />
        <Route
          path="myfeed"
          element={isMobile ? <MyFeedMobile /> : <MyFeed />}
        />
        <Route
          path="myfeed/feeddetail"
          element={isMobile ? <MyFeedDetailMobile /> : <MyFeedDetail />}
        />
        <Route path="topics" element={<Topics />} />
        <Route path="topics/oneTopic" element={<TagProfile />} />

        <Route path="competitions" element={<Competitors />} />
        {/* <Route
                      path="competitions/host"
                      element={<CreateCompetition />}
                    /> */}

        <Route path="competitions/competitionPage" element={<Planet />} />

        <Route path="leaderboard" element={<LeaderBoard />} />
        <Route
          path="courses"
          element={isMobile ? <CoursesMobile /> : <Courses />}
        />
        <Route path="courses/details" element={<CourseDetails />} />
        <Route
          path="career"
          element={isMobile ? <CareerPathMobile /> : <CareerPath />}
        />
        <Route path="career/details" element={<CareerDetails />} />
        <Route path="career/more" element={<CareerPathMoreDetails />} />

        <Route
          path="skill"
          element={isMobile ? <SkillPathMobile /> : <SkillPath />}
        />
        <Route path="skill/details" element={<SkillPathDetails />} />
        <Route path="skill/more" element={<SkillPathMoreDetails />} />

        <Route
          path="projects"
          element={isMobile ? <ProjectsMobile /> : <Projects />}
        />
        <Route path="projects/details" element={<ProjectDetails />} />
        <Route path="liveevent" element={<LiveEvent />} />

        <Route path="assessment" element={<Assement />} />
        <Route path="assessment/details" element={<AssementDetails />} />
        <Route path="catalog" element={<Catalog />} />
        <Route
          path="editprofile"
          // element={isMobile ? <EditProfileMobile /> : <ProfilePage />}
          element={<ProfilePage />}
        />
        <Route
          path="profile"
          element={isMobile ? <ProfileMobile /> : <SecondProfilePage />}
        />
        <Route path="accountSettings" element={<AccountSettings />} />
      </Route>
    </Routes>
  );
}
