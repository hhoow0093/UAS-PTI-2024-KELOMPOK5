import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Row, Col } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import "./styleTrivia.css";
import Container from "react-bootstrap/Container";

function MapApi() {
  return (
    <Container>
      <Row className="kotak-peta">
        <Col xs={12} md={12} lg={12}>
          <MapContainer
            center={[5.54829, 95.323753]}
            zoom={13}
            style={{ height: "35vh", width: "100%", marginTop:"1em" }}
            className="peta"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[5.54829, 95.323753]}>
              <Popup>Banda Aceh, Aceh, Indonesia</Popup>
            </Marker>
          </MapContainer>
        </Col>
        <Col xs={12} md={12} lg={12} className="Tentangpeta responsive-text text-white">
          Banda Aceh adalah ibu kota provinsi Aceh di ujung utara Pulau Sumatra,
          Indonesia. Terletak di sepanjang Selat Malaka, kota ini memiliki
          lokasi strategis sebagai pintu gerbang ke Samudra Hindia dan jalur
          pelayaran internasional. Selain itu, sebagai kota terbesar di wilayah
          tersebut, Banda Aceh juga merupakan pusat ekonomi, politik, dan budaya
          Aceh. Keberadaannya yang dekat dengan perbatasan internasional dan
          posisinya yang memanjang di sepanjang pantai membuatnya menjadi pusat
          perdagangan dan transportasi yang penting di wilayah tersebut.
        </Col>
      </Row>
    </Container>
  );
}

export default MapApi;
