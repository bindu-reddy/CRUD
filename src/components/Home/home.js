import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Hi....homepage</h1>
                <p>some paragraph</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn</Link> 
            </div>
        );
    }
}
export default HomePage;