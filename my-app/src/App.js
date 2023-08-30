import './App.css';
import {Container, Nav, Navbar, NavDropdown, Row, Col, Image, Button, Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image
                src="https://picsum.photos/900/400"
                fluid
                rounded
                className=""
              />
            </Col>
            <Col sm={5}>
              <h1 class="font-weight-light">Tagline</h1>
              <p class="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                fugiat quae debitis, odio sint dolorem sit ad! Inventore quia
                dignissimos facilis nostrum laborum praesentium similique, culpa
                iusto recusandae? Ea, tempore?
              </p>
              <Button variant="outline-primary"> Call to action</Button>
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                fugiat quae debitis, odio sint dolorem sit ad! Inventore quia
                dignissimos facilis nostrum laborum praesentium similique, culpa
                iusto recusandae? Ea, tempore?
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src="https://picsum.photos/320/200" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://picsum.photos/320/200" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://picsum.photos/320/200" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </main>
      <footer class="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p class="text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
