import React, { useState } from "react";
import Preview from "./Preview";

function Education() {
  const [title, setTitle] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cvData, setCvData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = () => {
    const cvInfo = {
      title,
      schoolName,
      startDate,
      endDate,
    };

    setCvData(cvInfo);
    setIsEditing(false); // Exit edit mode after submitting
  };

  const handleEdit = () => {
    setIsEditing(true); // Enter edit mode
  };

  return (
    <div>
      <div>
        <h2>Education</h2>
        {isEditing ? (
          <div>
            <input
              type="text"
              placeholder="Title of Study"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name of Acedemic Institution"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            {/* <button onClick={handleSubmit}>Submit</button> */}
          </div>
        ) : (
          <div>
            <p>Title: {cvData ? cvData.title : ""}</p>
            <p>School Name: {cvData ? cvData.schoolName : ""}</p>
            <p>Start Date: {cvData ? cvData.startDate : ""}</p>
            <p>End Date: {cvData ? cvData.endDate : ""}</p>
          </div>
        )}
        <button onClick={isEditing ? handleSubmit : handleEdit}>
          {isEditing ? "Submit" : "Edit"}
        </button>
      </div>
      <Preview educationData={cvData} />
    </div>
  );
}

export default Education;