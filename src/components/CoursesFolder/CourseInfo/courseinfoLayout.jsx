import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseOverview from "./courseOverview";
import SkillsList from "./skillsList";
import PrerequisitesList from "./prerequisitesList";
import CourseOverviewModal from "./courseOverviewEdit";
import SkillsModal from "./skillsEdit";
import PrerequisitesModal from "./prequitEdit";
import {
  getCoursePrequisite,
  createCoursePrequisite,
  delCoursePrequisite,
} from "./../../../fetching/createSnap/prequisite";

const CourseInfoLayout = () => {
  const { courseId } = useParams();
  const [courseOverview, setCourseOverview] = useState(
    "This course provides a comprehensive introduction to React development."
  );
  const [skills, setSkills] = useState([
    "React Basics",
    "State Management",
    "Routing",
    "Component Lifecycle",
  ]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [editingMode, setEditingMode] = useState(null);

  // Fetch prerequisites when the component mounts
  useEffect(() => {
    const fetchPrerequisites = async () => {
      try {
        const response = await getCoursePrequisite(courseId);
        setPrerequisites(response.data.results);
      } catch (error) {
        console.error("Failed to fetch prerequisites", error);
      }
    };

    fetchPrerequisites();
  }, [courseId]);

  const handleOpenModal = (mode) => {
    setEditingMode(mode);
  };

  const handleCloseModal = () => {
    setEditingMode(null);
  };

  const handleSavePrerequisites = async (newPrerequisite) => {
    try {
      // Send the new prerequisite to the server
      const res = await createCoursePrequisite(courseId, {
        name: newPrerequisite.name,
      });
      console.log(res, "Response from API");

      // Update the local state with the new prerequisite
      setPrerequisites((prev) => [...prev, newPrerequisite]);

      // Handle modal close logic if needed
      handleCloseModal();

      // Return the response or relevant data
      return res.data;
    } catch (error) {
      console.error("Failed to save prerequisites", error);

      // Optionally return an error or handle it
      throw error;
    }
  };

  const handleDeletePrerequisite = async (prerequisiteId) => {
    try {
      console.log(courseId, prerequisiteId);
      await delCoursePrequisite(courseId, prerequisiteId);
      setPrerequisites(prerequisites.filter((p) => p.id !== prerequisiteId));
    } catch (error) {
      console.error("Failed to delete prerequisite", error);
    }
  };

  return (
    <div>
      <CourseOverview
        overview={courseOverview}
        onEdit={() => handleOpenModal("overview")}
      />
      <SkillsList skills={skills} onEdit={() => handleOpenModal("skills")} />
      <PrerequisitesList
        prerequisites={prerequisites}
        onEdit={() => handleOpenModal("prerequisites")}
      />

      <CourseOverviewModal
        isOpen={editingMode === "overview"}
        overview={courseOverview}
        onSave={(value) => setCourseOverview(value)}
        onCancel={handleCloseModal}
      />

      <SkillsModal
        isOpen={editingMode === "skills"}
        skills={skills}
        onSave={(updatedSkills) => setSkills(updatedSkills)}
        onCancel={handleCloseModal}
      />

      <PrerequisitesModal
        isOpen={editingMode === "prerequisites"}
        prerequisites={prerequisites}
        onSave={handleSavePrerequisites}
        onCancel={handleCloseModal}
        onDelete={handleDeletePrerequisite}
        courseId={courseId}
      />
    </div>
  );
};

export default CourseInfoLayout;
