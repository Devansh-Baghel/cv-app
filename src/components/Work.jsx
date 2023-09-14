import React from 'react'
import { useState } from 'react';

function Work() {
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [about, setAbout] = useState("");
  const [cvData, setCvData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = () => {
    const cvInfo = {
      title,
      companyName,
      startDate,
      endDate,
      about,
    };

    setCvData(cvInfo);
    setIsEditing(false); // Exit edit mode after submitting
  };

  const handleEdit = () => {
    setIsEditing(true); // Enter edit mode
  };

  const handleClickAfterSubmit = () => {
    setIsEditing(true);
  }

  return (
    <div className='work-info'>
      <div className="input">
        <h2>Work</h2>
        {isEditing ? (
          <div>
            <input
              type="text"
              placeholder="Title of Job"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              type="text"
              placeholder="About the Job"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
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
          </div>
        ) : (
          <div>
            <p>Title: {cvData ? cvData.title : ""}</p>
            <p>Company Name: {cvData ? cvData.companyName : ""}</p>
            <p>About The Job: {cvData ? cvData.about : ""}</p>
            <p>Start Date: {cvData ? cvData.startDate : ""}</p>
            <p>End Date: {cvData ? cvData.endDate : ""}</p>
          </div>
        )}
        <button onClick={isEditing ? handleSubmit : handleEdit}>
          {isEditing ? "Submit" : "Edit"}
        </button>
      </div>

      <div className='preview work-preview'>
        <h2>Work</h2>
        {cvData ? (
          <div>
            <p>Title: {cvData.title}</p>
            <p>Company Name: {cvData.companyName}</p>
            <p>About The Job: {cvData.about}</p>
            <p>Start Date: {cvData.startDate}</p>
            <p>End Date: {cvData.endDate}</p>
          </div>
        ) : (
          <p>Please submit to see your CV preview.</p>
        )}
      </div>
    </div>
  );
}

export default Work
