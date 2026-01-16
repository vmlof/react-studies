import styles from "./Footer.module.css";

type FooterProps = {
  company: string;
};

function Footer({ company }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by {company}.
      </p>
    </footer>
  );
}

export default Footer;
