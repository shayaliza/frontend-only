import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Layout from "@/components/Layout";
import Careerpath from "@/components/Careerpath";
import CPLayout from "@/components/CareerPathFolder/CareerPathLayout";
import Info from "@/components/CareerPathFolder/Info";
import AddTimeline from "@/components/CareerPathFolder/AddTimeline";
import Html from "@/components/CareerPathFolder/Html";
import Viewtimeline from "@/components/CareerPathFolder/Viewtimeline";
import Quiz from "@/components/CoursesFolder/Quiz";
import Course from "@/components/Courses";
import CourseLayout from "@/components/CoursesFolder/CourseLayout";
import CourseInfo from "@/components/CoursesFolder/CourseInfo";
import CourseBanner from "@/components/CoursesFolder/Banner";
import CourseSetting from "@/components/CoursesFolder/CourseSetting";
import AddProject from "@/components/CoursesFolder/AddProject";
import AttachAssessment from "@/components/CoursesFolder/AttachAssessment";
import CourseStructure from "@/components/CoursesFolder/CourseStructure";
import Introduction from "@/components/CoursesFolder/Introduction";
import Analytics from "@/components/Analytics";
import Users from "@/components/CoursesFolder/Users";
import Video from "@/components/CoursesFolder/Video";
import Test from "@/components/CoursesFolder/Test";
import Text from "@/components/CoursesFolder/Text";
import PracticeText from "@/components/CoursesFolder/PracticeText";
import CourseTestimonial from "@/components/CoursesFolder/CourseTestimonials";
import Create from "@/components/Create";
import More from "@/components/CoursesFolder/More";
const CourseInfoLayout = React.lazy(() =>
  import("@/components/CoursesFolder/CourseInfo/courseinfoLayout")
);

export default function CreateSnapRoutes() {
  return (
    <Routes>
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
      <Route path="/createsnap/career-path/preview" element={<CPLayout />}>
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
        <Route path="introduction/practicetext" element={<PracticeText />} />
      </Route>
    </Routes>
  );
}
