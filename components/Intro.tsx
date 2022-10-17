import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "styles/Intro.module.scss";
import face from "public/face.webp";

function Intro() {
  return (
    <div className={styles.intro} id="intro">
      <div className={styles.heading}>
        {/* <div className={styles.avatar}>
          <Image src={face} alt="My face" />
        </div> */}
        <div className={styles.name}>
          <span className={styles.initial}>Hi!</span> My name is{" "}
          <span className={styles.highlight}>Baptiste Boulongne</span>.
        </div>
      </div>
      <div className={styles.subheading}>
        I&apos;m a full-stack developer and a software engineer.
      </div>
      <div className={styles.socials}>
        <div className={styles.social_item}>
          <a
            href="https://twitter.com/BLGNDev"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
        <div className={styles.social_item}>
          <a
            href="https://www.linkedin.com/in/boulongne-baptiste/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className={styles.social_item}>
          <a
            href="https://github.com/Nescabir"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
