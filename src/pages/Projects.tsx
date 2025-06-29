import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Mes projets</h1>
      <div className={styles.grid}>
        {/* Colonne gauche */}
        <div className={styles.leftColumn}>
          <div
            className={styles.animationWrapper}
            style={{ animationDelay: "0.1s" }}
          >
            <div className={styles.card}>
              <h2>🌐 Portfolio V1</h2>
              <p>Un portfolio réalisé à la fin de ma formation.</p>
              <a
                className={styles.button}
                href="https://portfolio-yohann-faustino.vercel.app/#projects"
                target="_blank"
                rel="noreferrer"
              >
                🚀 Voir le projet en ligne
              </a>
            </div>
          </div>

          <div
            className={styles.animationWrapper}
            style={{ animationDelay: "0.2s" }}
          >
            <div className={styles.card}>
              <h2>📝 Todo App</h2>
              <p>
                Application de gestion de tâches avec filtres, édition et
                persistance locale. Réalisée pour découvrir TypeScript et
                CSS-in-JS.
              </p>
              <a
                className={styles.button}
                href="https://todo-list-typescript-css-in-js-r-ac.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                🚀 Voir le projet en ligne
              </a>
            </div>
          </div>
        </div>

        {/* Colonne droite */}
        <div className={styles.rightColumn}>
          <div
            className={styles.animationWrapper}
            style={{ animationDelay: "0.3s" }}
          >
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>🔐 Santiago / DECP</h2>
              <p className={styles.description}>
                DECP est une application web full-stack, hébergée sur{" "}
                <strong>Vercel</strong> (Frontend) et <strong>Railway</strong>{" "}
                (Backend), développée dans le cadre de ma reconversion
                professionnelle. Elle propose une{" "}
                <strong>authentification sécurisée</strong>, une gestion de
                profils, des commentaires et une interface d’administration.
              </p>

              <div className={styles.section}>
                <h3>🛠️ Backend :</h3>
                <ul>
                  <li>Node.js avec Express</li>
                  <li>Sequelize (ORM) + PostgreSQL</li>
                  <li>bcrypt, JWT, crypto, validator</li>
                  <li>express-rate-limit, Nodemailer</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h3>🎨 Frontend :</h3>
                <ul>
                  <li>React avec Vite</li>
                  <li>JavaScript + Tailwind CSS</li>
                  <li>reCAPTCHA, formulaires dynamiques</li>
                </ul>
              </div>

              <a
                href="https://santiago-plum.vercel.app/"
                className={styles.button}
                target="_blank"
                rel="noreferrer"
              >
                🚀 Voir le projet en ligne
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
