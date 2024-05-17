import React, { useState, useEffect, useRef } from "react";
import Youtube from "react-youtube";
import { Container } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import { CSSTransition } from "react-transition-group";
import "./styleHome.css";


function Video() {
  const [opts, setOpts] = useState({
    height: "250",
    width: "385",
    playerVars: {
      autoplay: 0,
    },
  });

  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [isVisible3, setVisible3] = useState(false);

  const onChange1 = (visiblity) => setVisible1(visiblity);
  const onChange2 = (visiblity) => setVisible2(visiblity);
  const onChange3 = (visiblity) => setVisible3(visiblity);

  const containerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth * 1; // 90% of the container's width
        const height = `${width / 2}px`;

        setOpts({
          height: height,
          width: `${width}px`,
          playerVars: {
            autoplay: 0,
          },
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container
      ref={containerRef}
      className="d-flex flex-column justify-content-center align-items-center mt-3 VideoPadaHome"
    >
      <h1 className="mb-3">
        <span className="word1">Explore </span>
        <span className="word2">the </span>
        <span className="word3">Beauty </span>
        <span className="word4">of aceh</span>
      </h1>
      <Youtube videoId="ciNmPaFqC08" opts={opts} className="mb-3" />
      <VisibilitySensor onChange={onChange2} offset={{ top: 100 }} delayedCall minTopValue={100} active={isVisible2}>
  <CSSTransition in={isVisible2} timeout={5000} classNames="fade">
    <h3 className="mb-3 text-white">Selamat datang di provinsi Aceh</h3>
  </CSSTransition>
</VisibilitySensor>
<VisibilitySensor onChange={onChange3} offset={{ top: 100 }} delayedCall minTopValue={100} active={isVisible3}>
  <CSSTransition in={isVisible3} timeout={5000} classNames="fade">
    <h4 className="text-white">اچيه دارالسلام</h4>
  </CSSTransition>
</VisibilitySensor>
    </Container>
  );
}
export default Video;
