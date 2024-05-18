import React, { useEffect } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/StyleAboutus2.css";
import "slick-carousel";
import Howard from "./Pictures/howard.jpg";
import Evelin from "./Pictures/epel.jpg";
import Jastin from "./Pictures/jastin.jpg";
import Valen from "./Pictures/alen.jpg";


function Aboutus2() {
  useEffect(() => {
    $(".center").slick({
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
        {
          breakpoint: 300,
          settings: "unslick",
        },
      ],
    });

    // Clean up the slick slider on component unmount
    return () => {
      if ($(".center").slick) {
        $(".center").slick("unslick");
      }
    };
  }, []);

  const openModal = (img) => {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.className = "modal-image";
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  return (
    <div>
      <div >
      <span className="arrow"><a href="/" style={{textDecoration:"none", fontSize:"3em", color:"white"}}>⬅</a></span>
      </div>
      <section className="center slider">
        <div className="profile">
          <img
            src={Howard}
            alt="Howard"
            onClick={() =>
              openModal(document.querySelector('img[alt="Howard"]'))
            }
          />
          <h3>Howard</h3>
          <p style={{ color: "white" }}>00000099772</p>
          <a href="https://www.instagram.com/howard_3125/" className="button">
            Instagram Profile
          </a>
        </div>
        <div className="profile">
          <img
            src={Jastin}
            alt="Jastin Afrian"
            onClick={() =>
              openModal(document.querySelector('img[alt="Jastin Afrian"]'))
            }
          />
          <h3>Jastin Afrian</h3>
          <p style={{ color: "white" }}>00000099187</p>
          <a href="https://www.instagram.com/jastin_afrian/" className="button">
            Instagram Profile
          </a>
        </div>
        <div className="profile">
          <img
            src={Evelin}
            alt="Eveline Marvelia"
            onClick={() =>
              openModal(document.querySelector('img[alt="Eveline Marvelia"]'))
            }
          />
          <h3>Eveline Marvelia</h3>
          <p style={{ color: "white" }}>00000077234</p>
          <a href="https://www.instagram.com/epheeelle/" className="button">
            Instagram Profile
          </a>
        </div>
        <div className="profile">
          <img
            src={Valen}
            alt="Valen Angellina Jocelyn"
            onClick={() =>
              openModal(
                document.querySelector('img[alt="Valen Angellina Jocelyn"]')
              )
            }
          />
          <h3>Valen Angellina Jocelyn</h3>
          <p style={{ color: "white" }}>00000097506</p>
          <a href="https://www.instagram.com/valensth_/" className="button">
            Instagram Profile
          </a>
        </div>
      </section>

      <div id="myModal" className="modal">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img className="modal-content" id="img01" alt="Modal" />
      </div>
      
    </div>

    
  );
}

export default Aboutus2;
