import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    <footer className="mt-5 py-3 bg-light text-center fixed-bottom">
      <Container>
        <Row>
          <Col>
            <p>Contact the admin via <a href="https://www.whatsapp.com" target="_blank" className="mx-2 bi bi-instagram"></a> or <a href="https://www.instagram.com" target="_blank" className="mx-2 bi bi-whatsapp"></a> for more information.</p>
          </Col>
        </Row>
      </Container>
    </footer >
  );
}

export default Footer;