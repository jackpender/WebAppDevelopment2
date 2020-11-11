import React from "react";

const Demo = props => {
  const course = "BSc in the Internet of Things.";
  const modules = [
    {
      name: "DevOps",
      noLectures: 2,
      noPracticals: 2
    },
    {
      name: "Web App Development 2",
      noLectures: 3,
      noPracticals: 2
    },
    {
      name: "NoSQL Databases",
      noLectures: 3,
      noPracticals: 2
    },
    {
      name: "Embedded Systems Scripting",
      noLectures: 3,
      noPracticals: 2
    },
    {
      name: "Project Semester 5",
      noLectures: 3,
      noPracticals: 2
    },
    {
      name: "Measurement Systems",
      noLectures: 3,
      noPracticals: 2
    },
  ]

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
      <td>{props.modules[0]}</td>
      <td>{props.modules}</td>
      <td>{props.modules}</td>
    </tr>
    {/* <tr>
      <td>{modules[1].name}</td>
      <td>{modules[1].noLectures}</td>
      <td>{modules[1].noPracticals}</td>
    </tr>
    <tr>
      <td>{modules[2].name}</td>
      <td>{modules[2].noLectures}</td>
      <td>{modules[2].noPracticals}</td>
    </tr>
    <tr>
      <td>{modules[3].name}</td>
      <td>{modules[3].noLectures}</td>
      <td>{modules[3].noPracticals}</td>
    </tr>
    <tr>
      <td>{modules[4].name}</td>
      <td>{modules[4].noLectures}</td>
      <td>{modules[4].noPracticals}</td>
    </tr>
    <tr>
      <td>{modules[5].name}</td>
      <td>{modules[5].noLectures}</td>
      <td>{modules[5].noPracticals}</td>
    </tr> */}
  </tbody >
</table>
</>
  );
};

// const Demo = (props) => {
//     return (
//       <div >
//         <h2>{`${props.heading} Languages`}</h2>
//         <ul> 
//           <li>{props.languages[0]}</li>
//           <li>{props.languages[1]} </li>
//           <li>{props.languages[2]} </li>
//         </ul>
//       </div>
//     );
  
// }

export default Demo
