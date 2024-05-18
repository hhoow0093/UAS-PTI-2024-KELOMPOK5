import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function LoadingSpinner() {
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000); // Simulate a loading delay
  }, [location]);

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }

  return null;
}

export default LoadingSpinner;