import React from "react";

function Preview(props) {
  return (
    <div>
      <h1>CV Preview</h1>
      <h2>General Information</h2>
      {props.generalData ? (
        <div>
          <p>Name: {props.generalData.name}</p>
          <p>Email: {props.generalData.email}</p>
          <p>Phone: {props.generalData.phone}</p>
        </div>
      ) : (
        <p>Please submit to see your CV preview.</p>
      )}
      <h2>Education</h2>
      {props.educationData ? (
        <div>
          <p>Title: {props.educationData.title}</p>
          <p>School Name: {props.educationData.schoolName}</p>
          <p>Start Date: {props.educationData.startDate}</p>
          <p>End Date: {props.educationData.endDate}</p>
        </div>
      ) : (
        <p>Please submit to see your CV preview.</p>
      )}
    </div>
  );
}

export default Preview;
