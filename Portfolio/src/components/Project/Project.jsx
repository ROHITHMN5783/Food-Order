import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="project">
      <Container>
        <div className="projectlist">
          <Row className="projects">
            {project.map((projectlist) => (
              <Col md={6} lg={4} key={projectlist.id}>
                <div className="project-container">
                  <h3>{projectlist.name}</h3>
                  <img src={projectlist.img} alt={projectlist.id} className="project-img" />
                  <Button variant="primary" href={projectlist.githubLink} target="_blank">
                    Github Link
                  </Button>
                  <Button variant="success" href={projectlist.demoLink} target="_blank">
                    Demo Link
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Project;
