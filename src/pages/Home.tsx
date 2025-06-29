// src/pages/Home.tsx
import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Bienvenue sur mon Portfolio</h1>
      <div className={styles.subtitle}>
      <p>
        Développeur web en reconversion passionné, j'aime créer des solutions
        simples, efficaces et belles. Après plusieurs années dans la grande
        distribution, je me suis lancé dans le développement pour trouver un
        métier plus épanouissant et compatible avec ma vie de famille.
      </p>
      <p>
        Découvrez mes projets, mes compétences, et n'hésitez pas à me contacter
        pour échanger !
      </p>
      </div>
    </section>
  );
};

export default Home;
