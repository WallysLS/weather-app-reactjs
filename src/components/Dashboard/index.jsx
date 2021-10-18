import React from "react";
import SearchBar from "../../components/SearchBar";
import WeatherIcon from "../../components/WeatherIcon";
import "./style.css";

function Dashboard() {
    return (
        <>
            <SearchBar />
            <WeatherIcon />
        </>
    );
}

export default Dashboard;
