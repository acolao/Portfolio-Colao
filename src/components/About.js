import {
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";

function About() {
  return (
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
          <h1 class="font-weight-light">Hello!</h1>
          <p class="mt-4">
            I am Alison Colao, a passionate full stack web developer with a
            flair for turning ideas into interactive realities. With a
            foundation in both front-end finesse and back-end wizardry, I craft
            seamless, user-centric websites and applications that marry
            functionality with aesthetics.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
