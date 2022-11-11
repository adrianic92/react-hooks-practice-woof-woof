import React from "react";

function DogInfo({dog, changeGoodness}) {
    
    if (!dog) {
        return <h3>Select a doggo</h3>
    }
    
    function handleClick() {  
        fetch(`http://localhost:3001/pups/${dog.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({isGoodDog: !dog.isGoodDog})
    })
        .then(resp => resp.json())
        .then(data => changeGoodness(data))
    }

    return(
        <div id="dog-info">
            <img src={dog.image} alt={dog.name} />
            <h2>{dog.name}</h2>
            <button onClick={handleClick}>{dog.isGoodDog ? "Good" : "Bad"} Dog!</button>
        </div>
    )
}

export default DogInfo