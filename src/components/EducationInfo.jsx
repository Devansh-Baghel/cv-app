import React, { useState } from "react";

function Education() {
  const [title, setTitle] = useState("Bachelors in Economics");
  const [schoolName, setSchoolName] = useState("London City University");
  const [startDate, setStartDate] = useState("08/2020");
  const [endDate, setEndDate] = useState("09/2023");
  const [location, setLocation] = useState("New York City, US");
  const [cvData, setCvData] = useState({title, schoolName, startDate, endDate, location});
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {
    const cvInfo = {
      title,
      schoolName,
      startDate,
      endDate,
      location,
    };

    setCvData(cvInfo);
    setIsEditing(false); // Exit edit mode after submitting
  };

  const handleEdit = () => {
    setIsEditing(true); // Enter edit mode
  };

  return (
    <div className="education-info">
      <div className="input">
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
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <p>Title: {cvData ? cvData.title : ""}</p>
            <p>School Name: {cvData ? cvData.schoolName : ""}</p>
            <p>Start Date: {cvData ? cvData.startDate : ""}</p>
            <p>End Date: {cvData ? cvData.endDate : ""}</p>
            <p>Location: {cvData ? cvData.location : ""}</p>
          </div>
        )}
        <button onClick={isEditing ? handleSubmit : handleEdit}>
          {isEditing ? "Submit" : "Edit"}
        </button>
      </div>

      <div className="preview education-preview">
        <h2>Education</h2>
        {cvData ? (
          <div>
            <p>{cvData.startDate} - {cvData.endDate}</p>
            <h3>{cvData.schoolName}</h3>
            <p>{cvData.location}</p>
            <p>{cvData.title}</p>
          </div>
        ) : (
          <p>Please submit to see your CV preview.</p>
        )}
      </div>
    </div>
  );
}

export default Education;
