import React, { useContext } from 'react'
import store from './StoreComp';
import { Link, useNavigate } from 'react-router-dom';
function Students() {
  const ContextData = useContext(store);
  const Navi = useNavigate();
  // console.log(ContextData);
  return (
   <>
    <h1>Students Details </h1>
    <button onClick={() => {Navi('/newstudent')}} >Add New Student</button>
    <table border='1' align='center' width='70%'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Couse</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {ContextData.entries.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td> <Link to='/editstudent' state={{data: index}} >Edit</Link> </td>
            </tr>
          )
        })}
      </tbody>
    </table>
   </>
  )
}
export default Students;
