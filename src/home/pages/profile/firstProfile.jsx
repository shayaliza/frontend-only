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
// import { getUserId } from "../../../fetching/decodingJwt";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillForm from "./component/skillForm";
import WorkProofForm from "./component/workProof";
import LangForm from "./component/languageForm";
import SocialAccountForm from "./component/socialForm";
import BannerEditProfile from "./component/banner";

const ProfilePage = () => {
  const [data, setData] = useState({});
  //Children Components
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "HTML",
      skill_type: "top",
    },
    {
      id: 2,
      name: "CSS",
      skill_type: "top",
    },
    {
      id: 3,
      name: "JavaScript",
      skill_type: "top",
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Software Developer",
      company_name: "Google",
      location: "Mountain View, CA",
      start_date: "2022-01-01",
      end_date: "2022-12-31",
    },
    {
      id: 1,
      title: "Software Developer",
      company_name: "Google",
      location: "Mountain View, CA",
      start_date: "2022-01-01",
      end_date: "2022-12-31",
    },
    {
      id: 1,
      title: "Software Developer",
      company_name: "Google",
      location: "Mountain View, CA",
      start_date: "2022-01-01",
      end_date: "2022-12-31",
    },
    {
      id: 1,
      title: "Software Developer",
      company_name: "Google",
      location: "Mountain View, CA",
      start_date: "2022-01-01",
      end_date: "2022-12-31",
    },
  ]);
  const [workProofs, setWorkProofs] = useState([
    {
      id: 1,
      title: "Google",
      link: "https://google.com",
    },
    {
      id: 1,
      title: "Google",
      link: "https://google.com",
    },
  ]);
  const [languages, setLanguages] = useState([
    {
      id: 1,
      title: "English",
      level: "Intermediate",
    },
    {
      id: 2,
      title: "Spanish",
      level: "Intermediate",
    },
  ]);
  const [socialData, setSocialData] = useState([
    {
      id: 1,
      title: "Github",
      link: "https://github.com",
    },
    {
      id: 2,
      title: "LinkedIn",
      link: "https://linkedin.com",
    },
  ]);

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
    setSkills((prevSkills) => [...prevSkills, response.data]);
    toast({ title: "Skill Added" });
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

    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill.id !== skillId)
    );
    toast({ title: "Skill Deleted" });
  };
  // @Experiance
  const handleAddExperience = async (experienceData) => {
    await addExperianceFetch(experienceData).then((res) => {
      if (res.status === 201) {
        setExperiences([...experiences, res.data]);
      }
    });
    setExperiences([...experiences, res.data]);
  };

  const handleEditExperience = async (id, experienceData) => {
    await updateExperianceFetch(experienceData, id).then((res) => {
      if (res.status === 200) {
        setExperiences(
          experiences.map((exp) => (exp.id === id ? res.data : exp))
        );
      }
    });
    setExperiences(experiences.map((exp) => (exp.id === id ? res.data : exp)));
  };

  const handleDeleteExperience = async (id) => {
    await deleteExperianceFetch(id).then((res) => {
      if (res.status === 204) {
        setExperiences(experiences.filter((exp) => exp.id !== id));
      }
    });
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  //@Work Proof

  const handleAddWorkProof = async (workData) => {
    const res = await addWorkProofFetch(workData);
    if (res.status === 201) {
      setWorkProofs([...workProofs, res.data]);
    }
    setWorkProofs([...workProofs, res.data]);
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
    setWorkProofs(
      workProofs.map((work) =>
        work.id === id ? { ...work, ...res.data } : work
      )
    );
  };

  const handleDeleteWorkProof = async (id) => {
    const res = await deleteWorkProofFetch(id);
    if (res.status === 204) {
      setWorkProofs(workProofs.filter((work) => work.id !== id));
    }
    setWorkProofs(workProofs.filter((work) => work.id !== id));
  };

  // @Language

  const handleAddLanguage = async (languageData) => {
    const res = await addLanguageFetch(languageData);
    if (res.status === 201) {
      setLanguages([...languages, res.data]);
    }
    setLanguages([...languages, res.data]);
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
    setLanguages(
      languages.map((lang) =>
        lang.id === id ? { ...lang, ...res.data } : lang
      )
    );
  };

  const handleDeleteLanguage = async (id) => {
    const res = await deleteLanguageFetch(id);
    if (res.status === 204) {
      setLanguages(languages.filter((lang) => lang.id !== id));
    }
    setLanguages(languages.filter((lang) => lang.id !== id));
  };
  // @Social
  const handleAddSocial = async (newSocial) => {
    const res = await addSocialFetch(newSocial);
    if (res.status === 201) {
      setSocialData([...socialData, res.data]);
    }
    setSocialData([...socialData, res.data]);
  };

  const handleEditSocial = async (updatedSocial, id) => {
    const res = await updateSocialFetch(updatedSocial, id);
    if (res.status === 200) {
      setSocialData(
        socialData.map((social) =>
          social.id === id ? { ...social, ...res.data } : social
        )
      );
    }
    setSocialData(
      socialData.map((social) =>
        social.id === id ? { ...social, ...res.data } : social
      )
    );
  };

  const handleDeleteSocial = async (id) => {
    const res = await deleteSocialFetch(id);
    if (res.status === 204) {
      setSocialData(socialData.filter((social) => social.id !== id));
    }
    setSocialData(socialData.filter((social) => social.id !== id));
  };

  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 flex-row ">
        <div className="max-w-holder w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
          <div className="max-w-7xl mx-auto p-4">
            <BannerEditProfile
              profileImg={`https://snapgpt.online/${data.profile_pic}`}
            />
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
