import React from "react";

function Filter({setGoodDogs, goodDogs}) {
    
    function handleClick() {
        setGoodDogs(goodDogs => !goodDogs)
    }

    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={handleClick}>Filter good dogs: {goodDogs? "ON" : "OFF"}</button>
        </div>
    )
}

export default Filter