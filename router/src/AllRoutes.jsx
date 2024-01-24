import React from "react";
import {Route, Routes} from "react-router-dom"
import Contacts from "./Components/Contacts";
import About from "./Components/About";
import Squad51 from "./Components/Squad51";

function AllRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Squad51/>}></Route>
                <Route path="/Contacts" element={<Contacts/>}></Route>
                <Route path="/About" element={<About/>}></Route>
            </Routes>
        </>
    )
}

export default AllRoutes;

