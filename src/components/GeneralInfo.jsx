import React, { useState } from "react";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cvData, setCvData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = () => {
    const cvInfo = {
      name,
      email,
      phone,
    };

    setCvData(cvInfo);
    setIsEditing(false); // Exit edit mode after submitting
  };

  const handleEdit = () => {
    setIsEditing(true); // Enter edit mode
  };

  return (
    <div id="general-info">
      <div id="input">
        <h2>General Information</h2>
        {isEditing ? (
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {/* <button onClick={handleSubmit}>Submit</button> */}
          </div>
        ) : (
          <div>
            <p>Name: {cvData ? cvData.name : ""}</p>
            <p>Email: {cvData ? cvData.email : ""}</p>
            <p>Phone: {cvData ? cvData.phone : ""}</p>
          </div>
        )}
        <button onClick={isEditing ? handleSubmit : handleEdit}>
          {isEditing ? "Submit" : "Edit"}
        </button>
      </div>

      <div id="preview">
        <h1>CV Preview</h1>
        <h2>General Information</h2>
        {cvData ? (
          <div>
            <p>Name: {cvData.name}</p>
            <p>Email: {cvData.email}</p>
            <p>Phone: {cvData.phone}</p>
          </div>
        ) : (
          <p>Please submit to see your CV preview.</p>
        )}
      </div>
    </div>
  );
}

export default GeneralInfo;
