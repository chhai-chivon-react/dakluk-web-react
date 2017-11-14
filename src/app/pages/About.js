import React , {Component} from 'react';
import {Link} from 'react-router-dom';
class About extends Component{
   
    render(){
        return(
            <div>
                Aout Page
                <li><Link to="/">home</Link></li>
            </div>
        );
    }
}
export default About;