import React from "react";
import NavbarKunjungan1 from "../components/componentDalamKunjungan1/NavbarKunjungan1";
import LeafletMapKunjungan1 from "../components/componentDalamKunjungan1/LeafletMapKunjungan1";
import Footer from "../components/Footer";

function Kunjugan(){
    return(
        <div className="Kunjugan">
            <NavbarKunjungan1 />
            <LeafletMapKunjungan1 />
            <Footer />
        </div>
    );
}

export default Kunjugan;