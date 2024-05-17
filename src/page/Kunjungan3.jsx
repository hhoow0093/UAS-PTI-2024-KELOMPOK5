import React from "react";
import NavbarKunjungan3 from "../components/componentDalamKunjungan3/NavbarKunjungan3";
import LeafletMapKunjungan3 from "../components/componentDalamKunjungan3/LeafletMapKunjungan3";
import Footer from "../components/Footer";
function Kunjungan3(){
    return(
        <div className="Kunjungan2">
            <NavbarKunjungan3/>
            <LeafletMapKunjungan3/>
            <Footer/>
        </div>
    );
}

export default Kunjungan3; 