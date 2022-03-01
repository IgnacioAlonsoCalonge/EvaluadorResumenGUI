import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function BotonLogin (props) {


	return (

        <Link to='/login'><button className="boton_login">Login</button></Link>

       );
	
}