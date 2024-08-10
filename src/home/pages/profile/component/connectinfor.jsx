import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const ConnectInfoSection = ({ socialData, onAddSocial, onEditSocial }) => {
  const [formData, setFormData] = useState({
    github: { id: null, link: "" },
    linkedin: { id: null, link: "" },
    other: { id: null, link: "" },
  });

  const [isChanged, setIsChanged] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (socialData && Array.isArray(socialData)) {
      const initialData = socialData.reduce(
        (acc, account) => {
          if (account.title.toLowerCase() === "github") {
            acc.github = { id: account.id, link: account.link };
          } else if (account.title.toLowerCase() === "linkedin") {
            acc.linkedin = { id: account.id, link: account.link };
          } else if (account.title.toLowerCase() === "other") {
            acc.other = { id: account.id, link: account.link };
          }
          return acc;
        },
        {
          github: { id: null, link: "" },
          linkedin: { id: null, link: "" },
          other: { id: null, link: "" },
        }
      );

      setFormData(initialData);
    }
  }, [socialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [name]: { ...prevData[name], link: value },
      };
      setIsChanged(
        newData.github.link !==
          socialData.find((acc) => acc.title.toLowerCase() === "github")
            ?.link ||
          newData.linkedin.link !==
            socialData.find((acc) => acc.title.toLowerCase() === "linkedin")
              ?.link ||
          newData.other.link !==
            socialData.find((acc) => acc.title.toLowerCase() === "other")?.link
      );
      return newData;
    });
  };

  const handleSaveChanges = async () => {
    if (isChanged) {
      const updatedSocial = [];

      const handleSocialSave = async (social) => {
        if (social.id) {
          await onEditSocial(social, social.id);
          // toast({ title: "Social Account Updated" });
          // console.log("updated times");
        } else {
          const createdSocial = await onAddSocial(social);
          if (createdSocial) {
            setFormData((prevData) => ({
              ...prevData,
              [social.title.toLowerCase()]: {
                ...prevData[social.title.toLowerCase()],
                id: createdSocial.id,
              },
            }));
            // toast({ title: "Social Account Created" });
          }
        }
      };

      if (formData.github.link) {
        updatedSocial.push({
          id: formData.github.id,
          title: "github",
          link: formData.github.link,
        });
      }

      if (formData.linkedin.link) {
        updatedSocial.push({
          id: formData.linkedin.id,
          title: "linkedin",
          link: formData.linkedin.link,
        });
      }

      if (formData.other.link) {
        updatedSocial.push({
          id: formData.other.id,
          title: "other",
          link: formData.other.link,
        });
      }

      for (let social of updatedSocial) {
        await handleSocialSave(social);
      }
      toast({ title: "Social Account Updated" });

      setIsChanged(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">Connect Information</h3>
      <form>
        <div className="mb-4">
          <label className="block mb-1">GitHub URL</label>
          <input
            type="text"
            name="github"
            value={formData.github?.link || ""}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">LinkedIn URL</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin?.link || ""}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Other URL</label>
          <input
            type="text"
            name="other"
            value={formData.other?.link || ""}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
            onClick={() => setFormData(socialData)}
          >
            Cancel changes
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded ${
              isChanged ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
            }`}
            disabled={!isChanged}
            onClick={handleSaveChanges}
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConnectInfoSection;
