import React from "react";
import DogInfo from "./DogInfo";


function DogContainer( {dog, changeGoodness} ) {
    
    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <DogInfo dog={dog} changeGoodness={changeGoodness}/>
        </div>
    )
}

export default DogContainer