import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Row, Col } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import Container from "react-bootstrap/Container";
import PantaiLampuuk from "./Pictures/Pantai-Lampuuk.jpg";
import "./StylesInKunjungan3.css";

function LeafletMapKunjungan3() {
  return (
    <Container className="m-auto">
      <Row className="kotak-peta">
        <Col xs={12} md={12} lg={12}>
          <MapContainer
            center={[5.490086, 95.229642]}
            zoom={13}
            style={{ height: "50vh", width: "100%", marginTop: "1em" }}
            className="peta"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[5.490086, 95.229642]}>
              <Popup>
                <div className="popup-content">
                  <img
                    src={PantaiLampuuk}
                    className="popup-image"
                    alt="Pantai Lampuuk"
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
          Pantai Lampuuk adalah pantai indah di Aceh, Indonesia, terkenal dengan
          pasir putih dan perairan biru kehijauan yang jernih. Populer untuk
          berselancar, berenang, dan olahraga air lainnya, tempat ini menarik
          penduduk lokal dan wisatawan. Pantai ini juga memiliki tugu peringatan
          tsunami, karena terkena dampak tsunami tahun 2004. Pengunjung dapat
          menikmati pemandangan indah, terutama saat matahari terbenam, dan
          berpartisipasi dalam upaya konservasi penyu. Terletak sekitar 15
          kilometer dari Banda Aceh, mudah diakses dan menawarkan fasilitas
          dasar seperti restoran dan akomodasi. Selain itu, Pantai Lampuuk juga
          menjadi tempat yang cocok untuk piknik keluarga, dengan area yang luas
          dan fasilitas yang tersedia. Menjelajahi keindahan alamnya akan
          memberikan pengalaman yang tak terlupakan bagi pengunjung dari segala
          usia.
        </Col>
      </Row>
    </Container>
  );
}

export default LeafletMapKunjungan3;
