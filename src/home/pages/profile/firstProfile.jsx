import React, { useState, useEffect } from "react";
import PersonalInfoForm from "./component/personalinfoform";
import ResumeSection from "./component/resumeSection";
import SkillsSection from "./component/skillSection";
import ConnectInfoSection from "./component/connectinfor";
import ExperienceForm from "./component/expForm";
import {
  addExperianceFetch,
  addLanguageFetch,
  addSkillFetch,
  addSocialFetch,
  addWorkProofFetch,
  createOrUpdateProfile,
  deleteExperianceFetch,
  deleteLanguageFetch,
  deleteSkillFetch,
  deleteSocialFetch,
  deleteWorkProofFetch,
  getProfile,
  updateExperianceFetch,
  updateLanguageFetch,
  updateSocialFetch,
  updateWorkProofFetch,
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
import { setUserData } from "../../../features/user/userSlice";
import { useDispatch } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const reduxAccessToken = useSelector(
    (state) => state.user.userData.reduxAccessToken
  );

  const [data, setData] = useState({});
  //Children Components
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [workProofs, setWorkProofs] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const id = await getUserId(reduxAccessToken);
    await getProfile(id).then((res) => {
      console.log(res);
      setData(res);
      setSkills(res.skills || []);
      setExperiences(res.experiences || []);
      setWorkProofs(res.proofs_of_work || []);
      setLanguages(res.talking_languages || []);
      setSocialData(res.social_accounts);
    });
  };

  // @Top Skills
  const handleAddSkill = async (newSkill) => {
    const skillData = { name: newSkill, skill_type: "top" };
    try {
      const response = await addSkillFetch(skillData);
      if (response.status === 201) {
        setSkills((prevSkills) => [...prevSkills, response.data]);
        toast({ title: "Skill Added" });
      }
    } catch (error) {
      console.error("Error adding skill:", error);
      toast({ title: "Error adding skill", variant: "destructive" });
    }
  };

  const handleRemoveSkill = async (skillId) => {
    try {
      const response = await deleteSkillFetch(skillId);
      if (response.status === 204) {
        setSkills((prevSkills) =>
          prevSkills.filter((skill) => skill.id !== skillId)
        );
        toast({ title: "Skill Deleted" });
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
      toast({ title: "Error deleting skill", variant: "destructive" });
    }
  };
  // @Experiance
  const handleAddExperience = async (experienceData) => {
    await addExperianceFetch(experienceData).then((res) => {
      if (res.status === 201) {
        setExperiences([...experiences, res.data]);
      }
    });
  };

  const handleEditExperience = async (id, experienceData) => {
    await updateExperianceFetch(experienceData, id).then((res) => {
      if (res.status === 200) {
        setExperiences(
          experiences.map((exp) => (exp.id === id ? res.data : exp))
        );
      }
    });
  };

  const handleDeleteExperience = async (id) => {
    await deleteExperianceFetch(id).then((res) => {
      if (res.status === 204) {
        setExperiences(experiences.filter((exp) => exp.id !== id));
      }
    });
  };

  //@Work Proof

  const handleAddWorkProof = async (workData) => {
    const res = await addWorkProofFetch(workData);
    if (res.status === 201) {
      setWorkProofs([...workProofs, res.data]);
    }
  };

  const handleEditWorkProof = async (id, workData) => {
    const res = await updateWorkProofFetch(workData, id);
    if (res.status === 200) {
      setWorkProofs(
        workProofs.map((work) =>
          work.id === id ? { ...work, ...res.data } : work
        )
      );
    }
  };

  const handleDeleteWorkProof = async (id) => {
    const res = await deleteWorkProofFetch(id);
    if (res.status === 204) {
      setWorkProofs(workProofs.filter((work) => work.id !== id));
    }
  };

  // @Language

  const handleAddLanguage = async (languageData) => {
    const res = await addLanguageFetch(languageData);
    if (res.status === 201) {
      setLanguages([...languages, res.data]);
    }
  };

  const handleEditLanguage = async (id, languageData) => {
    const res = await updateLanguageFetch(languageData, id);
    if (res.status === 200) {
      setLanguages(
        languages.map((lang) =>
          lang.id === id ? { ...lang, ...res.data } : lang
        )
      );
    }
  };

  const handleDeleteLanguage = async (id) => {
    const res = await deleteLanguageFetch(id);
    if (res.status === 204) {
      setLanguages(languages.filter((lang) => lang.id !== id));
    }
  };
  // @Social
  const handleAddSocial = async (newSocial) => {
    const res = await addSocialFetch(newSocial);
    if (res.status === 201) {
      setSocialData([...socialData, res.data]);
    }
  };

  const handleEditSocial = async (updatedSocial, id) => {
    console.log(updatedSocial, "updatedSocial");
    console.log(id, "id");
    const res = await updateSocialFetch(updatedSocial, id);
    if (res.status === 200) {
      setSocialData(
        socialData.map((social) =>
          social.id === id ? { ...social, ...res.data } : social
        )
      );
    }
  };

  const handleDeleteSocial = async (id) => {
    const res = await deleteSocialFetch(id);
    if (res.status === 204) {
      setSocialData(socialData.filter((social) => social.id !== id));
    }
  };

  // const changeREfressToekn = () => {
  //   console.log("Change refresh Token");
  //   dispatch(
  //     setUserData({
  //       reduxRefreshToken:
  //         "eyhhbGciOiJIUzI1NiosInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyNDUzNzI1OSwiaWF0IjoxNzIzMjQxMjU5LCJqdGkiOiIzMWYwZTZmZWVhM2M0MzU5ODgzM2JmZDk5ZGFkZDM0YiIsInVzZXJfaWQiOjd9.TMcOv6L4hHRJotLC4dJEf6EgU6alhXRwRTV3iKLLWJ8",
  //     })
  //   );
  // };
  // const changeAccessToekn = () => {
  //   console.log("Change Access Token");
  //   dispatch(
  //     setUserData({
  //       reduxAccessToken:
  //         "eyJhbociOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzMzI3NjU5LCJpYXQiOjE3MjMyNDEyNTksImp0aSI6ImNiMTA3ZWFhYzhlMjQyYzliYzQ0YjI4MjQ5M2FmZjk5IiwidXNlcl9pZCI6NywiaXNfY3JlYXRvciI6ZmFsc2UsImlzX3NlcnZpY2VfcHJvdmlkZXIiOmZhbHNlLCJpc19hbmFseXN0IjpmYWxzZSwiaXNfc25hcHBlciI6ZmFsc2UsImlzX2VtYWlsX3ZlcmlmaWVkIjp0cnVlfQ.jRHiccjAksM_bZ1gPj3Jq-3I7eGCB44Te8llu7LLx9I",
  //     })
  //   );
  // };
  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 flex-row ">
        <div className="max-w-holder w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
          <div className="max-w-7xl mx-auto p-4">
            <BannerEditProfile profileImg={`${data.profile_pic}`} />
            {/* <div onClick={changeREfressToekn}>Chagne Refress Token</div> */}
            {/* <div onClick={changeAccessToekn}>Change Access Token</div> */}
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
                    <SkillsSection
                      skills={skills}
                      onAddSkill={handleAddSkill}
                      onRemoveSkill={handleRemoveSkill}
                    />
                    <ConnectInfoSection
                      socialData={socialData}
                      onAddSocial={handleAddSocial}
                      onEditSocial={handleEditSocial}
                      onDeleteSocial={handleDeleteSocial}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="experiance">
                <div className="gap-6">
                  <ExperienceForm
                    expData={experiences}
                    onAddExperience={handleAddExperience}
                    onEditExperience={handleEditExperience}
                    onDeleteExperience={handleDeleteExperience}
                  />
                </div>
              </TabsContent>
              <TabsContent value="skill">
                <div className="gap-6">
                  <SkillForm skills={skills} setSkills={setSkills} />
                </div>
              </TabsContent>
              <TabsContent value="work">
                <div className="gap-6">
                  <WorkProofForm
                    workData={workProofs}
                    onAddWorkProof={handleAddWorkProof}
                    onEditWorkProof={handleEditWorkProof}
                    onDeleteWorkProof={handleDeleteWorkProof}
                  />
                </div>
              </TabsContent>
              <TabsContent value="language">
                <div className="gap-6">
                  <LangForm
                    languageData={languages}
                    onAddLanguage={handleAddLanguage}
                    onEditLanguage={handleEditLanguage}
                    onDeleteLanguage={handleDeleteLanguage}
                  />
                </div>
              </TabsContent>
              <TabsContent value="social">
                <div className="gap-6">
                  <SocialAccountForm
                    socialData={socialData}
                    onAddSocial={handleAddSocial}
                    onEditSocial={handleEditSocial}
                    onDeleteSocial={handleDeleteSocial}
                  />
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
