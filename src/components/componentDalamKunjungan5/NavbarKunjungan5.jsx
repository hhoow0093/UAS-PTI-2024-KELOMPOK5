import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarKunjungan5() {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState("");
  const APIkey = "c0jlb5sXgaP66iNz6P5LDGSHVzIlPZ9P";
  const location = "Gading serpong";

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Fetch weather data from Tomorrow.io API
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature&timesteps=1h&units=metric&apikey=${APIkey}`
        );
        const currentWeather = response.data.data.timelines[0].intervals[0].values.temperature;
        setWeather(`Temperature: ${currentWeather}°C`);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="PalingAtas">
      <Container className="custom-navbar">
        <Navbar expand="lg" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="/">Banda Aceh Beauty</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/trivia">Trivia</Nav.Link>
                <Nav.Link href="/aboutus">About us</Nav.Link>
              </Nav>
              <div className="d-flex flex-column text-end">
                <Navbar.Brand className="fs-6 fs-lg-4">Current time: {time.toLocaleTimeString()}</Navbar.Brand>
                <Navbar.Brand className="fs-6 fs-lg-4">Gading serpong weather: {weather}</Navbar.Brand>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavbarKunjungan5;