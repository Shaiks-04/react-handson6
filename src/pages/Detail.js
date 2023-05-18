import React from "react";
import { Link } from "react-router-dom";

function Detail({ student }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.course}</td>
      <td>{student.batch}</td>
      <td>
        <Link to={`/student/${student.id}`}>Edit</Link>
      </td>
    </tr>
  );
}

export default Detail;
