import React from "react";

function DogBar( {dogs, setSelectedDogId}) {

    const allDogs = dogs.map( dog => {
        function handleClick() {
            setSelectedDogId(dog.id)
        }        
        return (
            <span key={dog.id} onClick={handleClick}>{dog.name}</span>
        )
    })

    return (
        <div id="dog-bar">{allDogs}</div>
    )
}

export default DogBar