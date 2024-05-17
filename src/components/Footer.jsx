import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container className='mt-3'>
    <MDBFooter className='text-center text-lg-left' style={{backgroundColor:"brown"}}>
      <div className='text-center p-3 text-white'>
        Banda-Aceh-beauty
      </div>
    </MDBFooter>
    </Container>
  );
}