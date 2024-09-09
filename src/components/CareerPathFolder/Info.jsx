import React from 'react';
import "../courses-style.css";
import img from "../../assets/rsc/django.jpeg"

function Info() {
  return (
    <div className="courses-container">
      <div className="courses-heading course-item">
        <p className="main">django developer</p>
      </div>
      <div className="filter-search course-item">
        <div className="filter fs-item">
          <button className="filter-btn" id="add-course-btn">
            <a href="/careerpaths/career_path_edit/2">Edit</a>
          </button>
        </div>
      </div>
      <div className="courses course-item">
        <div className="course-sets">
          <div className="course">
            <div className="course-banner">
              <img style={{ width: '100%', marginBottom:"10px" }} src={img} alt="djnago developer"/>
            </div>
            <button className="filter-btn" id="add-course-btn">
              <a href="/careerpaths/status_career_path/2">Release</a>
            </button>
            <p>Title: django developer</p>
            <p>Has Certificates: True</p>
            <p>Is AI Generated: True</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
