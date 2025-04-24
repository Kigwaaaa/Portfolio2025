import React, { useEffect } from "react";
import "./css/exx.css";
import "./css/back.css";

const Experience = ({ isDarkTheme }) => {
  useEffect(() => {
    const timelineBlocks = document.querySelectorAll(".timeline>li");
    const offset = 0.8;

    const hideBlocks = (blocks, offset) => {
      blocks.forEach((block) => {
        if (block.getBoundingClientRect().top > window.innerHeight * offset) {
          block
            .querySelectorAll(
              ".timeline-badge, .timeline-content, .timeline-panel"
            )
            .forEach((el) => {
              el.classList.add("is-hidden");
            });
        }
      });
    };

    const showBlocks = (blocks, offset) => {
      blocks.forEach((block) => {
        if (block.getBoundingClientRect().top <= window.innerHeight * offset) {
          block
            .querySelectorAll(
              ".timeline-badge, .timeline-content, .timeline-panel"
            )
            .forEach((el) => {
              el.classList.remove("is-hidden");
              el.classList.add("bounce-in");
            });
        } else {
          block
            .querySelectorAll(
              ".timeline-badge, .timeline-content, .timeline-panel"
            )
            .forEach((el) => {
              el.classList.remove("bounce-in");
              el.classList.add("is-hidden");
            });
        }
      });
    };

    const handleScroll = () => {
      showBlocks(timelineBlocks, offset);
    };

    hideBlocks(timelineBlocks, offset);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <section id="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading">
              <h2>Experience</h2>
              <p>Professional Experience, Projects, and Internships</p>

            </div>
            <div className="experience_container">
              <ul className="timeline">
                
                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2024.09 - 2024.07</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Nairobi,
                          Kenya
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Software Engineer</h4>
                    </div>

                    <div className="timeline-body">
                      <p>
                        <b>Company:</b> MentorNest
                        <br />
                        <b>Introduction:</b> MentorNest is a website that connects users with potential mentors based on their fields, skills, or the mentor's achievements. The goal is to create meaningful mentorship opportunities where people can learn from experienced professionals, grow their careers, and develop skills.
                        <br />
                        <b>Contribution:</b>  I was part of the
                        team responsible for developing and maintaining various
                        software solutions that support the company's products
                        and services. I conducted the usability test on the website and onboarded volunteers to test the website.
                        I also managed the websites X's account creating and editing attractive ads for the website.
                        <br />
                        <b>Skills:</b> Social Media Marketing, 
                        <br />
                        <b>Main Tools:</b> Git,
                        Clickup, Sentry, Pagerduty,GCP, Social Media,
                        Canva, X
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2024.09 - 2024.07</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Remote,
                          Kenya
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        UI\UX Designer
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <b>Company:</b> Kenyan School Finder
                        <br />
                        <b>Introduction:</b> Kenyan School Finder is a website that helps users look for schools according to requirements and allows schools to promote themselves . 
                        <br />
                        <b>Contribution:</b> Created the frameworks for the design of the Minimum Viable Product of th website from different users point of vieew.
                        <br />
                        <b>Skills:</b> Graphic Design, UI/UX Design
                        <br />
                        <b>Main Tools:</b> Figma, Git, JIRA, Visual Studio Code, Gitlab
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2025.04 - 2024.08</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Remote,
                          Kenya
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        CS50
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <b>Company:</b> Harvard University
                        <br />
                        <b>Introduction:</b>Completed CS50 and CS50P, a rigorous course from Harvard University that builds a strong foundation in the principles of computer science and programming. 
                        <br />
                        <b>Contribution:</b> Solved algorithmic problems, built web applications, and implemented projects that demonstrated proficiency in computational thinking, software logic, and efficient problem-solving techniques.
                        <br />
                        <b>Skills:</b> Algorithms & Data Structures, Memory management, Debugging and testing, Web programming (back-end & front-end), Databases and querying (SQL), Code readability and best practices
                        <br />
                        <b>Main Tools:</b> Flask (for Python-based web development), Git and GitHub(for version control), Python (for building scalable, readable code), HTML, CSS, JavaScript (for creating interactive web applications), SQL (for managing and querying databases)
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2022.05 - Present</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span>WorldWide🌏
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Hackathon Participant</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <b>Scope:</b> Participated in various hackathons held in
                        Nairobi and virtual platforms, tackling themes from fintech and healthcare to environmental sustainability. 
                        Competed in teams to deliver fully functional prototypes within 24–48‑hour sprints. 
                        These events focused on solving real-world problems, developing
                        innovative solutions, and showcasing technical skills in
                        a competitive environment.
                        <br />
                        <b>Contribution:</b> Collaborated with teams to develop
                        projects under tight deadlines, leveraging a range of
                        technologies including web and mobile app development.
                        Contributed to brainstorming sessions, coding, testing,
                        and presenting final solutions. Achieved recognition for
                        creativity, problem-solving, and technical proficiency.
                        <br />
                        <b>Skills:</b> Hackathon Strategy, Rapid Prototyping & Agile Development,
                        Cross-functional Team Collaboration, React.js, Node.js, Python
                        <br />
                        <b>Main Tools:</b> GitHub (version control & CI), Visual Studio Code, Slack & Zoom (remote coordination)
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2021.01 - 2021.12</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Remote
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        Self-Initiated Projects
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <b>Scope:</b> Undertook various self-initiated projects
                        to explore new technologies and enhance personal skills.
                        These projects range from developing innovative web
                        applications and mobile apps to experimenting with new
                        frameworks and tools.
                        <br />
                        <b>Contribution:</b> Full‑Stack Web App: Built a task‑management platform with React.js front‑end and Node.js/Express back‑end, integrating real‑time updates via WebSockets and deploying on Heroku; achieved 95% unit‑test coverage. Mobile Expense Tracker: Developed a cross‑platform Flutter app connected to Firebase Firestore for secure data sync, implementing OAuth2 authentication and offline caching for seamless user experience. AI Chatbot Prototype: Designed a customer‑support chatbot using Python and Django REST Framework, connected to a simple NLP pipeline with spaCy, reducing mock support response time by 60%. DevOps Playground: Containerized microservices with Docker, orchestrated with Docker Compose, and automated CI/CD pipelines using GitHub Actions to deploy to both Heroku and AWS EC2.
                        <br />
                        <b>Skills:</b> Front‑end: React.js, JavaScript (ES6+), HTML5 & CSS3, Flutter. 
                        Back‑end: Node.js/Express, Python/Django, RESTful APIs, Firebase Firestore. 
                        DevOps & Testing: Docker, CI/CD (GitHub Actions), Jest & Mocha, Unit & Integration Testing

                        <br />
                        <b>Main Tools:</b> GitHub, Visual Studio Code, Firebase, Docker, Heroku, AWS EC2
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2021.01 - Present</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Remote
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        Freelance Software Developer
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <b>Platform:</b> Fiverr and Freelance Projects
                        <br />
                        <b>Introduction:</b> As a freelance software developer,
                        I offer custom software solutions and API development
                        services to clients worldwide. My projects vary from
                        creating bespoke applications to developing and
                        integrating APIs tailored to specific business needs.
                        <br />
                        <b>Contribution:</b> Developed a range of custom
                        software applications and APIs, working directly with
                        clients to understand their requirements and deliver
                        solutions that meet their specifications. Managed
                        projects from inception through deployment, ensuring
                        high-quality and timely delivery.
                        <br />
                        <b>Skills:</b>JavaScript, React.js, Node.js, Express.js,
                        RESTful APIs, MongoDB, MySQL, (MERN Stack)
                        <br />
                        <b>Main Tools:</b> Git, VS Code, Postman, JIRA, Swagger
                        UI
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
