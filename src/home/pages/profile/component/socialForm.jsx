import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const SocialAccountForm = ({
  socialData,
  onAddSocial,
  onEditSocial,
  onDeleteSocial,
}) => {
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [currentSocialId, setCurrentSocialId] = useState(null);

  const resetForm = () => {
    setTitle("");
    setLink("");
    setCurrentSocialId(null);
  };

  const socialOptions = [
    { value: "instagram", label: "Instagram" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "twitter", label: "Twitter" },
    { value: "github", label: "GitHub" },
    { value: "other", label: "Other" },
  ];

  const handleAddSocial = async () => {
    const socialData = { title, link };

    onAddSocial(socialData)
      .then(() => {
        resetForm();
        toast({ title: "Social Account Added" });
      })
      .catch((error) => console.error(error));
  };

  const handleEditSocial = async () => {
    const socialData = { title, link };

    onEditSocial(socialData, currentSocialId)
      .then(() => {
        resetForm();
        toast({ title: "Social Account Updated" });
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (social) => {
    setTitle(social.title);
    setLink(social.link);
    setCurrentSocialId(social.id);
  };

  const handleDelete = async (id) => {
    onDeleteSocial(id)
      .then(() => {
        toast({ title: "Social Account Deleted" });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="final mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Social Links</h2>

      <div className="mt-6 text-right">
        <Popover>
          <PopoverTrigger>
            <div className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
              Add New Social Account
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-full border-2 border-black">
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Title:
                  </label>
                  <select
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  >
                    <option value="" disabled>
                      Select Account
                    </option>
                    {socialOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Link:
                  </label>
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div
                onClick={currentSocialId ? handleEditSocial : handleAddSocial}
                className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4"
              >
                {currentSocialId
                  ? "Edit Social Account"
                  : "Create New Social Account"}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-8">
        {socialData.map((social, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex justify-between">
              <span>{social.title}</span>
            </div>
            <div className="flex justify-between">
              <span>{social.link}</span>
            </div>
            <div className="flex justify-end gap-5 mt-2">
              <div
                className="bg-red-500 p-2 rounded-md text-white cursor-pointer"
                onClick={() => handleDelete(social.id)}
              >
                Delete
              </div>
              <Popover>
                <PopoverTrigger>
                  <div
                    className="bg-green-500 p-2 rounded-md text-white cursor-pointer"
                    onClick={() => handleEdit(social)}
                  >
                    Edit
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-full border-2 border-black">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Title:
                        </label>
                        <select
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        >
                          <option value="" disabled>
                            Select Account
                          </option>
                          {socialOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Link:
                        </label>
                        <input
                          type="text"
                          value={link}
                          onChange={(e) => setLink(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                    </div>
                    <div
                      onClick={handleEditSocial}
                      className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4"
                    >
                      Edit Social Account
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialAccountForm;
