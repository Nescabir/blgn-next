import { ExperienceType } from "models/experienceType.enum";
import IExperiences from "models/IExperiences";
import ILangs from "models/ILangs";
import styles from "styles/Skills.module.scss";
import { Timeline } from "@material-ui/lab";
import "devicon/devicon.min.css";
import Experience from "./Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const experiences: IExperiences[] = [
    {
      name: "Full-stack Engineer",
      type: ExperienceType.PROFESSIONAL,
      company: "Hiboo",
      link: "https://www.hiboo.io/",
      location: "Chambéry",
      startDate: new Date("2022-11-02"),
      endDate: new Date("2023-08-17"),
    },
    {
      name: "Full-stack Developer",
      type: ExperienceType.PROFESSIONAL,
      company: "MoovLab",
      location: "Grenoble",
      startDate: new Date("2021-01-04"),
      endDate: new Date("2022-10-29"),
    },
    {
      name: "Associate Software Engineer",
      type: ExperienceType.PROFESSIONAL,
      company: "Sage",
      location: "Annecy",
      startDate: new Date("2019-10-14"),
      endDate: new Date("2020-08-01"),
    },
    {
      name: "Full-stack Developer internship",
      type: ExperienceType.PROFESSIONAL,
      company: "Agence Future",
      location: "Annecy",
      startDate: new Date("2019-01-01"),
      endDate: new Date("2019-02-01"),
    },
    {
      name: "Full-stack Developer internship",
      type: ExperienceType.PROFESSIONAL,
      company: "Agence Future",
      location: "Annecy",
      startDate: new Date("2018-05-01"),
      endDate: new Date("2019-06-01"),
    },
    {
      name: "BTS SIO option SLAM",
      type: ExperienceType.EDUCATIONAL,
      company: "Lycée Saint Michel",
      location: "Annecy",
      startDate: new Date("2017-09-01"),
      endDate: new Date("2019-06-01"),
    },
    {
      name: "Bac Professionnel ELEEC",
      type: ExperienceType.EDUCATIONAL,
      company: "CFAI",
      location: "Thyez",
      startDate: new Date("2014-09-01"),
      endDate: new Date("2016-06-01"),
    },
  ];
  const langs: ILangs[] = [
    {
      name: "HMTL5",
      class: "devicon-html5-plain colored",
    },
    {
      name: "CSS3",
      class: "devicon-css3-plain colored",
    },
    {
      name: "JavaScript",
      class: "devicon-javascript-plain colored",
    },
    {
      name: "TypeScript",
      class: "devicon-typescript-plain colored",
    },
    {
      name: "C#",
      class: "devicon-csharp-plain colored",
    },
    {
      name: "SQL",
      class: "devicon-mysql-plain colored",
    },
  ];
  const frameworks: ILangs[] = [
    {
      name: "Node.js",
      class: "devicon-nodejs-plain colored",
    },
    {
      name: "Express.js",
      class: "devicon-express-original",
    },
    {
      name: "React",
      class: "devicon-react-plain colored",
    },
    {
      name: "Next",
      class: "devicon-nextjs-original",
    },
    {
      name: "Vue.js",
      class: "devicon-vuejs-plain colored",
    },
    {
      name: "Angular",
      class: "devicon-angularjs-plain colored",
    },
    {
      name: "Mocha",
      class: "devicon-mocha-plain colored",
    },
    {
      name: "Jest",
      class: "devicon-jest-plain colored"
    },
  ];
  const utils: ILangs[] = [
    {
      name: "Git",
      class: "devicon-git-plain colored",
    },
    {
      name: "Apache",
      class: "devicon-apache-plain colored",
    },
    {
      name: "SSH",
      class: "devicon-ssh-plain",
    },
    {
      name: "NPM",
      class: "devicon-npm-original-wordmark colored",
    },
    {
      name: "Yarn",
      class: "devicon-yarn-plain colored",
    },
    {
      name: "Github",
      class: "devicon-github-plain",
    },
    {
      name: "Firebase",
      class: "devicon-firebase-plain colored",
    },
    {
      name: "MongoDB",
      class: "devicon-mongodb-plain colored",
    },
    {
      name: "PostgreSQL",
      class: "devicon-postgresql-plain colored",
    },
  ];
  const os: ILangs[] = [
    {
      name: "Linux",
      class: "devicon-linux-plain",
    },
    {
      name: "Windows",
      class: "devicon-windows8-plain colored",
    },
    {
      name: "Docker",
      class: "devicon-docker-plain colored",
    },
    {
      name: "Heroku",
      class: "devicon-heroku-original colored",
    },
  ];

  return (
    <div className={styles.skills} id="skills">
      <div className={styles.title}>Skills & Experiences</div>
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={`${styles.details_group} ${styles.hard_skills}`}>
            <div className={styles.title}>Hard skills</div>
            <div className={`${styles.skill_group} ${styles.langs}`}>
              <div className={styles.childrens}>
                {langs.map((lang, index) => {
                  return (
                    <div className={styles.lang_item} key={index}>
                      <i className={lang.class}></i>
                      <div className={styles.name}>{lang.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`${styles.skill_group} ${styles.frameworks}`}>
              <div className={styles.childrens}>
                {frameworks.map((lang, index) => {
                  return (
                    <div className={styles.lang_item} key={index}>
                      <i className={lang.class}></i>
                      <div className={styles.name}>{lang.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`${styles.skill_group} ${styles.utils}`}>
              <div className={styles.childrens}>
                {utils.map((lang, index) => {
                  return (
                    <div className={styles.lang_item} key={index}>
                      <i className={lang.class}></i>
                      <div className={styles.name}>{lang.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`${styles.skill_group} ${styles.os}`}>
              <div className={styles.childrens}>
                {os.map((lang, index) => {
                  return (
                    <div className={styles.lang_item} key={index}>
                      <i className={lang.class}></i>
                      <div className={styles.name}>{lang.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`${styles.details_group} ${styles.soft_skills}`}>
            <div className={styles.title}>Soft skills</div>
            <div className={`${styles.skill_group} ${styles.soft}`}>
              <div className={styles.childrens}>
                <div className={styles.skill}>Communication</div>
                <div className={styles.skill}>Teamwork</div>
                <div className={styles.skill}>Eager to learn</div>
                <div className={styles.skill}>Problem-solving</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.curriculum}>
          <div className={styles.desktop}>
            <Timeline align="alternate">
              {experiences.map((experience, index) => {
                return <Experience experience={experience} key={index} />;
              })}
            </Timeline>
          </div>
          <div className={styles.mobile}>
            <div className={styles.title}>Experiences</div>
            {experiences.map((experience, index) => {
              return (
                <div className={styles.experience_mobile} key={index}>
                  <div className={styles.ico}>
                    {(() => {
                      if (experience.type !== ExperienceType.PROFESSIONAL) {
                        return (
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className={`${styles.icon} ${styles.educ}`}
                            size="2x"
                          />
                        );
                      }

                      return (
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          className={`${styles.icon} ${styles.prof}`}
                          size="2x"
                        />
                      );
                    })()}
                  </div>
                  <div className={styles.details}>
                    <div className={styles.title}>{experience.name}</div>
                    <div className={styles.data}>
                      {experience.link ? (
                        <a
                          href={experience.link}
                          className={[
                            styles.company,
                            experience.type !== ExperienceType.EDUCATIONAL
                              ? styles.prof
                              : styles.educ,
                          ].join(" ")}
                        >
                          {experience.company}
                        </a>
                      ) : (
                        <div
                          className={[
                            styles.company,
                            experience.type !== ExperienceType.EDUCATIONAL
                              ? styles.prof
                              : styles.educ,
                          ].join(" ")}
                        >
                          {experience.company}
                        </div>
                      )}
                      -
                      <div className={styles.location}>
                        {experience.location}
                      </div>
                      -
                      <div className={styles.period}>
                        {experience.startDate.toLocaleString("default", {
                          month: "long",
                        })}{" "}
                        {experience.startDate.getFullYear()} to{" "}
                        {(() => {
                          if (typeof experience.endDate === "string") {
                            return experience.endDate;
                          }

                          return (
                            experience.endDate.toLocaleString("default", {
                              month: "long",
                            }) +
                            " " +
                            experience.endDate.getFullYear()
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
