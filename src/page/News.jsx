import React from "react";
import NavigationBar from "../components/componentDalamNews/NavigationBar";
import Swiper from "../components/componentDalamNews/Swiper";
import AdditionalNews from "../components/componentDalamNews/AdditionalNews";
import '../components/componentDalamNews/styleNews.css';
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";
function News(){
    return(
        <div className="Berita">
            <NavigationBar />
            
            <Swiper />
            <AdditionalNews />
            <Footer />
            

        </div>
    );
}

export default News;