import React from "react";

const Demo = () => {
  return (
    // <div>
    //   <h1>Dynamic Languages</h1>
    //   <ul>
    //     <li>Erlang</li>
    //     <li>Clojure</li>
    //     {/* <li>Ruby</li> */}
    //     {/* <li>PHP</li> */}
    //   </ul>
    // </div>
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
      <td>DevOps</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Web App Development 2</td>
      <td>3</td>
      <td>2</td>
    </tr>
    <tr>
      <td>NoSQL Databases</td>
      <td>3</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Embedded Systems Scripting</td>
      <td>3</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Project Semester 5</td>
      <td>3</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Measurement Systems</td>
      <td>3</td>
      <td>2</td>
    </tr>
  </tbody >
</table>
  );
};

export default Demo;
