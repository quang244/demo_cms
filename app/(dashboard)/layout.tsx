import React from 'react';
import Navbar from "@/component/Navbar";
import SideBar from "@/app/(dashboard)/SideBar";
import {Main} from "next/document";
import "./index.scss"

const Layout = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex justify-between h-screen overflow-y-hidden">
            <SideBar/>
            <div className="w-full pl-4 ">
                {children}
            </div>
        </div>
    );
};


export default Layout;