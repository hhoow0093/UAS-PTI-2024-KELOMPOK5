import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styleHome.css'; // Assuming you moved the CSS to Context.css
import bandaaceh from './image/bandaaceh.jpg'
import VisibilitySensor from 'react-visibility-sensor';
import { CSSTransition } from 'react-transition-group';

const Context = () => {
  const [isVisible1, setVisible1] = React.useState(false);
  const [isVisible2, setVisible2] = React.useState(false);

  const onChange1 = visiblity => {
    setVisible1(visiblity);
  };

  const onChange2 = visiblity => {
    setVisible2(visiblity);
  };

  return (
    <Container className="satu">
      <Row className="card-container">
        <Col xs={12} md={6} className="card-hover">
          <div className="image-box">
            <img src={bandaaceh} alt="Banda Aceh"  href="/trivia"/>         
          </div>
              <div className="content">
                <h2 style={{color:"white"}}>Kota Banda Aceh</h2>
                <p>Sejak 28 Desember 1962</p>
              </div>
        </Col>
        <Col xs={12} md={6} className="card-satu">
          <div className="container-image text-white">
          <VisibilitySensor onChange={onChange1} offset={{ top: 100 }} delayedCall>
              <CSSTransition in={isVisible1} timeout={5000} classNames="fade">
                <h6>
                  Ibukota bernama panggung "Serambi Mekkah" atau Seuramo Mekkah ini 
                  telah berada di bawah naungan Provinsi Aceh selama lebih dari 800 tahun silam.
                  Berada di pulau Sumatera dengan luas sekitar 61.36 km persegi dengan sejuta
                  momen bersejarah khususnya pada masa Kesultanan Iskandar Muda. Sebelum terbentuknya
                  sebuah provinsi,
                </h6>
              </CSSTransition>
            </VisibilitySensor>
            <VisibilitySensor onChange={onChange2} offset={{ top: 100 }} delayedCall>
              <CSSTransition in={isVisible2} timeout={5000} classNames="fade">
                <h6>
                  Aceh telah mendeklarasikan dirinya sebagai Kesultanan Aceh Darussalam
                  di abad ke-14. Kemudian mengalami jatuh bangun sebagai pusat peradaban umat 
                  Islam di Asia Tenggara hingga akhirnya berpindah kekuasaan pada militer agresi 
                  Belanda untuk diubah namanya sebagai "Kuta Raja" setelah berhasil memproklamasikan
                  kejatuhan Kesultanan Aceh.
                </h6>
              </CSSTransition>
            </VisibilitySensor>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Context;

