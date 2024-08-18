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
import {
  getCourseSkill,
  createCourseSkill,
  updateCourseSkill,
  delCourseSkill,
} from "./../../../fetching/createSnap/skills"; // Import the skill functions
import { getOneCourseFetch } from "../../../fetching/createSnap/courses";

const CourseInfoLayout = () => {
  const { courseId } = useParams();
  const [courseOverview, setCourseOverview] = useState(
    "This course provides a comprehensive introduction to React development."
  );
  const [tittle, setTittle] = useState("");
  const [skills, setSkills] = useState([]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [editingMode, setEditingMode] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prerequisitesResponse = await getCoursePrequisite(courseId);
        setPrerequisites(prerequisitesResponse.data.results);
        console.log(prerequisitesResponse.data);

        const skillsResponse = await getCourseSkill(courseId);
        setSkills(skillsResponse.data.results);

        // Get Cousse Name
        const response = await getOneCourseFetch(courseId);
        setTittle(response.data.course.title);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [courseId]);

  const handleOpenModal = (mode) => {
    setEditingMode(mode);
  };

  const handleCloseModal = () => {
    setEditingMode(null);
  };

  const handleSavePrerequisites = async (newPrerequisite) => {
    try {
      const res = await createCoursePrequisite(courseId, {
        name: newPrerequisite.name,
      });
      setPrerequisites((prev) => [
        ...prev,
        { ...newPrerequisite, id: res.data.id },
      ]);
      handleCloseModal();
      return res.data;
    } catch (error) {
      console.error("Failed to save prerequisites", error);
      throw error;
    }
  };

  const handleDeletePrerequisite = async (prerequisiteId) => {
    try {
      await delCoursePrequisite(courseId, prerequisiteId);
      setPrerequisites(prerequisites.filter((p) => p.id !== prerequisiteId));
    } catch (error) {
      console.error("Failed to delete prerequisite", error);
    }
  };

  const handleSaveSkills = async (updatedSkills) => {
    try {
      const res = await createCourseSkill(courseId, {
        name: updatedSkills.name,
      });
      setSkills((prev) => [...prev, { ...updatedSkills, id: res.data.id }]);
      handleCloseModal();
      return res.data;
    } catch (error) {
      console.error("Failed to save skills", error);
    }
  };

  const handleDeleteSkill = async (skillId) => {
    try {
      await delCourseSkill(courseId, skillId);
      setSkills(skills.filter((s) => s.id !== skillId));
    } catch (error) {
      console.error("Failed to delete skill", error);
    }
  };

  return (
    <div className="final">
      <div>{tittle}</div>
      <CourseOverview
        overview={courseOverview}
        onEdit={() => handleOpenModal("overview")}
      />
      <SkillsList
        skills={skills}
        onEdit={() => handleOpenModal("skills")}
        onDelete={handleDeleteSkill}
      />
      <PrerequisitesList
        prerequisites={prerequisites}
        onEdit={() => handleOpenModal("prerequisites")}
        onDelete={handleDeletePrerequisite}
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
        onSave={handleSaveSkills}
        onCancel={handleCloseModal}
        courseId={courseId}
        onDelete={handleDeleteSkill}
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
