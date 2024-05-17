import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Row, Col } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import Container from "react-bootstrap/Container";
import MuseumAceh from "./Pictures/Museum-Negeri-Aceh.jpeg";
import "./StylesInkunjungan4.css";

function LeafletMapKunjungan4() {
  return (
    <Container className="m-auto">
      <Row className="kotak-peta">
        <Col xs={12} md={12} lg={12}>
          <MapContainer
            center={[5.548394, 95.320888]}
            zoom={13}
            style={{ height: "50vh", width: "100%", marginTop: "1em" }}
            className="peta"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[5.548394, 95.320888]}>
              <Popup>
                <div className="popup-content">
                  <img
                    src={MuseumAceh}
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
          Museum Negeri Aceh adalah lembaga kebudayaan di Banda Aceh, Indonesia,
          yang menampilkan sejarah, budaya, dan warisan masyarakat Aceh. Di sini
          terdapat artefak, pameran, dan pajangan dari berbagai periode,
          termasuk Kesultanan Islam Aceh dan dampak tsunami tahun 2004.
          Pengunjung dapat menjelajahi tekstil tradisional, keramik, senjata,
          dan artefak Islam, yang menawarkan wawasan tentang kehidupan dan
          tradisi Aceh. Museum ini berfungsi sebagai sumber pendidikan dan
          peringatan, melestarikan dan mempromosikan identitas budaya Aceh.
          Selain itu, Museum Negeri Aceh juga menyelenggarakan acara dan
          kegiatan budaya, seperti pameran seni, seminar, dan lokakarya, untuk
          meningkatkan pemahaman dan apresiasi terhadap warisan budaya Aceh.
          Dengan koleksi yang kaya dan fasilitas yang modern, museum ini menjadi
          destinasi yang penting bagi wisatawan dan peneliti yang tertarik
          dengan sejarah dan budaya Aceh.
        </Col>
      </Row>
    </Container>
  );
}

export default LeafletMapKunjungan4;
