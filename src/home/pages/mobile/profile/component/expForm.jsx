// import React, { useState } from "react";
// import {
//   addExperianceFetch,
//   deleteExperianceFetch,
//   updateExperianceFetch,
// } from "../../../../fetching/profileFetch";
// import { useToast } from "@/components/ui/use-toast";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";

// const workTypeOptions = [
//   { value: "Internship", label: "Internship" },
//   { value: "Full Time", label: "Full Time" },
//   { value: "Part Time", label: "Part Time" },
//   { value: "Contract", label: "Contract" },
// ];

// const ExperienceForm = ({ expData }) => {
//   const { toast } = useToast();

//   const [experiences, setExperiences] = useState(expData || []);
//   const [start_date, setStartDate] = useState("");
//   const [end_date, setEndDate] = useState("");
//   const [company_name, setCompanyName] = useState("");
//   const [role, setRole] = useState("");
//   const [location, setLocation] = useState("");
//   const [work_type, setWorkType] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentExperienceId, setCurrentExperienceId] = useState(null);

//   const resetForm = () => {
//     setStartDate("");
//     setEndDate("");
//     setCompanyName("");
//     setRole("");
//     setLocation("");
//     setWorkType("");
//   };

//   const handleAddExperience = async () => {
//     const experienceData = {
//       start_date,
//       end_date,
//       company_name,
//       role,
//       location,
//       work_type,
//     };

//     await addExperianceFetch(experienceData).then((res) => {
//       if (res.status === 201) {
//         console.log(res);
//         const newData = res.data;

//         resetForm();
//         toast({ title: "Experience Added" });
//         setExperiences([...experiences, newData]);
//       }
//     });
//   };

//   const handleEditExperience = async (id) => {
//     const experienceData = {
//       start_date,
//       end_date,
//       company_name,
//       role,
//       location,
//       work_type,
//     };
//     console.log(id);

//     await updateExperianceFetch(experienceData, id).then((res) => {
//       console.log(res);
//       if (res.status === 200) {
//         const newData = res.data;

//         const updatedExperiences = experiences.map((exp) =>
//           exp.id === currentExperienceId ? { ...exp, ...newData } : exp
//         );
//         setExperiences(updatedExperiences);
//         toast({ title: "Experience Updated" });
//       }
//     });

//     resetForm();
//     setIsEditing(false);
//     setCurrentExperienceId(null);
//   };

//   const handleEdit = (exp) => {
//     setStartDate(exp.start_date);
//     setEndDate(exp.end_date);
//     setCompanyName(exp.company_name);
//     setRole(exp.role);
//     setLocation(exp.location);
//     setWorkType(exp.work_type);
//     setIsEditing(true);
//     setCurrentExperienceId(exp.id);
//   };

//   const handleDelete = async (id) => {
//     await deleteExperianceFetch(id).then(() => {
//       if (res.status === 204) {
//         toast({ title: "Experience Deleted" });
//       }
//     });

//     console.log(id);
//     setExperiences(experiences.filter((exp) => exp.id !== id));
//   };

//   return (
//     <div className="final mx-auto bg-white shadow-lg rounded-lg p-6">
//       <h2 className="text-xl font-semibold mb-4">Experience</h2>

//       <div className="mt-6 text-right ">
//         <Popover>
//           <PopoverTrigger>
//             <div className=" bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
//               Add Experience
//             </div>
//           </PopoverTrigger>
//           <PopoverContent className={"w-full  border-2 border-black"}>
//             <div className="p-4 ">
//               {/* Add Experience Form */}
//               <div className="grid grid-cols-2  gap-4">
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-700 mb-1">
//                     Company Name:
//                   </label>
//                   <input
//                     type="text"
//                     value={company_name}
//                     onChange={(e) => setCompanyName(e.target.value)}
//                     className="border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-700 mb-1">
//                     Role:
//                   </label>
//                   <input
//                     type="text"
//                     value={role}
//                     onChange={(e) => setRole(e.target.value)}
//                     className="border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-700 mb-1">
//                     Location:
//                   </label>
//                   <input
//                     type="text"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-700 mb-1">
//                     Work Type:
//                   </label>
//                   <select
//                     value={work_type}
//                     onChange={(e) => setWorkType(e.target.value)}
//                     className="border border-gray-300 rounded-lg p-2"
//                   >
//                     <option value="" disabled>
//                       Select Work Type
//                     </option>
//                     {workTypeOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-700 mb-1">
//                     Start Date:
//                   </label>
//                   <input
//                     type="date"
//                     value={start_date}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     className="border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-700 mb-1">
//                     End Date:
//                   </label>
//                   <input
//                     type="date"
//                     value={end_date}
//                     onChange={(e) => setEndDate(e.target.value)}
//                     className="border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
//               </div>
//               <div
//                 onClick={handleAddExperience}
//                 className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4"
//               >
//                 Create New Experience
//               </div>
//             </div>
//           </PopoverContent>
//         </Popover>
//       </div>

//       <div className="mt-8">
//         {experiences.map((exp, index) => (
//           <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
//             <div className="flex justify-between">
//               <span>{exp.company_name}</span>
//               <span>{exp.role}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>{exp.location}</span>
//               <span>{exp.work_type}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>{exp.start_date}</span>
//               <span>{exp.end_date}</span>
//             </div>
//             <div className="flex justify-end gap-5  mt-2">
//               <div
//                 className="bg-red-500 p-2 rounded-md text-white cursor-pointer"
//                 onClick={() => handleDelete(exp.id)}
//               >
//                 delete
//               </div>
//               <Popover>
//                 <PopoverTrigger>
//                   <div
//                     className="text-blue-500 mr-4"
//                     onClick={() => handleEdit(exp)}
//                   >
//                     <div className="bg-green-500 p-2 rounded-md text-white">
//                       Edit
//                     </div>
//                   </div>
//                 </PopoverTrigger>
//                 <PopoverContent className={"w-full  border-2 border-black"}>
//                   <div className="p-4 w-full">
//                     {/* Edit Experience Form */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="flex flex-col">
//                         <label className="font-medium text-gray-700 mb-1">
//                           Company Name:
//                         </label>
//                         <input
//                           type="text"
//                           value={company_name}
//                           onChange={(e) => setCompanyName(e.target.value)}
//                           className="border border-gray-300 rounded-lg p-2"
//                         />
//                       </div>
//                       <div className="flex flex-col">
//                         <label className="font-medium text-gray-700 mb-1">
//                           Role:
//                         </label>
//                         <input
//                           type="text"
//                           value={role}
//                           onChange={(e) => setRole(e.target.value)}
//                           className="border border-gray-300 rounded-lg p-2"
//                         />
//                       </div>
//                       <div className="flex flex-col">
//                         <label className="font-medium text-gray-700 mb-1">
//                           Location:
//                         </label>
//                         <input
//                           type="text"
//                           value={location}
//                           onChange={(e) => setLocation(e.target.value)}
//                           className="border border-gray-300 rounded-lg p-2"
//                         />
//                       </div>
//                       <div className="flex flex-col">
//                         <label className="font-medium text-gray-700 mb-1">
//                           Work Type:
//                         </label>
//                         <select
//                           value={work_type}
//                           onChange={(e) => setWorkType(e.target.value)}
//                           className="border border-gray-300 rounded-lg p-2"
//                         >
//                           <option value="" disabled>
//                             Select Work Type
//                           </option>
//                           {workTypeOptions.map((option) => (
//                             <option key={option.value} value={option.value}>
//                               {option.label}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="flex flex-col">
//                         <label className="font-medium text-gray-700 mb-1">
//                           Start Date:
//                         </label>
//                         <input
//                           type="date"
//                           value={start_date}
//                           onChange={(e) => setStartDate(e.target.value)}
//                           className="border border-gray-300 rounded-lg p-2"
//                         />
//                       </div>
//                       <div className="flex flex-col">
//                         <label className="font-medium text-gray-700 mb-1">
//                           End Date:
//                         </label>
//                         <input
//                           type="date"
//                           value={end_date}
//                           onChange={(e) => setEndDate(e.target.value)}
//                           className="border border-gray-300 rounded-lg p-2"
//                         />
//                       </div>
//                     </div>
//                     <div
//                       onClick={() => handleEditExperience(exp.id)}
//                       className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4"
//                     >
//                       Edit Experience
//                     </div>
//                   </div>
//                 </PopoverContent>
//               </Popover>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExperienceForm;

import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const workTypeOptions = [
  { value: "Internship", label: "Internship" },
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
  { value: "Contract", label: "Contract" },
];

const ExperienceForm = ({
  expData,
  onAddExperience,
  onEditExperience,
  onDeleteExperience,
}) => {
  const { toast } = useToast();

  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [work_type, setWorkType] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentExperienceId, setCurrentExperienceId] = useState(null);

  const resetForm = () => {
    setStartDate("");
    setEndDate("");
    setCompanyName("");
    setRole("");
    setLocation("");
    setWorkType("");
  };

  const handleAddExperience = () => {
    const experienceData = {
      start_date,
      end_date,
      company_name,
      role,
      location,
      work_type,
    };

    onAddExperience(experienceData);
    toast({ title: "Experience Added" });
    resetForm();
  };

  const handleEditExperience = () => {
    const experienceData = {
      start_date,
      end_date,
      company_name,
      role,
      location,
      work_type,
    };

    onEditExperience(currentExperienceId, experienceData);

    resetForm();
    setIsEditing(false);
    setCurrentExperienceId(null);
    toast({ title: "Experience Edited" });
  };

  const handleEdit = (exp) => {
    setStartDate(exp.start_date);
    setEndDate(exp.end_date);
    setCompanyName(exp.company_name);
    setRole(exp.role);
    setLocation(exp.location);
    setWorkType(exp.work_type);
    setIsEditing(true);
    setCurrentExperienceId(exp.id);
  };

  const handleDelete = (id) => {
    onDeleteExperience(id);
    toast({ title: "Experience Deleted" });
  };

  return (
    <div className="final mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>

      <div className="mt-6 text-right">
        <Popover>
          <PopoverTrigger>
            <div className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
              Add Experience
            </div>
          </PopoverTrigger>
          <PopoverContent className={"w-full border-2 border-black"}>
            <div className="p-4">
              {/* Add Experience Form */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Company Name:
                  </label>
                  <input
                    type="text"
                    value={company_name}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Role:
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Location:
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Work Type:
                  </label>
                  <select
                    value={work_type}
                    onChange={(e) => setWorkType(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  >
                    <option value="" disabled>
                      Select Work Type
                    </option>
                    {workTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Start Date:
                  </label>
                  <input
                    type="date"
                    value={start_date}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    End Date:
                  </label>
                  <input
                    type="date"
                    value={end_date}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div
                onClick={isEditing ? handleEditExperience : handleAddExperience}
                className={`bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4 cursor-pointer ${
                  !company_name ||
                  !role ||
                  !location ||
                  !work_type ||
                  !start_date ||
                  !end_date
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isEditing ? "Update Experience" : "Create New Experience"}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-8">
        {expData.map((exp, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex justify-between">
              <span>{exp.company_name}</span>
              <span>{exp.role}</span>
            </div>
            <div className="flex justify-between">
              <span>{exp.location}</span>
              <span>{exp.work_type}</span>
            </div>
            <div className="flex justify-between">
              <span>{exp.start_date}</span>
              <span>{exp.end_date}</span>
            </div>
            <div className="flex justify-end gap-5 mt-2">
              <div
                className="bg-red-500 p-2 rounded-md text-white cursor-pointer"
                onClick={() => handleDelete(exp.id)}
              >
                Delete
              </div>
              <Popover>
                <PopoverTrigger>
                  <div
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleEdit(exp)}
                  >
                    <div className="bg-green-500 p-2 rounded-md text-white">
                      Edit
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className={"w-full border-2 border-black"}>
                  <div className="p-4 w-full">
                    {/* Edit Experience Form */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Company Name:
                        </label>
                        <input
                          type="text"
                          value={company_name}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Role:
                        </label>
                        <input
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Location:
                        </label>
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Work Type:
                        </label>
                        <select
                          value={work_type}
                          onChange={(e) => setWorkType(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        >
                          <option value="" disabled>
                            Select Work Type
                          </option>
                          {workTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Start Date:
                        </label>
                        <input
                          type="date"
                          value={start_date}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          End Date:
                        </label>
                        <input
                          type="date"
                          value={end_date}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                    </div>
                    <div
                      onClick={handleEditExperience}
                      className={`bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4 cursor-pointer ${
                        !company_name ||
                        !role ||
                        !location ||
                        !work_type ||
                        !start_date ||
                        !end_date
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      Update Experience
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

export default ExperienceForm;
