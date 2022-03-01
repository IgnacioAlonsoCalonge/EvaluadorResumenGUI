import React from "react";
import '../App.css';
import Fotoresumen from "./Fotoresumen";
import Descripcion from "./Descripcion";

export default function Panelprincipal (props) {


	return (

        <div className="panelprincipal">

            <Descripcion/>
            <Fotoresumen/>

        </div>
            );
	
}