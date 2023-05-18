// import { store } from './Detail'
// import { useState } from 'react'



// const[Name,setName]=useState("")
// const[Age,setAge]=useState("")
// const[Course,setCourse]=useState("")
// const[Batch,setBatch]=useState("")
// const[students,setStudents]=useContext(store)
    //   return (
    //     <>
    //         <h1>This is Edit Students Components</h1>
    //         <input type='text' placeholder={ContextData.entries[index].name} onChange={HandleChange} />
    //         <input type='text' placeholder={ContextData.entries[index].Age} onChange={HandleChange}/> <br />
    //         <input type='text' placeholder={ContextData.entries[index].Course}onChange={HandleChange}/>
    //         <input type='text' placeholder={ContextData.entries[index].Batch}onChange={HandleChange}/> <br />
    //         <button onClick={() => {Navi('/student')}} >Update</button>
    //     </>
    //   )
    // }
    // export default EditStudent;
 

   
// const Update = () => {

// const[Name,setName]=useState("")
// const[Age,setAge]=useState("")
// const[Course,setCourse]=useState("")
// const[Batch,setBatch]=useState("")
// const[students,setStudents]=useContext(store)

// const ChangeHandler1=(e)=>
// {
// setName(e.target.value)
// }
// const ChangeHandler2=(e)=>
// {
// setAge(e.target.value)

// }
// const ChangeHandler3=(e)=>
// {
// setCourse(e.target.value)

// }
// const ChangeHandler4=(e)=>
// {
// setBatch(e.target.value)
// }
// const SubmitHandler=()=>{
// setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,id:new Date().getTime().toString()}])
// }
// import React from 'react'
// import { Link } from 'react-router-dom'
// const Update = () => {

//   return (
//     <div>
// <br/>
// <form>
// <div className="box">
//                 <div className="input-box">
//                 <input type="text"  required="required"/>
//                 <span className="sp">NAME</span>
//                 </div>
//                 <div className="input-box">
//                 <input type="number" required="required"/>
//                 <span>AGE</span>
//                 </div>
//                 </div>
//                 <div className="box">
//                 <div className="input-box">
//                 <input type="text"  required="required"/>
//                 <span className="sp">COURSE</span>
//                 </div>
//                 <div className="input-box">
//                 <input type="text" required="required"/>
//                 <span>BATCH</span>
//                 </div>
//                 </div>
//                 <br/>
// </form>
// <Link to="/Students"><button style={{margin:'30px'}}>Cancel</button></Link>
// <Link to="/Students" ><button style={{margin:'30px'}}>Update</button></Link>
//    </div>
//   )
// }
// export default Update
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'

const Update = () => {
  const [Name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [Course, setCourse] = useState('')
  const [Batch, setBatch] = useState('')
  const [students, setStudents] = useContext(store)

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeAge = (e) => {
    setAge(e.target.value)
  }

  const handleChangeCourse = (e) => {
    setCourse(e.target.value)
  }

  const handleChangeBatch = (e) => {
    setBatch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create a new student object with the updated data
    const updatedStudent = {
      Name: Name,
      Age: Age,
      Course: Course,
      Batch: Batch,
      id: new Date().getTime().toString()
    }

    // Find the index of the student to update
    const studentIndex = students.findIndex((student) => student.id === updatedStudent.id)

    if (studentIndex !== -1) {
      // Update the student data in the students array
      const updatedStudents = [...students]
      updatedStudents[studentIndex] = updatedStudent
      setStudents(updatedStudents)
    }

    // Redirect to the Students page after updating
    window.location.href = '/Students'
  }

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="box">
          <div className="input-box">
            <input type="text" value={Name} onChange={handleChangeName} />
            <span className="sp">NAME</span>
          </div>
          <div className="input-box">
            <input type="number" value={Age} onChange={handleChangeAge}  />
            <span>AGE</span>
          </div>
        </div>
        <div className="box">
          <div className="input-box">
            <input type="text" value={Course} onChange={handleChangeCourse}  />
            <span className="sp">COURSE</span>
          </div>
          <div className="input-box">
            <input type="text" value={Batch} onChange={handleChangeBatch} />
            <span>BATCH</span>
          </div>
        </div>
        <br />
        <Link to="/Students">
          <button style={{ margin: '30px' }}>Cancel</button>
        </Link>
        <button type="submit" style={{ margin: '30px' }}>Update</button>
      </form>
    </div>
  )
}

export default Update
