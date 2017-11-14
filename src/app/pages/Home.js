import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
class HomeApp extends Component{
   
    render(){
        return( 
            <div>
            <h2>Home </h2>
            <li><Link to="/about">About</Link></li>
            </div>
           
        );
    }
}
export default HomeApp;