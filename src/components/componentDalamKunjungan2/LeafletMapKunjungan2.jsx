import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Row, Col } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import Container from "react-bootstrap/Container";
import PulauTailana from "./Pictures/Pulau-Tailana.jpg";
import "./StylesInKunjungan2.css";

function LeafletMapKunjungan2() {
  return (
    <Container className="m-auto">
      <Row className="kotak-peta">
        <Col xs={12} md={12} lg={12}>
          <MapContainer
            center={[2.278011, 97.231236]}
            zoom={13}
            style={{ height: "50vh", width: "100%", marginTop: "1em" }}
            className="peta"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[2.278011, 97.231236]}>
              <Popup>
                <div className="popup-content">
                  <img
                    src={PulauTailana}
                    className="popup-image"
                    alt="Pulau Tailana"
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
          Pulau Tailana adalah sebuah pulau kecil dan indah yang terletak di
          gugusan Kepulauan Banyak di lepas pantai Aceh, Indonesia. Dikenal
          karena keindahan alamnya yang menakjubkan, Tailana memiliki pantai
          berpasir putih bersih, perairan biru kehijauan, dan terumbu karang
          yang indah, menjadikannya tujuan populer bagi wisatawan yang mencari
          surga tropis. Pulau ini menawarkan kesempatan bagus untuk snorkeling,
          menyelam, dan bersantai di lingkungan yang tenang dan masih alami.
          Lokasinya yang relatif terpencil membuat tempat ini tidak terlalu
          ramai dibandingkan tempat wisata terkenal lainnya, sehingga
          memungkinkan pengunjung untuk merasakan kehidupan pulau Indonesia yang
          lebih tenang, autentik, dan membumi. Pengalaman di Pulau Tailana juga
          ditambah dengan kehangatan serta keramahan masyarakat lokal yang
          selalu siap menyambut pengunjung dengan senyum, menjadikannya tempat
          yang sempurna untuk melarikan diri dari keramaian kota dan menikmati
          kedamaian alam.
        </Col>
      </Row>
    </Container>
  );
}

export default LeafletMapKunjungan2;
