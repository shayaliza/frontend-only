import React, { useState } from "react";
import PersonalInfoForm from "./component/personalinfoform";
import ResumeSection from "./component/resumeSection";
import SkillsSection from "./component/skillSection";
import ConnectInfoSection from "./component/connectinfor";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/80"
  );
  const [bannerImage, setBannerImage] = useState(
    "https://via.placeholder.com/1500x300"
  );

  const handleImageChange = (e, setImage) => {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(e.target.files[0]);
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
                  onChange={(e) => handleImageChange(e, setBannerImage)}
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
                      onChange={(e) => handleImageChange(e, setProfileImage)}
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
                    <button className="bg-blue-500 text-white rounded-lg py-2 px-4">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9 p-2">
              <div className="flex justify-between items-center border-2 p-4 pb-4 mb-4 rounded-lg shadow-md">
                <div>
                  <button className="mr-2 text-blue-500 border-b-2 border-blue-500">
                    Profile
                  </button>
                  <button className="mr-2">Experience</button>
                  <button className="mr-2">Education</button>
                  <button>Work profile</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PersonalInfoForm />
                <div className="space-y-6">
                  <ResumeSection />
                  <SkillsSection />
                  <ConnectInfoSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
