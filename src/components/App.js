import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import DogContainer from "./DogContainer";

function App() {
  
  const [dogs, setDogs] = useState([])
  const [selectedDogId, setSelectedDogId] = useState(null)
  const [goodDogs, setGoodDogs] = useState(false)
  
  useEffect( () => {
    fetch("http://localhost:3001/pups")
    .then(resp => resp.json())
    .then(data => setDogs(data))
  }, [])

  function changeGoodness(upDog) {
    const updatedDogs = dogs.map(dog => dog.id === upDog.id ? upDog : dog)
    setDogs(updatedDogs)
  }

  const selectedDog = dogs.find((dog) => dog.id === selectedDogId)

  const filteredDogs = dogs.filter( dog => dog.isGoodDog)

  return (
    <div className="App">
      <Filter dogs={dogs} setGoodDogs={setGoodDogs} goodDogs={goodDogs} />
      <DogBar dogs={goodDogs? filteredDogs : dogs} setSelectedDogId={setSelectedDogId}/>
      <DogContainer dog={selectedDog} changeGoodness={changeGoodness}/>
    </div>
  );
}

export default App;
