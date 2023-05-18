import React, { useContext } from 'react'
import { store} from './Detail'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const AddStudent = () => {
const[Name,setName]=useState("")
const[Age,setAge]=useState("")
const[Course,setCourse]=useState("")
const[Batch,setBatch]=useState("")
const[students,setStudents]=useContext(store)

const ChangeHandler1=(e)=>
{
setName(e.target.value)
}
const ChangeHandler2=(e)=>
{
setAge(e.target.value)

}
const ChangeHandler3=(e)=>
{
setCourse(e.target.value)

}
const ChangeHandler4=(e)=>
{
setBatch(e.target.value)

}

const SubmitHandler=()=>{

setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,id:new Date().getTime().toString()}])

}
  return (
    <div>
<br/>
<form>
<div className="box">
                <div className="input-box">
                <input type="text" onChange={ChangeHandler1} required/>
                <span className="sp">NAME</span>
                </div>
                <div className="input-box">
                <input type="number" onChange={ChangeHandler2} required="required"/>
                <span>AGE</span>
                </div>
                </div>
                <div className="box">
                <div className="input-box">
                <input type="text" onChange={ChangeHandler3} required="required"/>
                <span className="sp">COURSE</span>
                </div>
                <div className="input-box">
                <input type="text" onChange={ChangeHandler4} required="required"/>
                <span>BATCH</span>
                </div>
                </div>
                <br/>
</form>
<Link to="/Students"><button style={{margin:'30px'}}>Cancel</button></Link>
<Link to="/Students" onClick={SubmitHandler}><button style={{margin:'30px'}}>Submit</button></Link>
</div>

  )
}
export default AddStudent;
