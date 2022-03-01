import React from "react";
import '../App.css';
import TercerpanelTexto from './Tercerpaneltexto.js'
import {Player} from "@lottiefiles/react-lottie-player";
import data from "./mailbox.json";



export default function TercerPanel (props) {

	return (

        <div className="tercerpanel">

            <TercerpanelTexto/>

            <Player
                className="lottie1"
                autoplay={true}
                loop={true}
                src= {data}
                />

        </div>
            );
	
}