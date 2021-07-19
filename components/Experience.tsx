import IExperiences from "models/IExperiences";
import { ExperienceType } from "models/experienceType.enum";
import styles from "styles/Experience.module.scss";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

type ExperienceProps = { experience: IExperiences };

function Experience({ experience }: ExperienceProps) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        {(() => {
          if (experience.type !== ExperienceType.PROFESSIONAL) {
            return (
              <TimelineDot color="secondary">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className={styles.dotIcon}
                />
              </TimelineDot>
            );
          }

          return (
            <TimelineDot color="primary">
              <FontAwesomeIcon icon={faBriefcase} className={styles.dotIcon} />
            </TimelineDot>
          );
        })()}
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <div className={styles.experience}>
          <div className={styles.title}>{experience.name}</div>
          <div className={styles.details}>
            <div className={styles.company}>{experience.company}</div>-
            <div className={styles.location}>{experience.location}</div>-
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
      </TimelineContent>
    </TimelineItem>
  );
}

export default Experience;
