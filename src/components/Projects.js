import * as React from "react";
import { useState } from "react";
// import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import "./css/Projects.css";
import { Carousel } from "antd";

export default function Projects({ isDarkTheme }) {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openModal = (project) => {
    setSelectedProject(project);
    setShow(true);
  };
  const contentStyle = {
    margin: 0,
    height: "160px",
    lineHeight: "160px",
    textAlign: "center",
  };

  const projects = [
    {
      id: 1,
      title: (
        <a
          href="https://lewisgichobi.onrender.com"
          className="tittle"
          target="_blank"
            rel="noopener noreferrer"
        >
          First Portfolio Project
        </a>
      ),
      year: "2023",
      images: [ "/assets/frstportfolio.png"],
      description:
        "This was my first coding project. Starting from scratch I used HTML, CSS, and JavaScript to build a simple, responsive portfolio. The site features a clean design, smooth animations, and a user-friendly layout. It showcases my skills and projects in a professional manner.",
      technologies: [
        "HTML",
        "CSS3",
        "JavaScript",
        "Fontawesome icons",
        
      ],
    },
   
    {
      id: 3,
      title: (
        <a
          href="https://charles-dev-portfolio.onrender.com/"
          className="tittle"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Portfolio
        </a>
      ),
      year: "2024",
      images: ["/assets/secondportfolio.png"],
      description:
        "A dynamic and responsive portfolio showcasing my development work. Built with a modern tech stack, it features seamless navigation, interactive elements, and a minimalist design that emphasizes content. Deployed on a robust platform for optimal performance and accessibility.",
      technologies: [
        "React.js",
        "Bootstrap CSS",
        "Iconify",
        "FontAwesome",
        "Ant Design",
        "Material-UI",
      ],
    },
    ];

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div className="projecs">
        <div className="col-lg-12 heading">
          <h2>Projects</h2>
          <p>Collection some of my solo projects</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <Card
              key={project.id}
              sx={{ maxWidth: 375 }}
              onClick={() => openModal(project)}
              style={{ zIndex: 1 }}
              className="custom-card"
            >
              <CardMedia sx={{ height: 140 }} image={project.images[0]} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
                <Typography variant="body2">
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Year:</strong> {project.year}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedProject && (
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName={`custom-modal ${isDarkTheme ? "dark-theme" : ""}`}
          >
            <Modal.Header closeButton className="custom-header">
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="custom-header">
              <Carousel arrows infinite={false}>
                {selectedProject.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        maxHeight: "500px",
                      }}
                    />
                  </div>
                ))}
              </Carousel>

              <div>
                <Typography sx={{ mt: 2 }}>
                  {selectedProject.description}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <strong>Technologies:</strong>{" "}
                  {selectedProject.technologies.join(", ")}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <strong>Year:</strong> {selectedProject.year}
                </Typography>
              </div>
            </Modal.Body>

            <Modal.Footer className="custom-header">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          /* <div
              style={{
                padding: 20,
                margin: "10% auto",
                maxWidth: 600,
            
              }}
            >
              <Typography id="modal-title" variant="h6" component="h2">
                {selectedProject.title}
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                {selectedProject.description}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Technologies:</strong>{" "}
                {selectedProject.technologies.join(", ")}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Year:</strong> {selectedProject.year}
              </Typography>
            </div> */
        )}
      </div>
    </div>
  );
}
