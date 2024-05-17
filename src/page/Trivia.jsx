import React from "react";
import NavigationBarTrivia from "../components/componentDalamTrivia/NavigationBarTrivia";
import MapApi from "../components/componentDalamTrivia/MapApi";
import '../components/componentDalamTrivia/styleTrivia.css';
import SwiperTempat from "../components/componentDalamTrivia/SwiperTempat";
import WeatherApi from "../components/componentDalamTrivia/WeatherAPI";
import Footer from "../components/Footer";
function Trivia(){
    return(
        <div className="Trivia">
            <NavigationBarTrivia />
            <MapApi />
            <SwiperTempat/>
            <WeatherApi/>
            <Footer />
        </div>
    );
}

export default Trivia;