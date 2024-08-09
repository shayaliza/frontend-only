// import React, { useState } from "react";
// import {
//   addWorkProofFetch,
//   deleteWorkProofFetch,
//   updateWorkProofFetch,
// } from "../../../../fetching/profileFetch";
// import { useToast } from "@/components/ui/use-toast";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";

// const WorkProofForm = ({ expData }) => {
//   const { toast } = useToast();

//   const [work, setWork] = useState(expData || []);
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState("");
//   const [link, setLink] = useState("");
//   const [currentExperienceId, setCurrentExperienceId] = useState(null);

//   const resetForm = () => {
//     setTitle("");
//     setLink("");
//   };

//   const handleAddExperience = async () => {
//     const workData = {
//       title,
//       link,
//     };

//     await addWorkProofFetch(workData).then((res) => {
//       console.log(res);
//       if (res.status === 201) {
//         console.log(res);
//         const newData = res.data;
//         setWork([...work, newData]);
//         resetForm();
//         toast({ title: "Skill Added" });
//       }
//     });
//   };

//   const handleEditExperience = async (id) => {
//     const workData = {
//       title,
//       link,
//     };
//     console.log(id);

//     await updateWorkProofFetch(workData, id).then((res) => {
//       console.log(res);
//       if (res.status === 200) {
//         const newData = res.data;

//         const updateSkill = work.map((exp) =>
//           exp.id === currentExperienceId ? { ...exp, ...newData } : exp
//         );
//         setWork(updateSkill);
//         toast({ title: "Work Proof Updated" });
//       }
//     });

//     resetForm();
//     setIsEditing(false);
//     setCurrentExperienceId(null);
//   };

//   const handleEdit = (exp) => {
//     setTitle(exp.title);
//     setLink(exp.link);
//     setIsEditing(true);
//     setCurrentExperienceId(exp.id);
//   };

//   const handleDelete = async (id) => {
//     await deleteWorkProofFetch(id).then((res) => {
//       if (res.status === 204) {
//         toast({ title: "Experience Deleted" });
//       }
//     });

//     console.log(id);
//     setWork(work.filter((exp) => exp.id !== id));
//   };

//   return (
//     <div className="final mx-auto bg-white shadow-lg rounded-lg p-6">
//       <h2 className="text-xl font-semibold mb-4">Proof of Work</h2>

//       <div className="mt-6 text-right ">
//         <Popover>
//           <PopoverTrigger>
//             <div className=" bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
//               Add Work Proof
//             </div>
//           </PopoverTrigger>
//           <PopoverContent className={"w-full  border-2 border-black"}>
//             <div className="p-4 ">
//               <div className="grid grid-cols-2  gap-4">
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-700 mb-1">
//                     Tittle:
//                   </label>
//                   <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     className="border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="font-medium text-gray-700 mb-1">
//                     Link:
//                   </label>
//                   <input
//                     type="text"
//                     value={link}
//                     onChange={(e) => setLink(e.target.value)}
//                     className="border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
//               </div>
//               <div
//                 onClick={handleAddExperience}
//                 className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4"
//               >
//                 Create New Skill
//               </div>
//             </div>
//           </PopoverContent>
//         </Popover>
//       </div>

//       <div className="mt-8">
//         {work.map((exp, index) => (
//           <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
//             <div className="flex justify-between">
//               <span>{exp.title}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>{exp.link}</span>
//             </div>
//             <div className="flex justify-between">
//               {/* <span>{exp.end_date}</span> */}
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
//                           Tittle:
//                         </label>
//                         <input
//                           type="text"
//                           value={title}
//                           onChange={(e) => setTitle(e.target.value)}
//                           className="border border-gray-300 rounded-lg p-2"
//                         />
//                       </div>
//                       <div className="flex flex-col">
//                         <label className="font-medium text-gray-700 mb-1">
//                           Link
//                         </label>
//                         <input
//                           type="text"
//                           value={link}
//                           onChange={(e) => setLink(e.target.value)}
//                           className="border border-gray-300 rounded-lg p-2"
//                         />
//                       </div>
//                     </div>
//                     <div
//                       onClick={() => handleEditExperience(exp.id)}
//                       className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4"
//                     >
//                       Edit Proof of Work
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

// export default WorkProofForm;

import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const WorkProofForm = ({
  workData,
  onAddWorkProof,
  onEditWorkProof,
  onDeleteWorkProof,
}) => {
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentWorkProofId, setCurrentWorkProofId] = useState(null);

  const resetForm = () => {
    setTitle("");
    setLink("");
  };

  const handleAddWorkProof = () => {
    const workData = { title, link };
    onAddWorkProof(workData);
    resetForm();
    toast({ title: "Work Proof Added" });
  };

  const handleEditWorkProof = () => {
    const workData = { title, link };
    onEditWorkProof(currentWorkProofId, workData);
    resetForm();
    setIsEditing(false);
    setCurrentWorkProofId(null);
    toast({ title: "Work Proof Updated" });
  };

  const handleEdit = (work) => {
    setTitle(work.title);
    setLink(work.link);
    setIsEditing(true);
    setCurrentWorkProofId(work.id);
  };

  const handleDelete = (id) => {
    onDeleteWorkProof(id);
    toast({ title: "Work Proof Deleted" });
  };

  return (
    <div className="final mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Proof of Work</h2>

      <div className="mt-6 text-right">
        <Popover>
          <PopoverTrigger>
            <div className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
              Add Work Proof
            </div>
          </PopoverTrigger>
          <PopoverContent className={"w-full border-2 border-black"}>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Title:
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
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
                onClick={isEditing ? handleEditWorkProof : handleAddWorkProof}
                className={`bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4 cursor-pointer ${
                  !title || !link ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isEditing ? "Update Work Proof" : "Create New Work Proof"}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-8">
        {workData.map((work, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex justify-between">
              <span>{work.title}</span>
            </div>
            <div className="flex justify-between">
              <span>{work.link}</span>
            </div>
            <div className="flex justify-end gap-5 mt-2">
              <div
                className="bg-red-500 p-2 rounded-md text-white cursor-pointer"
                onClick={() => handleDelete(work.id)}
              >
                Delete
              </div>
              <Popover>
                <PopoverTrigger>
                  <div
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleEdit(work)}
                  >
                    <div className="bg-green-500 p-2 rounded-md text-white">
                      Edit
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className={"w-full border-2 border-black"}>
                  <div className="p-4 w-full">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Title:
                        </label>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
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
                      onClick={handleEditWorkProof}
                      className={`bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4 cursor-pointer ${
                        !title || !link ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      Update Work Proof
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

export default WorkProofForm;
