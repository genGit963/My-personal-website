import React from "react";
import "../pages/who.css"

import react from "../assets/react.jpg"
import mongo from "../assets/mongo.jpg"
import node from "../assets/node.jpg"
import express from "../assets/express.jpg"
import django from "../assets/django.jpg"
import flutter from "../assets/flutter.jpg"
import ai from "../assets/ai.jpg"
import blockchain from "../assets/blockchain.jpg"
import xcode from "../assets/xcode.jpg"

const WhoAmI = () => {
    return (
        <div className="who">
            <div className="who-body">
                <div className="who-par">
                    In the World of Electricity and Electronics, I am highly
                    curiosity-ic geeks of Computer Science and Engineering.
                    <br /> <br />
                    1st wonder of My Life is Computer and more importantly
                    the PROGRAMMING and beside physics. The little
                    curiosity began with mouse and its pointer on the monitor.
                    <br /> 
                </div >

                <div className="web">
                    <p className="p-who">&nbsp; &nbsp; My tools of Full-Stack Development : MERN</p>
                    <hr width="100%" align="left" color="black" />
                    <div className="web-skills">

                        <div className="web-skill"><img src={react} alt="react" /> <p>Reactjs</p></div>
                        <div className="web-skill"><img src={mongo} alt="mongo" /> <p>Mongodb</p></div>
                        <div className="web-skill"><img src={node} alt="node" /> <p>Nodejs</p></div>
                        <div className="web-skill"><img src={express} alt="express" /> <p>Express</p></div>


                    </div>
                </div>


            </div>

            <div className="app-ai">

                <h2 style={{padding:"1% 4%", fontStyle:"oblique", margin:"0px"}}> I am  also THINKING and WORKING on </h2> 
                <hr width="80%" align="left" color="black"/>

                <div className="apps">

                <div className="flutter">
                    <img src={flutter} alt="flutter-img" />
                    <p> <span style={{color: "blue", fontSize:"25px"}} > Flutter,</span>  <br />
                    Currently, I am good or better at flutter development
                    though my main part is 
                    Website development and AI. 
                    </p>
                </div>
                <div className="apple">
                    <img src={xcode} alt="xcode" />
                    <p> <span style={{color: "blue", fontSize:"25px"}}>APPLE DEVELOPMENT,</span> <br />
                    Since, I am doing all these in Apple Devices. I am also preserving good
                    potential of interest on Apple Development too. But haven't started at. 
                    </p>
                </div>

                </div>
            </div>


        </div>
    );
}

export default WhoAmI;


