import React from 'react';
import Header from "../header";
const Home = () => {
    return (
        <div>
            <Header/>
            <span>I'm the main component</span>
            <button onClick={() => console.log('Activated')}>Press Me!</button>

            <iframe width="600"
                    height="600"
                    src="https://ionicabizau.github.io/github-profile-languages/api.html?scotpfleghaar"
                    frameBorder="0"/>

        </div>
    )
};

export default Home;
