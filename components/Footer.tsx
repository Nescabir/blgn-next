import styles from "styles/Footer.module.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        <p>&copy; {year} BLGN.</p>
      </div>
      {/* <div id="wcb" className={`${styles.carbonbadge} wcb-d`}></div> */}
    </footer>
  );
}

export default Footer;
