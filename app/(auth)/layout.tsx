import React from 'react';
import "./index.scss"

const Layout = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div className="login flex items-center justify-end h-screen overflow-hidden">
            {children}
        </div>
    );
};

export default Layout;