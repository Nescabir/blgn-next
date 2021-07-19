import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import logo from "public/logo.png";
import styles from "styles/Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <a>
            <Image src={logo} alt="BLGN.dev logo" height="32" width="77" />
          </a>
        </Link>
      </div>
      <div className={styles.nav}>
        <div className={styles.nav_item}>
          <Link href="/" passHref>
            <a
              className={`${styles.link} ${
                router.pathname == "/" ? styles.selected : ""
              }`}
            >
              Home
            </a>
          </Link>
        </div>
        <div className={styles.nav_item}>
          <Link href="/projects" passHref>
            <a
              className={`${styles.link} ${
                router.pathname == "/projects" ? styles.selected : ""
              }`}
            >
              Projects
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.social_item}>
          <a
            href="https://twitter.com/BLGNDev"
            id="twitter"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
        <div className={styles.social_item}>
          <a
            href="https://www.linkedin.com/in/boulongne-baptiste/"
            id="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className={styles.social_item}>
          <a
            href="https://github.com/Nescabir"
            id="github"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
