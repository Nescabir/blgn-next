import styles from "styles/Home.module.scss";

import Intro from "components/Intro";
import Skills from "components/Skills";
import About from "components/About";

export default function Home() {
  return (
    <div className={styles.home}>
      <Intro />
      <Skills />
      <About />
    </div>
  );
}
