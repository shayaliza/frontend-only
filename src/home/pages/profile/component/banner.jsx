import React, { useState, useEffect } from "react";
import { createOrUpdateProfile } from "../../../../fetching/profileFetch";
import { useToast } from "@/components/ui/use-toast";
import { TbUserEdit } from "react-icons/tb";
function BannerEditProfile({ profileImg }) {
  const { toast } = useToast();
  const [initialProfileImage, setInitialProfileImage] = useState(
    profileImg || "https://via.placeholder.com/150"
  );
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [profileFile, setProfileFile] = useState(null);

  useEffect(() => {
    if (profileFile) {
      const imageUrl = URL.createObjectURL(profileFile);
      setProfileImage(imageUrl);
    }
  }, [profileFile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileFile(file);
    }
  };

  const handleSaveChanges = async () => {
    if (profileFile) {
      try {
        const response = await createOrUpdateProfile({}, profileFile, null);
        const newProfileImageUrl = `https://moviesnap.in${response.data.profile_pic}`;
        setProfileImage(newProfileImageUrl);
        setInitialProfileImage(newProfileImageUrl);
        setProfileFile(null);
        toast({
          title: "Profile Updated",
        });
      } catch (error) {
        console.error("Error uploading profile image:", error);
        toast({
          title: "Error uploading profile image",
          variant: "destructive",
        });
      }
    }
  };

  const handleCancelChanges = () => {
    setProfileImage(initialProfileImage);
    setProfileFile(null);
  };

  return (
    <div className="mx-auto">
      <div className="relative">
        <img
          src="https://via.placeholder.com/1500x300"
          alt="Banner"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="bg-white rounded-lg shadow-xl p-9 mr-9 left-5 relative -mt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
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
                onClick={() => document.getElementById("uploadProfile").click()}
                className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-2 shadow-md"
              >
                <TbUserEdit />
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={handleCancelChanges}
              className={`bg-gray-200 text-gray-700 rounded-lg py-2 px-4 mr-2 ${
                !profileFile ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={!profileFile}
            >
              Cancel changes
            </button>
            <button
              onClick={handleSaveChanges}
              className={`bg-blue-500 text-white rounded-lg py-2 px-4 ${
                !profileFile ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={!profileFile}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerEditProfile;
