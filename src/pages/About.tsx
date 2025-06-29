import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>À propos de moi</h1>
      <div className={styles.paragraph}>
        Je m'appelle Yohann Faustino, j'ai 37 ans et je suis l'heureux papa de
        deux enfants merveilleux. Je travaille actuellement dans la grande
        distribution, mais j'ai décidé d'entamer une reconversion
        professionnelle pour trouver un métier plus épanouissant, valorisant et
        compatible avec ma vie de famille.
        <p>
          Ce qui me plaît le plus dans ce nouveau métier, c'est la créativité
          qu'il demande et la satisfaction d'avoir résolu un problème.
        </p>
        <p>
          Le monde du développement est passionnant et en constante évolution,
          ce qui me motive à apprendre sans cesse.
        </p>
        <p>
          Bien que mes expériences professionnelles précédentes n'aient pas de
          lien direct avec le développement, elles m'ont permis d'acquérir des
          compétences précieuses : travail en équipe, communication, sérieux et
          curiosité.
        </p>
        <p>Ces qualités seront des atouts majeurs dans mon futur poste.</p>
      </div>
      <p className={styles.paragraph}>
        Ce portfolio présente mes projets, compétences et expériences. N'hésitez
        pas à me contacter pour collaborer !
      </p>
    </section>
  );
}
