import React, { useState, useEffect } from "react";
import { createOrUpdateProfile } from "./../../../../fetching/profileFetch";

const PersonalInfoForm = (profileData) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    headline: "",
    country: "",
    state: "",
    phoneNumber: "",
    visibility: false,
    about: "",
  });
  // console.log(profileData, "do i get here");

  // console.log(profileData.profileData.full_name, "do i get here");

  useEffect(() => {
    if (profileData) {
      setPersonalInfo({
        fullName: profileData.profileData.full_name || "",
        headline: profileData.profileData.headline || "",
        country: profileData.profileData.country || "",
        state: profileData.profileData.state || "",
        phoneNumber: profileData.profileData.phone_number || "",
        visibility: profileData.profileData.is_profile_public || false,
        about: profileData.profileData.bio || "",
      });
    }
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileData = {
      full_name: personalInfo.fullName,
      country: personalInfo.country,
      state: personalInfo.state,
      phone_number: personalInfo.phoneNumber,
      is_profile_public: personalInfo.visibility,
      bio: personalInfo.about,
    };
    try {
      const response = await createOrUpdateProfile(profileData).then((res) => {
        // console.log("Profile updated successfully:", res.data);
        alert("Profile updated successfully");
      });
      // console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">Personal Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label className="block mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={personalInfo.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block mb-1">State</label>
            <input
              type="text"
              name="state"
              value={personalInfo.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Visibility</label>
          <select
            name="visibility"
            value={personalInfo.visibility}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value={false}>Private</option>
            <option value={true}>Public</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">About</label>
          <textarea
            name="about"
            value={personalInfo.about}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
          >
            Cancel changes
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
