// import React, { createContext, useState } from "react";

// export const StudentContext = createContext();

// export const StudentContextProvider = ({ children }) => {
//   const [students, setStudents] = useState([]);

//   const addStudent = (student) => {
//     setStudents((prevStudents) => [...prevStudents, student]);
//   };

//   const contextValue = {
//     students,
//     addStudent,
//   };

//   return (
//     <StudentContext.Provider value={contextValue}>
//       {children}
//     </StudentContext.Provider>
//   );
// };
