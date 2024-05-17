import React from "react";
import NavbarKunjungan4 from "../components/componentDalamKunjungan4/NavbarKunjungan4";
import LeafletMapKunjungan4 from "../components/componentDalamKunjungan4/LeafletMapKunjungan4";
import Footer from "../components/Footer";
function Kunjungan4(){
    return(
        <div className="Kunjungan2">
            <NavbarKunjungan4/>
            <LeafletMapKunjungan4/>
            <Footer/>
        </div>
    );
}

export default Kunjungan4; 