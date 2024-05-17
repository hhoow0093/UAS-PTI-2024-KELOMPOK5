import React from "react";
import NavbarKunjungan5 from "../components/componentDalamKunjungan5/NavbarKunjungan5";
import LeafletMapKunjungan5 from "../components/componentDalamKunjungan5/LeafletMapKunjungan5";
import Footer from "../components/Footer";
function Kunjungan5(){
    return(
        <div className="Kunjungan2">
            <NavbarKunjungan5/>
            <LeafletMapKunjungan5/>
            <Footer/>
        </div>
    );
}

export default Kunjungan5; 