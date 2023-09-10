import React, { useState } from "react";
import Preview from "./Preview";

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

  <Preview generalData={cvData} />;
  return (
    <div>
      <div>
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
    </div>
  );
}

export default GeneralInfo;