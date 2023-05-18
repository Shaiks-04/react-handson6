import React from "react";
import Nav from './nav';

function StudentDesc(){
    return (
        <>
            <Nav/>
            <form>
                <div className="box">
                <div className="input-box">
                <input type="text" required="required"/>
                <span className="sp">NAME</span>
                </div>
                <div className="input-box">
                <input type="number" required="required"/>
                <span>AGE</span>
                </div>
                </div>
                <div className="box">
                <div className="input-box">
                <input type="text" required="required"/>
                <span className="sp">COURSE</span>
                </div>
                <div className="input-box">
                <input type="text" required="required"/>
                <span>BATCH</span>
                </div>
                </div>
                <br/> 
                <button>Submit</button>
                <button className="cancel">Cancel</button> 
            </form>
        </>
    );
}

export default StudentDesc;
