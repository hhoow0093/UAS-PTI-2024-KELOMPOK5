import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Row, Col } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import Container from "react-bootstrap/Container";
import masjid from "./Pictures/masjid-baiturrahman.jpg";
import "./StylesInKunjungan1.css";

function LeafletMapKunjungan1() {
  return (
    <Container className="m-auto">
      <Row className="kotak-peta">
        <Col xs={12} md={12} lg={12}>
          <MapContainer
            center={[5.561758, 95.31929]}
            zoom={13}
            style={{ height: "50vh", width: "100%", marginTop: "1em" }}
            className="peta"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[5.561758, 95.31929]}>
              <Popup>
                <div className="popup-content">
                  <img
                    src={masjid}
                    className="popup-image"
                    alt="Masjid Raya Baiturrahman"
                  />
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </Col>
        <Col
          xs={12}
          md={12}
          lg={12}
          className="Tentangpeta responsive-text text-white"
          
        >
          Masjid Raya Baiturrahman adalah sebuah masjid agung yang
          terletak di Banda Aceh, Indonesia. Ini adalah simbol ikonik budaya
          Aceh dan warisan Islam. Masjid ini menampilkan arsitektur mencolok
          dengan kubah hitam, dinding putih, dan ukiran rumit, memadukan desain
          tradisional Islam dengan pengaruh lokal. Awalnya dibangun pada tahun
          1881 pada masa kolonial Belanda, tempat ini kini menjadi tempat ibadah
          utama dan bangunan bersejarah. Masjid ini terkenal karena keindahan
          dan ketahanannya, terutama karena selamat dari tsunami Samudera Hindia
          tahun 2004, yang menyebabkan kerusakan luas di wilayah tersebut.
          Selama bencana, masjid ini berfungsi sebagai tempat perlindungan bagi
          banyak orang, sehingga semakin membuat komunitas lokal semakin
          disayangi dan memperkuat statusnya sebagai simbol kekuatan dan
          keimanan.
        </Col>
      </Row>
    </Container>
  );
}

export default LeafletMapKunjungan1;
