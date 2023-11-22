"use client"
import React from 'react';
import {Button} from "antd"
import {useRouter} from "next/navigation";

const SideBar = () => {
    const router = useRouter()
    const handleLogOut = () => {
        router.push("/login")
    }
    return (
        <div className="flex flex-col h-screen w-64 z-20 p-2 bg-amber-600 ">
            {/*<div className="">*/}
            <Button
                onClick={handleLogOut}
                className="mt-auto mx-auto mb-4 w-40 h-12" style={{background: "#EEF5FF"}}
                shape="round">
                Log Out
            </Button>
            {/*</div>*/}

        </div>
    );
};

export default SideBar;