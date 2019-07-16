import React from 'react';
import Header from "../header";
import Hero from '../Section/Hero'

export const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Hero/>
                    </div>
                </div>
                <iframe width="600"
                        height="600"
                        src="https://ionicabizau.github.io/github-profile-languages/api.html?scotpfleghaar"
                        frameBorder="0"/>

            </div>
        </React.Fragment>
    )
};

export default Home;
