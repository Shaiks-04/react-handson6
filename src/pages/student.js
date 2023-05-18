  import React from "react";
  import Nav from './nav';
  import { Link } from "react-router-dom";

  function Student(){
      return (
          <>
              <Nav/>
              <h2>Students Details</h2>
              <Link to={"/studentDesc"} className="newstd">Add new student</Link>
              <br/>
              <table>
                  <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Course</th>
                      <th>Batch</th>
                      <th>Change</th>
                  </tr>
                  <tr>
                      <td>John</td>
                      <td>26</td>
                      <td>MERN</td>
                      <td>October</td>
                      <td><Link>Edit</Link></td>
                  </tr>
                  <tr>
                      <td>Doe</td>
                      <td>25</td>
                      <td>MERN</td>
                      <td>November</td>
                      <td><Link>Edit</Link></td>
                  </tr>
                  <tr>
                      <td>Biden</td>
                      <td>26</td>
                      <td>MERN</td>
                      <td>September</td>
                      <td><Link>Edit</Link></td>
                  </tr>
                  <tr>
                      <td>Barar</td>
                      <td>22</td>
                      <td>MERN</td>
                      <td>September</td>
                      <td><Link>Edit</Link></td>
                  </tr>
                  <tr>
                      <td>Christ</td>
                      <td>23</td>
                      <td>MERN</td>
                      <td>October</td>
                      <td><Link>Edit</Link></td>
                  </tr>
                  <tr>
                      <td>Elent</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>November</td>
                      <td><Link>Edit</Link></td>
                  </tr>
                  <tr>
                      <td>Harshita sharma</td>
                      <td>24</td>
                      <td>MERN</td>
                      <td>October</td>
                      <td><Link>Edit</Link></td>
                  </tr>
                
              </table>
          </>
      );
  }

  export default Student;

