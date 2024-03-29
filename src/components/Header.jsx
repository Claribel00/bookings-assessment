import { Container, Navbar, Nav } from "react-bootstrap";


export default function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Rent my Stuff.</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/bookings">View Bookings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}