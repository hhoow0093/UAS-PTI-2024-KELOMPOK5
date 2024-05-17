import React from "react";
import NavbarKunjungan2 from "../components/componentDalamKunjungan2/NavbarKunjungan2";
import LeafletMapKunjungan2 from "../components/componentDalamKunjungan2/LeafletMapKunjungan2";
import Footer from "../components/Footer";
function Kunjungan2(){
    return(
        <div className="Kunjungan2">
            <NavbarKunjungan2 />
            <LeafletMapKunjungan2 />
            <Footer />
        </div>
    );
}

export default Kunjungan2; 