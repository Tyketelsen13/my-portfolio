import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio site to showcase my work and skills.",
    image: "public/portfolio.png",
    tech: ["React", "CSS"],
    demo: "https://my-portfolio-sigma-peach-kht6h0gosi.vercel.app/",
    github: "https://github.com/Tyketelsen13/my-portfolio"
  },
  {
    title: "Loteria Online",
    description: "A fun online lottery game built with React.",
    image: "https://via.placeholder.com/400x200?text=Loteria+Online",
    tech: ["React", "Next.js", "MongoDB"],
    demo: "https://loteria-frontend-ten.vercel.app/auth/signin",
    github: "https://github.com/Tyketelsen13/loteria"
  },
   {
    title: "Mine-Mine",
    description: "A fun replica of pacman.",
    image: "https://mine-mine.vercel.app/",
    tech: ["Html", "Javascript", "CSS"],
    demo: "https://mine-mine.vercel.app/",
    github: "https://github.com/Tyketelsen13/Mine-Mine"
  },
  {
    title: "Task Manager App",
    description: "A simple task manager with CRUD features.",
    image: "https://via.placeholder.com/400x200?text=Task+Manager",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A dashboard to check weather in any city.",
    image: "https://via.placeholder.com/400x200?text=Weather+Dashboard",
    tech: ["React", "API"],
    demo: "#",
    github: "#"
  },
  {
    title: "Rock-Paper-Scissors Game",
    description: "A fun rock-paper-scissors game built with JavaScript.",
    image: "https://via.placeholder.com/400x200?text=Rock-Paper-Scissors+Game",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://rock-paper-scissors-git-main-tyketelsen13s-projects.vercel.app/",
    github: "https://github.com/Tyketelsen13/Rock-Paper-Scissors"
  }
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2 className="projects__title">Projects</h2>
    <div className="projects__grid">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <div className="card-inner">
            <div className="card-front">
              <img src={project.image} alt={project.title} className="project-card__img" />
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((t, i) => (
                  <span className="project-card__tag" key={i}>{t}</span>
                ))}
              </div>
              <div className="project-card__links">
                <a href={project.demo} className="project-card__btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.github} className="project-card__btn project-card__btn--secondary" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
            <div className="card-back">
              <div className="card-back__content">Zanimals</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
