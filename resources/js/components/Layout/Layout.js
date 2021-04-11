import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <div className="mb-3">
                <Header/>
            </div>
            <div>
                {children}
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default Layout;
