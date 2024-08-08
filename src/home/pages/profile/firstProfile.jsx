import React, { useState } from "react";
import PersonalInfoForm from "./component/personalinfoform";
import ResumeSection from "./component/resumeSection";
import SkillsSection from "./component/skillSection";
import ConnectInfoSection from "./component/connectinfor";
import ExperienceForm from "./component/expForm";
import {
  createOrUpdateProfile,
  getProfile,
} from "../../../fetching/profileFetch";
// Shadcn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { getUserId } from "../../../fetching/decodingJwt";
import { useSelector } from "react-redux";
import SkillForm from "./component/skillForm";
import WorkProofForm from "./component/workProof";
import RecommendationForm from "./component/recommendationForm";
import LangForm from "./component/languageForm";
import SocialAccountForm from "./component/socialForm";

const ProfilePage = () => {
  const reduxAccessToken = useSelector(
    (state) => state.user.userData.reduxAccessToken
  );
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/80"
  );
  const [bannerImage, setBannerImage] = useState(
    "https://via.placeholder.com/1500x300"
  );
  const [profileFile, setProfileFile] = useState(null);
  const [data, setData] = useState({});

  const handleImageChange = (e) => {
    setProfileFile(e.target.files[0]);
  };

  const handleSaveChanges = async () => {
    if (profileFile) {
      console.log("Resume file:", profileFile);
    }
    if (profileFile) {
      try {
        const response = await createOrUpdateProfile({}, profileFile, null);
        console.log("Profile uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading resume:", error);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const id = await getUserId(reduxAccessToken);
    await getProfile(id).then((res) => {
      console.log(res);
      setData(res);
    });
  };
  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 flex-row ">
        <div className="max-w-holder w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
          <div className="max-w-7xl mx-auto p-4">
            <div className=" mx-auto ">
              <div className="relative">
                <img
                  src={bannerImage}
                  alt="Banner"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <input
                  type="file"
                  className="hidden"
                  id="uploadBanner"
                  // onChange={(e) => handleImageChange(e, setBannerImage)}
                />
                <button
                  onClick={() =>
                    document.getElementById("uploadBanner").click()
                  }
                  className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit banner
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-9 mr-9 left-5 relative -mt-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-24 h-24 rounded-full border-4 border-white"
                    />
                    <input
                      type="file"
                      className="hidden"
                      id="uploadProfile"
                      onChange={handleImageChange}
                    />
                    <button
                      onClick={() =>
                        document.getElementById("uploadProfile").click()
                      }
                      className="ml-4 bg-white border border-gray-300 rounded-full py-4 px-4 shadow-md"
                    >
                      Profile Image
                    </button>
                  </div>
                  <div>
                    <button className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 mr-2">
                      Cancel changes
                    </button>
                    <button
                      onClick={handleSaveChanges}
                      className="bg-blue-500 text-white rounded-lg py-2 px-4"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Tabs defaultValue="personal" className="">
              <TabsList className=" mt-4">
                <TabsTrigger value="personal">Account</TabsTrigger>
                <TabsTrigger value="experiance">Experiance</TabsTrigger>
                <TabsTrigger value="skill">Skill</TabsTrigger>
                <TabsTrigger value="work">Work Proof</TabsTrigger>
                <TabsTrigger value="recommendation">Recommendation</TabsTrigger>
                <TabsTrigger value="language">Language</TabsTrigger>
                <TabsTrigger value="social">Socials</TabsTrigger>
              </TabsList>
              <TabsContent value="personal">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PersonalInfoForm profileData={data} />
                  <div className="space-y-6">
                    <ResumeSection />
                    <SkillsSection skills={data.skills} />
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
                  <SkillForm expData={data.skills} />
                </div>
              </TabsContent>
              <TabsContent value="work">
                <div className="gap-6">
                  <WorkProofForm expData={data.proofs_of_work} />
                </div>
              </TabsContent>
              <TabsContent value="recommendation">
                <div className="gap-6">
                  <RecommendationForm expData={data.recommendations_given} />
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
