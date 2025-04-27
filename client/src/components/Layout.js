import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <NavBar/>
            <main style={{backgroundColor: "#F7F7F7", minHeight: "100vh"}}>
                <Outlet/>
            </main>
        </>
    );
}

export default Layout;