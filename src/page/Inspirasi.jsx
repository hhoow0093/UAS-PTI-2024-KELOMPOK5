import React from "react";
import { Link } from "react-router-dom";
import "../components/StyleInspirasi.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Masjid from './Pictures/masjid-ureung-atjeh.jpg';
import Back from './Pictures/back.png';

function Inspirasi() {
  return (
    <div className="Box modal-container">
      <Modal show={true} centered style={{backgroundImage: `url(${Back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} animation={true} className="modal-content custom-modal">
        <Modal.Header>
          <Modal.Title className="text-white custom-title">Banda Aceh Beauty</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <img src={Masjid} alt="Masjid" className="img-fluid custom-image" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
        </Modal.Body>

        <Modal.Footer>
          <Link to="/home">
            <Button variant="warning" className="custom-button">Get Started</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Inspirasi;