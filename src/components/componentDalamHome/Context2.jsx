import React from "react";
import { Container } from "react-bootstrap";
import "./styleHome.css"
import VisibilitySensor from 'react-visibility-sensor';
import { CSSTransition } from 'react-transition-group';

function Context2() {
  const [isVisible, setVisible] = React.useState(false);

  const onChange = visiblity => {
    setVisible(visiblity);
  };

  return (
    <Container className="mt-3 d-flex align-items-start text-white contextKedua">
      <VisibilitySensor onChange={onChange} partialVisibility>
        <CSSTransition in={isVisible} timeout={5000} classNames="fade" >
          <div>
            <h3>Kota Banda Aceh</h3>
            <h4>Sejak 28 Desember 1962</h4>
            <p>
              Provinsi yang terkenal akan legenda masa Sultan Iskandar dan kultur
              syariahnya yang kuat ini menghasilkan banyak bangunan masjid sakral.
              Berdiri dengan kokoh sejak puluhan tahun lamanya menandakan tanah Aceh
              ini lahir dari sejarah yang panjang. Pun keindahan beragam adat budaya
              Aceh yang kental akan poin islaminya terlukiskan pada macam
              peninggalan bangunan dan seni kehidupan di masyarakat.
            </p>
          </div>
        </CSSTransition>
      </VisibilitySensor>
    </Container>
  );
}

export default Context2;
