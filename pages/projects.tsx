import IProjects from "models/IProjects";
import { projectType } from "models/projectType.enum";
import { useState } from "react";
import Project from "components/Project";
import styles from "styles/Projects.module.scss";
import axios from "axios";

type ProjectsProps = {
  projects: IProjects[];
};

export async function getServerSideProps(context: any) {
  const res = await axios.get("http://127.0.0.1:3000/api/getAllProjects");
  const data = res.data as IProjects[];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects: data },
  };
}

function Projects({ projects }: ProjectsProps) {
  const [typeFilter, setTypeFilter] = useState("ALL");

  function handleTypeChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
    setTypeFilter(changeEvent.target.value);
  }

  return (
    <div className={styles.projects}>
      <div className={styles.title}>Projects</div>
      <div className={styles.filters}>
        <input
          type="radio"
          name="type"
          id="ALL"
          value="ALL"
          onChange={handleTypeChange}
          className={styles.ALL}
          defaultChecked
        />
        <label htmlFor="ALL"></label>
        <input
          type="radio"
          name="type"
          id="PERSONAL"
          value={projectType.PERSONAL}
          className={styles.PERSONAL}
          onChange={handleTypeChange}
        />
        <label htmlFor="PERSONAL"></label>
        <input
          type="radio"
          name="type"
          id="SCHOOL"
          value={projectType.SCHOOL}
          className={styles.SCHOOL}
          onChange={handleTypeChange}
        />
        <label htmlFor="SCHOOL"></label>
      </div>
      <div className={styles.inner}>
        {projects
          .filter((project) => {
            if (typeFilter === "ALL") {
              return true;
            }
            return project.type === typeFilter;
          })
          .map((project, index) => {
            return <Project project={project} key={index} />;
          })}
      </div>
    </div>
  );
}

export default Projects;
