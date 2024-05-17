import React from "react";
import NavBarHome from "../components/componentDalamHome/NavBarHome";
import Video from "../components/componentDalamHome/Video";
import Context from "../components/componentDalamHome/Context";
import Context2 from "../components/componentDalamHome/Context2";
import CardInHome from "../components/componentDalamHome/CardInHome";
import Footer from "../components/Footer";

function Home(){
    return(
        <div className="Rumah">
            <NavBarHome />
            <Video/>
            <Context/>
            <Context2/>
            <CardInHome/>
            <Footer/>
        </div>
    );
}

export default Home;