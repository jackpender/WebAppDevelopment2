import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = (props) => {
  // const course = "BSc in the Internet of Things.";
  // const modules = [
  //   {
  //     name: "DevOps",
  //     noLectures: 2,
  //     noPracticals: 2
  //   },
  //   {
  //     name: "Web App Development 2",
  //     noLectures: 3,
  //     noPracticals: 2
  //   },
  //   {
  //     name: "NoSQL Databases",
  //     noLectures: 3,
  //     noPracticals: 2
  //   },
  //   {
  //     name: "Embedded Systems Scripting",
  //     noLectures: 3,
  //     noPracticals: 2
  //   },
  //   {
  //     name: "Project Semester 5",
  //     noLectures: 3,
  //     noPracticals: 2
  //   },
  //   {
  //     name: "Measurement Systems",
  //     noLectures: 3,
  //     noPracticals: 2
  //   },
  // ]

  return (
  <>
  <h2>{props.course}</h2>
  <table className="table table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>No lectures</th>
      <th>No practicals</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td>{props.modules[0].name}</td>
      <td>{props.modules[0].noLectures}</td>
      <td>{props.modules[0].noPracticals}</td>
    </tr>
    <tr>
      <td>{props.modules[1].name}</td>
      <td>{props.modules[1].noLectures}</td>
      <td>{props.modules[1].noPracticals}</td>
    </tr>
  
  </tbody >
</table>
</>
  );
};

export default Demo
