import React from "react";
import style from "./Project.module.css";
import projectData from "./projectData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <main className={style.maincon}>
      <h1> My Projects</h1>
      <hr />
      <div className={style.projectCon}>
        <div className={style.scroll}>
          <span className={`${style.scrollword} ${style.scrollword1}`}>
            Scroll
          </span>
          <span className={`${style.scrollword} ${style.scrollword2}`}>
            {" "}
            Down &#8594;
          </span>
        </div>

        <div className={style.cards}>
          {/* First Card */}
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              des={project.des}
              live={project.live}
              github={project.github}
              gitlogo={project.gitlogo}
            />
          ))}
        </div>
      </div>
      <p>
        For more projects please visit my
        <a href="https://github.com/SharifHafizi" target="_blank">
          <span>GitHub</span>
        </a>
      </p>
    </main>
  );
}
export default Projects;
