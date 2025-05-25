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
      id: 6,
      title: (
        <a
          href="https://github.com/Kigwaaaa/Kenyan-Corruption-Score"
          className="tittle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kenyan Corruption Score
        </a>
      ),
      year: "2025",
      images: ["/assets/kenya school finder.png"],
      description:
        "The Kenyan Corruption Score project is a React-based single-page web app that analyzes corruption scores for 21 Kenyan ministries and 47 counties in the 2024-2025 financial year. It calculates scores using Financial Irregularities (FI), Corruption Cases (CC), Budget Impact (BI), and Perception Rank (PI). Key features include interactive UI with tables and charts, data management with CSV export/import, trend analysis of corruption scores, AI chatbot integration, and accessibility features. The app uses sample data and aims to provide an intuitive tool for studying Kenyan governance and corruption.",
      technologies: [
        "React.js",
        "Chart.js",
        "Leaflet",
        "OpenAI API",
        "Web Speech API",
        "Python (Data Scraping)",
        "Material-UI",
        "CSV Processing"
      ],
    },
    
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
      id: 2,
      title: (
        <a
          href="https://gichobiportfolio.onrender.com"
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
    {
      id: 3,
      title: (
        <a
          href="#"
          className="tittle"
          target="_blank"
            rel="noopener noreferrer"
        >
          Mpesa Visualizer App
        </a>
      ),
      year: "2025",
      images: [ "/assets/Bizzscreenshot.png"],
      description:
        "This is a Mpesa Visualizer App that allows you to visualize your Mpesa transactions. It is an MVP that I am working on. The final product should use Mpesa api to fetch the data, but currently uses regular expressions to parse the data from the screenshot.",
      technologies: [
        "Supabase",
        "Tailwind CSS",
        "React.js",
        "Fontawesome icons",
        "React"

        
      ],
    },
    {
      id: 4,
      title: (
        <a
          href="https://github.com/Kigwaaaa/Med"
          className="tittle"
          target="_blank"
            rel="noopener noreferrer"
        >
          NeemaMed
        </a>
      ),
      year: "2025",
      images: [ "/assets/Screenshot 2025-05-16 at 11.20.10.png"],
      description:
        "The system is designed to streamline healthcare operations by providing a centralized platform for managing patient records, appointments, and lab tests, making it easier for healthcare providers to deliver efficient care while maintaining accurate medical records.",
      technologies: [
        "Vite",
        "Tailwind CSS",
        "React.js",
        "Eslint",
        "React",
      ],
    },
    {
      id: 5,
      title: (
        <a
          href="https://kenyaschoolfinder.co.ke/"
          className="tittle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kenya School Finder
        </a>
      ),
      year: "2025",
      images: ["/assets/kenya-school-finder.png"],
      description:
        "A comprehensive platform for finding and comparing schools in Kenya. Features include school search, detailed profiles, location-based recommendations, and user reviews.I did the wireframes for the admin dashboard of the website",
      technologies: [
        "Figma",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS",
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
