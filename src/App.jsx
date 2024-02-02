import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import { useState } from "react";
import AudioRecorder from "./CreateAudio";


function App(){
    return <div>
        <Header></Header>
        <div className="betweenHeaderFooter">
        <AudioRecorder></AudioRecorder>
        </div>
        <Footer></Footer>
    </div>
}

export default App;