import React from "react";
import '../App.css';
import TextoSegundoPanel from "./TextoSegundoPanel";
import {Player} from "@lottiefiles/react-lottie-player";
import data from "./book.json";


export default function Segundopanel (props) {

	return (

        <div className="segundopanel">

            <Player
                className="lottie"
                autoplay={true}
                loop={true}
                src= {data}
                />
                
            <TextoSegundoPanel/>

        </div>
            );
	
}