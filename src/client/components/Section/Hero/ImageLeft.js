import React, {Component} from 'react';
import { firstNetworkRequest } from "../Images/images"

class Index extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={firstNetworkRequest} class="img-fluid" alt="Responsive image"/>
                        </div>
                        <div className="col-6">
                            <h4><bold>The Proof.</bold></h4>
                            <br/>
                            <p>You can prove this application is Isomorphic by turning off the JavaScript for this page and examining how the first network request returns the already rendered html page.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
