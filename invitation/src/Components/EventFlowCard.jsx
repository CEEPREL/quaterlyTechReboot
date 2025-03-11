import styles from "../styles/flowcard.module.css";

export default function EventFlowCard({ cardContent }) {
  return (
    <div className={styles.card_container}>
      {cardContent.map((content) => (
        <div key={content.title} className={styles.card}>
          <div className={styles.card_image}>{content.image}</div>
          <div className={styles.card_text_content}>
            <h1 className={styles.card_header}>{content.title}</h1>
            <p className={styles.card_description}>{content.description}</p>
            <ul>
              {content.points.map((point) => (
                <li key={point} className={styles.card_list}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
