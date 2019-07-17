import React from 'react';
import Header from "../header";
import Hero from '../Section/Hero'
import ImageLeft from '../Section/Hero/ImageLeft'
export const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Hero/>
                        <ImageLeft/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Home;
