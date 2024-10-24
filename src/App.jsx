import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { isIOSMobileOrTablet } from "./utils/isIOSMobileOrTablet";
import SplashScreen from "./SplashScreen";
import Courses from "./home/pages/courses/courses";
import SignIn from "./home/pages/authentication/signin";
import SignUp from "./home/pages/authentication/signup";
import CareerPath from "./home/pages/careerPath/careerPath";
import Projects from "./home/pages/projects/projects";
import ProjectDetails from "./home/pages/projects/details";
import CareerDetails from "./home/pages/careerPath/details";
import CourseDetails from "./home/pages/courses/details";
import MyProgress from "./home/pages/myProgress/myprogress";
import MyFeed from "./home/pages/myFeed/myfeed";
import MyFeedDetail from "./home/pages/myFeed/component/feedDetail";
import Topics from "./home/pages/topics/topics";
import Competitors from "./home/pages/competitors/competitors";
import LiveEvent from "./home/pages/liveEvent/liveEvent";
import LeaderBoard from "./home/pages/leaderboard/leaderboard";
import ForgotPassword from "./home/pages/authentication/forgotpass";
import LearnModule from "./home/pages/LearningModule/LearnModule";
import Assement from "./home/pages/assesment/assement";
import Catalog from "./home/pages/catalog/catalog";
import AssementDetails from "./home/pages/assesment/deatils";
import SkillPath from "./home/pages/skillPath/skillPath";
import SkillPathDetails from "./home/pages/skillPath/detail";
import ProfilePage from "./home/pages/profile/firstProfile";
import SecondProfilePage from "./home/pages/profile/secondProfile";
import Layout from "./components/Layout";
import Careerpath from "./components/Careerpath";
import CPLayout from "./components/CareerPathFolder/CareerPathLayout";
import Info from "./components/CareerPathFolder/Info";
import AddTimeline from "./components/CareerPathFolder/AddTimeline";
import Html from "./components/CareerPathFolder/Html";
import Viewtimeline from "./components/CareerPathFolder/Viewtimeline";
import Quiz from "./components/CoursesFolder/Quiz";
import Course from "./components/Courses";
import CourseLayout from "./components/CoursesFolder/CourseLayout";
import CourseInfo from "./components/CoursesFolder/CourseInfo";
import CourseBanner from "./components/CoursesFolder/Banner";
import CourseSetting from "./components/CoursesFolder/CourseSetting";
import AddProject from "./components/CoursesFolder/AddProject";
import AttachAssessment from "./components/CoursesFolder/AttachAssessment";
import CourseStructure from "./components/CoursesFolder/CourseStructure";
import Introduction from "./components/CoursesFolder/Introduction";
import Analytics from "./components/Analytics";
import Users from "./components/CoursesFolder/Users";
import Video from "./components/CoursesFolder/Video";
import Test from "./components/CoursesFolder/Test";
import Text from "./components/CoursesFolder/Text";
import PracticeText from "./components/CoursesFolder/PracticeText";
import CourseTestimonial from "./components/CoursesFolder/CourseTestimonials";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import VerifyEmailToken from "./home/pages/authentication/verifyEmailToken";
import SendMail from "./home/pages/authentication/sendMail";
import setupInterceptors from "./fetching/Interceptor/interceptors";
import DataSnapLayout from "./datasnap/components/Layout";
import BlogHome from "./datasnap/components/Home";
import BlogExplore from "./datasnap/components/Explore";
import BlogDrafts from "./datasnap/components/Drafts";
import BlogBookmarks from "./datasnap/components/Bookmarks";
import BlogSearch from "./datasnap/components/Search";
import BlogCreate from "./datasnap/components/Blog/BlogCreate";
import BlogDetails from "./datasnap/components/Details";
import MSMobileLayout from "./managesnap/components/Mobileview/Layout";
import MSMobileChannels from "./managesnap/components/Mobileview/Home";
import MSMobileMessages from "./managesnap/components/Mobileview/Messages";
import MSMobileCalendar from "./managesnap/components/Mobileview/Calendar";
import MSMobileNotification from "./managesnap/components/Mobileview/Notification";
import MSMobileSettings from "./managesnap/components/Mobileview/Settings";
import MSMobileChat from "./managesnap/components/Mobileview/Chat";
import MSMobileProfile from "./managesnap/components/Mobileview/Profile";
import MSMobileSearch from "./managesnap/components/Mobileview/Search";
import MSDesktopLayout from "./managesnap/components/HomeLayout";
import MSDesktopDMs from "./managesnap/components/DMsLayout"
import { useState } from "react";
import { useEffect } from "react";
import Create from "./components/Create";
import More from "./components/CoursesFolder/More";
import Notification from "./home/pages/notification/notification";
import Search from "./home/pages/search/search";
const MainLayout = React.lazy(() => import("./home/pages/layout"));
const SetNewPassword = React.lazy(() =>
  import("./home/pages/authentication/setNewpass")
);
const LandingPage = React.lazy(() => import("./home/pages/landingPage"));
const DetailPageLayout = React.lazy(() =>
  import("./home/pages/details/layout")
);
const Job = React.lazy(() => import("./home/pages/job/dekstop/job"));
const First = React.lazy(() => import("./home/pages/details/first"));
const Second = React.lazy(() => import("./home/pages/details/second"));
const Third = React.lazy(() => import("./home/pages/details/third"));
const Fourth = React.lazy(() => import("./home/pages/details/fourth"));
const AccountSettings = React.lazy(() =>
  import("./home/pages/accountSettings/accountsSettings")
);
const Planet = React.lazy(() => import("./home/pages/planet/planet"));
const TestPage = React.lazy(() => import("./home/pages/testPage/testPage"));
const CourseInfoLayout = React.lazy(() =>
  import("./components/CoursesFolder/CourseInfo/courseinfoLayout")
);

const MyProgressMobile = React.lazy(() =>
  import("./home/pages/mobile/myProgress/myprogress")
);

const MyFeedMobile = React.lazy(() =>
  import("./home/pages/mobile/myFeed/myfeed")
);

const CareerPathMobile = React.lazy(() =>
  import("./home/pages/mobile/careerPath/careerPath")
);

const CoursesMobile = React.lazy(() =>
  import("./home/pages/mobile/courses/courses")
);

const SkillPathMobile = React.lazy(() =>
  import("./home/pages/mobile/skillPath/skillPath")
);

const ProjectsMobile = React.lazy(() =>
  import("./home/pages/mobile/projects/projects")
);

const ProfileMobile = React.lazy(() =>
  import("./home/pages/mobile/profile/secondProfile")
);
import MyFeedDetailMobile from "./home/pages/mobile/myFeed/component/feedDetail";
import TagProfile from "./home/pages/topics/oneTopic";
import Main from "./managesnap/components/Main";

// const EditProfileMobile = React.lazy(() =>
//   import("./home/pages/mobile/profile/firstProfile")
// );
const TestPage2 = React.lazy(() => import("./home/pages/testPage/testPage2"));
const SkillPathMoreDetails = React.lazy(() =>
  import("./home/pages/skillPath/moreDetails")
);
const CareerPathMoreDetails = React.lazy(() =>
  import("./home/pages/careerPath/moreDetails")
);

//@ Organizations Imports
const OrganizationLayout = React.lazy(() => import("./organization/layout"));
const OrganizationFirst = React.lazy(() => import("./organization/first"));
const OrganizationSecond = React.lazy(() => import("./organization/second"));
const OrganizationThird = React.lazy(() => import("./organization/third"));
const OrganizationFourth = React.lazy(() => import("./organization/fourth"));
const OrganizationFifth = React.lazy(() => import("./organization/fifth"));
const OrganizationSixth = React.lazy(() => import("./organization/sixth"));
// setting up interceptors
setupInterceptors();
function AppRoutes() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const splashScreenShown = sessionStorage.getItem("splashScreenShown");

  useEffect(() => {
    if (!splashScreenShown && isIOSMobileOrTablet()) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        sessionStorage.setItem("splashScreenShown", "true");
        setShowSplash(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [showSplash]);

  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <div className="">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Suspense fallback={<FaSpinner className="animate-spin" />}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/verify-email" element={<VerifyEmailToken />} />
              {/*  */}

              <>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset-password" element={<SetNewPassword />} />
                <Route path="/detailspage" element={<CourseDetails />} />
                <Route path="/search" element={<Search />} />
              </>
              <Route path="/resendmail" element={<SendMail />} />
              <Route path="testpage" element={<TestPage />} />
              <Route path="testpage2" element={<TestPage2 />} />
              {/*// All Dashboard Routes //*/}
              <>
                {loggedIn && (
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
                      element={
                        isMobile ? <MyFeedDetailMobile /> : <MyFeedDetail />
                      }
                    />
                    <Route path="topics" element={<Topics />} />
                    <Route path="topics/oneTopic" element={<TagProfile />} />

                    <Route path="competitions" element={<Competitors />} />
                    <Route
                      path="competitions/competitionPage"
                      element={<Planet />}
                    />

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
                    <Route
                      path="career/more"
                      element={<CareerPathMoreDetails />}
                    />

                    <Route
                      path="skill"
                      element={isMobile ? <SkillPathMobile /> : <SkillPath />}
                    />
                    <Route
                      path="skill/details"
                      element={<SkillPathDetails />}
                    />
                    <Route
                      path="skill/more"
                      element={<SkillPathMoreDetails />}
                    />

                    <Route
                      path="projects"
                      element={isMobile ? <ProjectsMobile /> : <Projects />}
                    />
                    <Route
                      path="projects/details"
                      element={<ProjectDetails />}
                    />
                    <Route path="liveevent" element={<LiveEvent />} />

                    <Route path="assessment" element={<Assement />} />
                    <Route
                      path="assessment/details"
                      element={<AssementDetails />}
                    />
                    <Route path="catalog" element={<Catalog />} />
                    <Route
                      path="editprofile"
                      // element={isMobile ? <EditProfileMobile /> : <ProfilePage />}
                      element={<ProfilePage />}
                    />
                    <Route
                      path="profile"
                      element={
                        isMobile ? <ProfileMobile /> : <SecondProfilePage />
                      }
                    />
                    <Route
                      path="accountSettings"
                      element={<AccountSettings />}
                    />
                  </Route>
                )}

                <Route path="learningmodule" element={<LearnModule />} />

                <Route path="detailsPages" element={<DetailPageLayout />}>
                  <Route path="first" element={<First />} />
                  <Route path="second" element={<Second />} />
                  <Route path="third" element={<Third />} />
                  <Route path="fourth" element={<Fourth />} />
                </Route>

                {isMobile ? (
                  <>
                    <Route path="/managesnap" element={<MSMobileLayout />}>
                      <Route
                        index
                        element={<Navigate to="channels" replace />}
                      />
                      <Route path="channels" element={<MSMobileChannels />} />
                      <Route path="dms" element={<MSMobileMessages />} />
                      <Route path="calendar" element={<MSMobileCalendar />} />
                      <Route
                        path="notifications"
                        element={<MSMobileNotification />}
                      />
                      <Route path="settings" element={<MSMobileSettings />} />
                    </Route>
                    <Route
                      path="/managesnap/chat/:type/:id"
                      element={<MSMobileChat />}
                    />
                    <Route
                      path="/managesnap/profile/:id"
                      element={<MSMobileProfile />}
                    />
                    <Route
                      path="/managesnap/search"
                      element={<MSMobileSearch />}
                    />
                  </>
                ) : (
                  <>
                    <Route
                      path="/managesnap/channels"
                      element={<MSDesktopLayout />}
                    />
                    <Route
                      path="/managesnap/channels/:channelName"
                      element={<MSDesktopLayout />}
                    />
                    <Route
                      path="/managesnap/direct/:dmName"
                      element={<MSDesktopLayout />}
                    />
                    <Route
                      path="/managesnap/dms"
                      element={<MSDesktopDMs />}
                    />
                  </>
                )}

                <Route path="/createsnap" element={<Layout />}>
                  <Route
                    index
                    element={<Navigate to="/createsnap/analytics" replace />}
                  />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="career-path" element={<Careerpath />} />
                  <Route path="course" element={<Course />} />
                  <Route path="create" element={<Create />} />
                </Route>
                <Route
                  path="/createsnap/career-path/preview"
                  element={<CPLayout />}
                >
                  <Route index element={<Info />} />
                  <Route path="info" element={<Info />} />
                  <Route path="addtimeline" element={<AddTimeline />} />
                  <Route path="viewtimeline" element={<Viewtimeline />} />
                  <Route path="html" element={<Html />} />
                </Route>
                <Route
                  path="/createsnap/course/:courseId/started"
                  element={<CourseLayout />}
                >
                  <Route index element={<CourseInfo />} />
                  <Route path="info" element={<CourseInfo />} />
                  <Route path="info2" element={<CourseInfoLayout />} />
                  <Route path="users" element={<Users />} />
                  <Route path="banner" element={<CourseBanner />} />
                  <Route path="coursesetting" element={<CourseSetting />} />
                  <Route path="addproject" element={<AddProject />} />
                  <Route path="addassessment" element={<AttachAssessment />} />
                  <Route path="coursestructure" element={<CourseStructure />} />
                  <Route path="testimonial" element={<CourseTestimonial />} />
                  <Route path="more" element={<More />} />
                  <Route path="introduction" element={<Introduction />} />
                  <Route path="introduction/quiz" element={<Quiz />} />
                  <Route path="introduction/video" element={<Video />} />
                  <Route path="introduction/test" element={<Test />} />
                  <Route path="introduction/text" element={<Text />} />
                  <Route
                    path="introduction/practicetext"
                    element={<PracticeText />}
                  />
                </Route>

                <Route path="/datasnap" element={<DataSnapLayout />}>
                  <Route index element={<Navigate to="home" replace />} />
                  <Route path="home" element={<BlogHome />} />
                  <Route path="explore" element={<BlogExplore />} />
                  <Route path="drafts" element={<BlogDrafts />} />
                  <Route path="bookmarks" element={<BlogBookmarks />} />
                  <Route path="detail" element={<BlogDetails />} />
                </Route>
                <Route path="ds/create" element={<BlogCreate />} />
                <Route path="ds/search" element={<BlogSearch />} />
              </>

              {/* Organization or WorkSpace Routes */}
              <Route path="/organization" element={<OrganizationLayout />}>
                <Route index path="first" element={<OrganizationFirst />} />
                <Route path="second" element={<OrganizationSecond />} />
                <Route path="third" element={<OrganizationThird />} />
                <Route path="fourth" element={<OrganizationFourth />} />
                <Route path="fifth" element={<OrganizationFifth />} />
                <Route path="sixth" element={<OrganizationSixth />} />
              </Route>
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </Router>
        </Suspense>
      )}
    </div>
  );
}

export default AppRoutes;
