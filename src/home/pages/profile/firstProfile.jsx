// import React, { useState } from "react";
// import PersonalInfoForm from "./component/personalinfoform";
// import ResumeSection from "./component/resumeSection";
// import SkillsSection from "./component/skillSection";
// import ConnectInfoSection from "./component/connectinfor";
// import ExperienceForm from "./component/expForm";
// import {
//   createOrUpdateProfile,
//   getProfile,
// } from "../../../fetching/profileFetch";
// // Shadcn
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useEffect } from "react";
// import { getUserId } from "../../../fetching/decodingJwt";
// import { useSelector } from "react-redux";
// import SkillForm from "./component/skillForm";
// import WorkProofForm from "./component/workProof";
// import RecommendationForm from "./component/recommendationForm";
// import LangForm from "./component/languageForm";
// import SocialAccountForm from "./component/socialForm";
// import BannerEditProfile from "./component/banner";

// const ProfilePage = () => {
//   const reduxAccessToken = useSelector(
//     (state) => state.user.userData.reduxAccessToken
//   );

//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const id = await getUserId(reduxAccessToken);
//     await getProfile(id).then((res) => {
//       console.log(res);
//       setData(res);
//     });
//   };
//   return (
//     <div className="flex flex-col">
//       <div className="flex bg-gray-100 flex-row ">
//         <div className="max-w-holder w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
//           <div className="max-w-7xl mx-auto p-4">
//             <BannerEditProfile
//               // profileImg={`https://moviesnap.in/${data.profile_pic}`}
//               profileImg={`${data.profile_pic}`}
//             />
//             <Tabs defaultValue="personal" className="">
//               <TabsList className=" mt-4">
//                 <TabsTrigger value="personal">Account</TabsTrigger>
//                 <TabsTrigger value="experiance">Experiance</TabsTrigger>
//                 <TabsTrigger value="skill">Skill</TabsTrigger>
//                 <TabsTrigger value="work">Work Proof</TabsTrigger>
//                 {/* <TabsTrigger value="recommendation">Recommendation</TabsTrigger> */}
//                 <TabsTrigger value="language">Language</TabsTrigger>
//                 <TabsTrigger value="social">Socials</TabsTrigger>
//               </TabsList>
//               <TabsContent value="personal">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <PersonalInfoForm profileData={data} />
//                   <div className="space-y-6">
//                     <ResumeSection currentResume={data.resume_file} />
//                     <SkillsSection skills={data.skills} />
//                     <ConnectInfoSection />
//                   </div>
//                 </div>
//               </TabsContent>
//               <TabsContent value="experiance">
//                 <div className="gap-6">
//                   <ExperienceForm expData={data.experiences} />
//                 </div>
//               </TabsContent>
//               <TabsContent value="skill">
//                 <div className="gap-6">
//                   <SkillForm expData={data.skills} />
//                 </div>
//               </TabsContent>
//               <TabsContent value="work">
//                 <div className="gap-6">
//                   <WorkProofForm expData={data.proofs_of_work} />
//                 </div>
//               </TabsContent>
//               {/* <TabsContent value="recommendation">
//                 <div className="gap-6">
//                   <RecommendationForm expData={data.recommendations_given} />
//                 </div>
//               </TabsContent> */}
//               <TabsContent value="language">
//                 <div className="gap-6">
//                   <LangForm expData={data.talking_languages} />
//                 </div>
//               </TabsContent>
//               <TabsContent value="social">
//                 <div className="gap-6">
//                   <SocialAccountForm expData={data.social_accounts} />
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useState, useEffect } from "react";
import PersonalInfoForm from "./component/personalinfoform";
import ResumeSection from "./component/resumeSection";
import SkillsSection from "./component/skillSection";
import ConnectInfoSection from "./component/connectinfor";
import ExperienceForm from "./component/expForm";
import {
  createOrUpdateProfile,
  getProfile,
} from "../../../fetching/profileFetch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getUserId } from "../../../fetching/decodingJwt";
import { useSelector } from "react-redux";
import SkillForm from "./component/skillForm";
import WorkProofForm from "./component/workProof";
import RecommendationForm from "./component/recommendationForm";
import LangForm from "./component/languageForm";
import SocialAccountForm from "./component/socialForm";
import BannerEditProfile from "./component/banner";

const ProfilePage = () => {
  const reduxAccessToken = useSelector(
    (state) => state.user.userData.reduxAccessToken
  );

  const [data, setData] = useState({});
  const [skills, setSkills] = useState([]); // Move skills state here

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const id = await getUserId(reduxAccessToken);
    await getProfile(id).then((res) => {
      console.log(res);
      setData(res);
      setSkills(res.skills || []); // Set initial skills
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 flex-row ">
        <div className="max-w-holder w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
          <div className="max-w-7xl mx-auto p-4">
            <BannerEditProfile profileImg={`${data.profile_pic}`} />
            <Tabs defaultValue="personal" className="">
              <TabsList className=" mt-4">
                <TabsTrigger value="personal">Account</TabsTrigger>
                <TabsTrigger value="experiance">Experience</TabsTrigger>
                <TabsTrigger value="skill">Skill</TabsTrigger>
                <TabsTrigger value="work">Work Proof</TabsTrigger>
                <TabsTrigger value="language">Language</TabsTrigger>
                <TabsTrigger value="social">Socials</TabsTrigger>
              </TabsList>
              <TabsContent value="personal">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PersonalInfoForm profileData={data} />
                  <div className="space-y-6">
                    <ResumeSection currentResume={data.resume_file} />
                    <SkillsSection skills={skills} />
                    <ConnectInfoSection />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="experiance">
                <div className="gap-6">
                  <ExperienceForm expData={data.experiences} />
                </div>
              </TabsContent>
              <TabsContent value="skill">
                <div className="gap-6">
                  <SkillForm skills={skills} setSkills={setSkills} />
                </div>
              </TabsContent>
              <TabsContent value="work">
                <div className="gap-6">
                  <WorkProofForm expData={data.proofs_of_work} />
                </div>
              </TabsContent>
              <TabsContent value="language">
                <div className="gap-6">
                  <LangForm expData={data.talking_languages} />
                </div>
              </TabsContent>
              <TabsContent value="social">
                <div className="gap-6">
                  <SocialAccountForm expData={data.social_accounts} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
