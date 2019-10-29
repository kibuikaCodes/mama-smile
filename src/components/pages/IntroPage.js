import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function IntroPage() {
    return(
        <div className="App">
            <header className="App-header">
            <h2>mama smile <span role="img">😃</span> </h2>
            <p>coming soon</p>
            <Link to="/sign-in"><Button className="btn btn-success">Continue</Button></Link>
            </header>
            
        </div>
    );

}

export default IntroPage;