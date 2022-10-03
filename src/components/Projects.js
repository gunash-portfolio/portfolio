import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";

export const Projects = () => {
  const projects = [
    {
      title: "Tic-tac-toe",
      description: "Front-end Project",
      imgUrl: projImg1,
    },
    {
      title: "Calculator",
      description: "Front-end Project",
      imgUrl: projImg2,
    },
    {
      title: "Tetris",
      description: "Front-end Project",
      imgUrl: projImg3,
    },
    {
      title: "Tic-tac-toe",
      description: "Front-end Project",
      imgUrl: projImg1,
    },
    {
      title: "Calculator",
      description: "Front-end Project",
      imgUrl: projImg2,
    },
    {
      title: "Tetris",
      description: "Front-end Project",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
            </Tab.Container>
            <Tab.Content></Tab.Content>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
