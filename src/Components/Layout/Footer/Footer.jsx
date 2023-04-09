import React from "react";
import { Outlet } from "react-router-dom";

const Footer =() =>{
    return(
        <div>
        <Outlet />
        <h4>Front III</h4>
        </div>
    )
}
export default Footer