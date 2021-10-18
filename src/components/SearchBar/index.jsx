import React, { useState } from "react";
import "./style.css";

function SearchBar() {
    return (
        <>
            <div className="searchbar">
                <span>Choose a city</span>
                <button>Switch</button>
            </div>
        </>
    );
}

export default SearchBar;
