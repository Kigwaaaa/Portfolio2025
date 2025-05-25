import { Grid, Typography, Box } from "@mui/material";
import "./css/About.css";
import { motion } from "framer-motion";

export const About = ({ isDarkTheme }) => {
  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div className="about">
        <div className="col-lg-12 heading">
          <h2>About Me</h2>
          <p>A brief overview of my background and interests</p>
        </div>

        <Grid container spacing={2} className="aboutme">
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="about-me"
            >
              <Typography variant="h6" component="span">
                Hello there! 👋
              </Typography>
              <br />
              <Typography variant="h4" component="span" className="Lewis">
                I'm Lewis
              
              </Typography>
              <Typography variant="body1" component="span">
                , Hi, I’m Lewis, a passionate Computer Science student crafting innovative solutions through AI and full-stack development. I specialize in the MERN stack (MongoDB, Express, React, Node.js), building user-focused apps like a mobile-friendly M-Pesa seller platform and Flicker Zone delivery system. My AI projects include a WhatsApp chatbot for a Kenyan photo studio and a web app visualizing corruption scores with React and Chart.js. I leverage DevOps with CI/CD pipelines, GCP, and Kubernetes for scalable deployments, and ensure quality with Postman and Selenium. Driven to solve complex challenges, I’m excited to explore new technologies. Thanks for visiting my portfolio!
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="about-me"
            >
              <Box
                component="img"
                src="./mern2.png"
                alt="image"
                sx={{ maxWidth: "100%" }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
