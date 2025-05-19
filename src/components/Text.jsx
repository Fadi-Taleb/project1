import React from "react";
import './Text.css'
function Paragraph() {
    const monstyle={
        color:'blue',
        fontsize:'50'}
    return (
        <div className="bg-blue-500 flex">
    <p className='B'> bounjour me stagaire </p>
    <h1 style={{color:'red',textShadow:'10px 10px 10px black'}}> soyez le bienvennue </h1>
    <h1 style={monstyle}> ccccccccc </h1>
    </div>
    )
}
export default Paragraph;