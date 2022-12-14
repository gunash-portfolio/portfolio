import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";
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
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
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

              <Tab.Content>
                <Tab.Pane eventKey={"first"}>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey={"second"}>Loren Ipsum</Tab.Pane>
                <Tab.Pane eventKey={"third"}>Loren Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
