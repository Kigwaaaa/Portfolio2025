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
                        Software Developer
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
                        Nairobi, Nakuru, and online platforms. These events
                        focused on solving real-world problems, developing
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
                        <b>Skills:</b> Hackathon Strategy, Rapid Prototyping,
                        Team Collaboration, React.js, Node.js, Python
                        <br />
                        <b>Main Tools:</b> GitHub, Visual Studio Code, Slack,
                        Zoom
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
                        <b>Contribution:</b> Designed and implemented several
                        projects from scratch, including personal websites,
                        utility tools, and experimental applications. These
                        projects provided opportunities to apply and refine
                        knowledge in various programming languages, frameworks,
                        and deployment techniques.
                        <br />
                        <b>Skills:</b> React.js, Node.js, Python, Django,
                        JavaScript, Firebase, Docker
                        <br />
                        <b>Main Tools:</b> GitHub, VS Code, Firebase, Docker,
                        Heroku
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
