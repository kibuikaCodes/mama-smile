import React, { Component } from 'react';
import styled from 'styled-components';

const Tracker = styled.div`
    width: 50%;
    height: 20px;
    margin: 15px auto;
    background: rgb(20, 35, 0);
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;

`;

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Tracker>
                <ProgressInTracker percentage={25} />
            </Tracker>
         );
    }
}
 
export default ProgressBar;