import React, { useState, useEffect } from "react";
import "./styleNews.css";
import Youtube from "react-youtube";
import { Row, Col, Container } from 'react-bootstrap';


function AdditionalNews() {
  const [opts, setOpts] = useState({
    height: "250",
    width: "385",
    playerVars: {
      autoplay: 0,
    },
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 480) { // for phones
        setOpts({
          height: "150",
          width: "250",
          playerVars: {
            autoplay: 0,
          },
        });
      } else if (window.innerWidth <= 800) { // for tablets
        setOpts({
          height: "150",
          width: "250",
          playerVars: {
            autoplay: 0,
          },
        });
      } else { // for larger devices
        setOpts({
          height: "250",
          width: "385",
          playerVars: {
            autoplay: 0,
          },
        });
      }
    }
  
    window.addEventListener("resize", handleResize);
    handleResize(); // call the function initially
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
    <div className="Atas-Kedua text-white">
      <h3>News Tambahan</h3>
      <Row className="justify-content-between">
      <Col xs={12} md={4} className="p-2 text-white responsive-text">
          <div className="First-item">
          <h4>Atraksi Aceh</h4>
            <Youtube videoId="sMPG5MapHB8" opts={opts} />
            <p>
              Aceh, tujuan wisata yang memukau dengan keindahan alam dan keragaman budayanya. Dari gua tersembunyi hingga hutan tropis, serta tarian tradisional yang memesona, Aceh menawarkan pengalaman tak terlupakan bagi para pelancong.
            </p>
          </div>
        </Col>
        <Col xs={12} md={4} className="p-2 text-white responsive-text">
          <div className="Second-item">
            <h4>Profil Aceh</h4>
            <Youtube videoId="LXtB7jQYWis" opts={opts} />
            <p>
            Banda Aceh kota yang dikenal dengan keragaman, harmoni agama, dan toleransi tinggi, menciptakan suasana damai bagi wisatawan di Indonesia yang menakjubkan. Dengan keunikan Aceh menjadi tempat wisata yang sangat menarik untuk dikunjungi. Berikut adalah profil pengenalan mengenai Banda Aceh.
            </p>
          </div>
        </Col>
        <Col xs={12} md={4} className="p-2 text-white responsive-text">
          <div className="Third-item">
          <h4>Keberagaman Aceh</h4>
            <Youtube videoId="AfQVT-laSw0" opts={opts} />
            <p>
            Banda Aceh menawarkan spesialitas regional yang mudah ditemui dan menyajikan warisan sejarah yang disimpan pada Museum Aceh. Sementara itu, Museum Tsunami menggambarkan sejarah tragis yang masih terjaga dengan baik. Kota ini dikenal karena keragaman, harmoni agama, dan toleransi tinggi, Sehingga damainya suasana sangat terasa di kota ini.
            </p>
          </div>
        </Col>
      </Row>
    </div>
    </Container>
  );
}

export default AdditionalNews;
