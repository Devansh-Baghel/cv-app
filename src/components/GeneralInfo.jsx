import React, { useState } from "react";

function GeneralInfo() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [phone, setPhone] = useState("+44 3245 5521 5521");
  const [address, setAddress] = useState("London, UK");
  const [cvData, setCvData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = () => {
    const cvInfo = {
      name,
      email,
      phone,
      address,
    };

    setCvData(cvInfo);
    setIsEditing(false); // Exit edit mode after submitting
  };

  const handleEdit = () => {
    setIsEditing(true); // Enter edit mode
  };

  return (
    <div className="general-info">
      <div className="input">
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
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <p>Name: {cvData ? cvData.name : ""}</p>
            <p>Email: {cvData ? cvData.email : ""}</p>
            <p>Phone: {cvData ? cvData.phone : ""}</p>
            <p>Address: {cvData ? cvData.address : ""}</p>
          </div>
        )}
        <button onClick={isEditing ? handleSubmit : handleEdit}>
          {isEditing ? "Submit" : "Edit"}
        </button>
      </div>

      <div className="preview general-preview">
        {cvData ? (
          <div>
            <h1>{cvData.name}</h1>
            <div>
              <p>{cvData.email}</p>
              <p>{cvData.phone}</p>
              <p>{cvData.address}</p>
            </div>
          </div>
        ) : (
          <p>Please submit to see your CV preview.</p>
        )}
      </div>
    </div>
  );
}

export default GeneralInfo;
