import React from 'react';

const Home = () => {
    return (
        <div>
            <span>I'm the main component</span>
            <button onClick={() => console.log('Activated')}>Press Me!</button>
        </div>
    )
};

export default Home;