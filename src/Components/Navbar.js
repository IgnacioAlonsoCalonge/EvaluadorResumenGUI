import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

export default function Navbar (props) {


	return (

        <div>
            <nav className='nav_links'>

            <ul>
                <li><Link to= "/evaluar">
                       Evaluar
                    </Link></li>
            </ul>
  
            </nav>

        </div>);
	
}