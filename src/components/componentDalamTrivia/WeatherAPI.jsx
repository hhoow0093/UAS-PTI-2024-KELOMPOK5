import React, { useState, useEffect } from "react";
import { Container, Form, Button, Col, Alert, Fade, Row } from "react-bootstrap";
import "./styleTrivia.css";

const WeatherApi = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Banda aceh");
  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const APIkey = "c0jlb5sXgaP66iNz6P5LDGSHVzIlPZ9P";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.tomorrow.io/v4/weather/realtime?units=metric&location=${location}&apikey=${APIkey}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location]);

  const getWeatherCondition = (weatherCode) => {
    switch (weatherCode) {
      case 1000:
        return "Clear";
      case 1001:
        return "Cloudy";
      case 1100:
        return "Mostly Clear";
      case 1101:
        return "Partly Cloudy";
      case 1102:
        return "Mostly Cloudy";
      case 2000:
        return "Fog";
      case 2100:
        return "Light Fog";
      case 3000:
        return "Light Wind";
      case 3001:
        return "Wind";
      case 3002:
        return "Strong Wind";
      case 4000:
        return "Drizzle";
      case 4001:
        return "Rain";
      case 4200:
        return "Light Rain";
      case 4201:
        return "Heavy Rain";
      case 5000:
        return "Snow";
      case 5001:
        return "Flurries";
      case 5100:
        return "Light Snow";
      case 5101:
        return "Heavy Snow";
      case 6000:
        return "Freezing Drizzle";
      case 6001:
        return "Freezing Rain";
      case 6200:
        return "Light Freezing Rain";
      case 6201:
        return "Heavy Freezing Rain";
      case 7000:
        return "Ice Pellets";
      case 7101:
        return "Heavy Ice Pellets";
      case 7102:
        return "Light Ice Pellets";
      case 8000:
        return "Thunderstorm";
      default:
        return "Unknown";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(search);
  };

  useEffect(() => {
    if (data && data.data) {
      const currentData = data.data.values;
      const weatherCondition = getWeatherCondition(currentData.weatherCode);
      setAlertMessage(
        `Cuaca dalam ${location}: ${weatherCondition}`
      );
      setShowAlert(true);

      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setAlertMessage(`Tidak dapat mendapatkan cuaca dalam ${location}`);
      setShowAlert(true);

      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [data]);

  return (
    <Container>
    <Row>
      <Col xs={10} sm={10} md={8} lg={6} className="mx-auto">
        <Fade in={showAlert}>
          <div className="fixed-alert">
            <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
              <Alert.Heading>Weather Update</Alert.Heading>
              <p>{alertMessage}</p>
            </Alert>
          </div>
        </Fade>
      </Col>
    </Row>
      <div className="kotak-form">
        {data && data.data ? (
          <Container className="text-white">
            <h1>Cuaca dalam {location}</h1>
            <h2>Cuaca sekarang dalam {location}</h2>
            <p>Temperatur: {data.data.values.temperature} °C</p>
            <p>
              Kondisi cuaca:{" "}
              {getWeatherCondition(data.data.values.weatherCode)}
            </p>
            <p>Humiditas: {data.data.values.humidity}%</p>
            <p>Kecepatan udara: {data.data.values.windSpeed} m/s</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicSearch">
                <Col xs={12} md={6} lg={4}>
                  <Form.Control
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter location"
                    className="mb-3"
                  />
                </Col>
              </Form.Group>
              <Button variant="warning" type="submit">
                Cari
              </Button>
            </Form>
          </Container>
        ) : (
          <Container className="text-white">
            <h1>Cuaca dalam {location}</h1>
            <p>Tidak dapat mendapatkan cuaca</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicSearch">
                <Col xs={12} md={6} lg={4}>
                  <Form.Control
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter location"
                    className="mb-3"
                  />
                </Col>
              </Form.Group>
              <Button variant="warning" type="submit">
                Cari
              </Button>
            </Form>
          </Container>
        )}
      </div>
    </Container>
  );
};

export default WeatherApi;
