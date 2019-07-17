import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Isomorphic React Demo</h1>
                    <p className="lead">Welcome, I created this basic SPA to demonstrate my understanding of <bold>Isomorphic React</bold></p>
                    <hr class="my-4"/>
                    <p className="lead">My Goal: Make an Isomorphic React Application completely by hand.</p>
                    <p>By building this application I learned about the complexity of <bold>Webpack</bold>, <bold>Babel</bold>, and more on how React works under the hood.</p>
                </div>
            </div>
        );
    }
}

export default Index;
