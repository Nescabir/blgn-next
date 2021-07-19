import styles from "styles/Project.module.scss";
import IProjects from "models/IProjects";
import { projectType } from "models/projectType.enum";
import face from "../public/face.jpg";

type ProjectProps = { project: IProjects };

function Project({ project }: ProjectProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className={styles.project}
    >
      <div className={`${styles.type} ${typeParser(project.type)}`}></div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className={styles.details}>
        <div className={styles.title}>{project.name}</div>
        <div className={styles.description}>{project.description}</div>
        <div className={styles.period}>
          {(() => {
            if (project.date.length > 1) {
              return (
                new Date(project.date[0]).getFullYear() +
                "-" +
                new Date(project.date[1]).getFullYear()
              );
            }

            return new Date(project.date[0]).getFullYear();
          })()}
        </div>
      </div>
    </a>
  );
}

function typeParser(type: projectType): string {
  switch (type) {
    case projectType.PERSONAL:
      return styles.PERSONAL;
    case projectType.PROFESSIONAL:
      return styles.PROFESSIONAL;
    case projectType.SCHOOL:
      return styles.SCHOOL;
  }
}

export default Project;
