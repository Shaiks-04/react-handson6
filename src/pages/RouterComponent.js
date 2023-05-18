import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./hom";
import Student from "./student";
import ContactUs from "./Contact";
import StudentDesc from "./studentDesc";

function RouterComponent(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/Contact" element={<ContactUs/>} />
            <Route path="/studentDesc" element={<StudentDesc/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;