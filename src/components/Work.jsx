import React from 'react'
import { useState } from 'react';

function Work() {
  const [title, setTitle] = useState("UX Research Assistant");
  const [companyName, setCompanyName] = useState("Black Mesa Labs");
  const [startDate, setStartDate] = useState("04/2018");
  const [endDate, setEndDate] = useState("02/2019");
  const [about, setAbout] = useState("Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.");
  const [location, setLocation] = useState("Berlin, Germany");
  const [cvData, setCvData] = useState({title, companyName, startDate, endDate, about, location});
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {
    const cvInfo = {
      title,
      companyName,
      startDate,
      endDate,
      about,
      location,
    };

    setCvData(cvInfo);
    setIsEditing(false); // Exit edit mode after submitting
  };

  const handleEdit = () => {
    setIsEditing(true); // Enter edit mode
  };

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
            <p>Company Name: {cvData ? cvData.companyName : ""}</p>
            <p>About The Job: {cvData ? cvData.about : ""}</p>
            <p>Start Date: {cvData ? cvData.startDate : ""}</p>
            <p>End Date: {cvData ? cvData.endDate : ""}</p>
            <p>Location: {cvData ? cvData.location : ""}</p>
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
            <p>{cvData.startDate} - {cvData.endDate}</p>
            <h3>{cvData.companyName}</h3>
            <p>{cvData.location}</p>
            <p>{cvData.title}</p>
            <p>{cvData.about}</p>
          </div>
        ) : (
          <p>Please submit to see your CV preview.</p>
        )}
      </div>
    </div>
  );
}

export default Work
