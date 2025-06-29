import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contactez-moi</h1>

      <div className={styles.contactDetails}>
        <ul className={styles.list}>
          <li className={styles.item}>
            {/* Icône mail */}
            <svg
            aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <a href="mailto:yohannfaustino@gmail.com" className={styles.link}>
              yohannfaustino@gmail.com
            </a>
          </li>

          <li className={styles.item}>
            {/* Icône téléphone */}
            <svg
            aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.85.74a1 1 0 011 1v3.5a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1H6a1 1 0 011 1c0 1.35.26 2.65.74 3.85a1 1 0 01-.21 1.11l-2.2 2.2z" />
            </svg>
            <a href="tel:+33678223334" className={styles.link}>
              06 78 22 33 34
            </a>
          </li>

          <li className={styles.item}>
            {/* Icône GitHub */}
            <svg
            aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.754-1.332-1.754-1.088-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.304.762-1.604-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.043.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.814 1.096.814 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <a
              href="https://github.com/Yohann-Faustino"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              github.com/Yohann-Faustino
            </a>
          </li>

          <li className={styles.item}>
            {/* Icône LinkedIn */}
            <svg
            aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-7.5h2.5v7.5zm-1.25-8.54c-.83 0-1.5-.68-1.5-1.52 0-.83.67-1.51 1.5-1.51s1.5.68 1.5 1.51c0 .84-.67 1.52-1.5 1.52zm12 8.54h-2.5v-4c0-1.07-.85-1.93-1.91-1.93-1.06 0-1.92.86-1.92 1.93v4h-2.5v-7.5h2.4v1.03h.04c.32-.62 1.12-1.27 2.3-1.27 2.45 0 2.9 1.61 2.9 3.7v4.74z" />
            </svg>
            <a
              href="https://linkedin.com/in/yohannfaustino"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              linkedin.com/in/yohannfaustino
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.cvDownload}>
        <a
          href="/CV_de_Yohann_Faustino.pdf"
          download
          className={styles.button}
          aria-label="Télécharger mon CV"
        >
          {/* Icône téléchargement */}
          <svg
          aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ marginRight: 8 }}
          >
            <path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.84v6h4.66v-6h3.84L12 2z" />
          </svg>
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}
