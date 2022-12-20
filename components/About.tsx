import styles from "styles/About.module.scss";

function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.title}>About me</div>
      <div className={styles.container}>
        <div className={styles.table}>
          <div className={styles.table_item}>Full name :</div>
          <div className={styles.table_item}>Baptiste Boulongne</div>
          <div className={styles.table_item}>Email :</div>
          <div className={styles.table_item}>contact [at] bgln.dev</div>
          <div className={styles.table_item}>Location :</div>
          <div className={styles.table_item}>Chambéry, France</div>
          <div className={styles.table_item}>Languages :</div>
          <div className={styles.table_item}>French, English</div>
        </div>
        <div className={styles.text_zone}>
          <div className={styles.greeting}>Hey !</div>
          <div className={styles.description}>
            I am a full-stack developer located in France. I have been
            passionate about IT and gaming since my childhood, I always remember
            trying to hack, create and understand things. I found my way in
            back-end development in hope to work one day in the gaming industry.
          </div>
          <div className={styles.description}>
            Hardworking, curious and perfectionnist. Tech and F1 enthusiast.
            Gamer at heart.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
