import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Row, Col } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import Container from "react-bootstrap/Container";
import MuseumCuk from "./Pictures/Cuk-nya.jpg";
import "./StylesinKunjungan5.css";

function LeafletMapKunjungan5() {
  return (
    <Container className="m-auto">
      <Row className="kotak-peta">
        <Col xs={12} md={12} lg={12}>
          <MapContainer
            center={[5.516662, 95.271622]}
            zoom={13}
            style={{ height: "50vh", width: "100%", marginTop: "1em" }}
            className="peta"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[5.516662, 95.271622]}>
              <Popup>
                <div className="popup-content">
                  <img
                    src={MuseumCuk}
                    className="popup-image"
                    alt="Museum Negeri Aceh"
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
          “Rumah Cuk nya Dhien” mengacu pada rumah Cut Nyak Dhien, seorang tokoh
          terhormat dalam sejarah Indonesia yang dikenal karena perlawanannya
          terhadap pemerintahan kolonial Belanda di Aceh. Rumah tersebut
          menyimpan makna sejarah sebagai tempat ia tinggal dan menyusun
          strategi selama Perang Aceh. Saat ini, tempat ini berfungsi sebagai
          objek wisata dan situs bersejarah, yang memungkinkan pengunjung
          mempelajari kehidupan Cut Nyak Dhien dan kontribusinya terhadap
          kemerdekaan Indonesia. Pengunjung dapat menikmati tur yang dipandu
          untuk mendapatkan wawasan yang lebih dalam tentang kehidupan
          sehari-hari Cut Nyak Dhien serta melihat artefak dan dokumen
          bersejarah yang terkait dengan perjuangannya. Dengan menjaga dan
          mempertahankan rumah ini sebagai warisan bersejarah, kita menghormati
          dan mengenang perjuangan yang menginspirasi dari seorang pahlawan
          nasional.
        </Col>
      </Row>
    </Container>
  );
}

export default LeafletMapKunjungan5;
