import styles from "../styles/values.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import { useStoreContext } from "../context/store";

const Values = () => {
  const { sectionsRef } = useStoreContext();
  const isInView = useInView(sectionsRef.section4, {
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className={styles.value_container}
      ref={sectionsRef.section4}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className={styles.value_content}>
        <header className={styles.value_header}>OUR VALUES & GUIDELINES</header>
        <ul className={styles.value_list_container}>
          <h2>Our Core Values</h2>
          <li>
            <span></span> We uphold honesty, transparency, and respect in all
            interactions.
          </li>
          <li>
            <span></span> We foster a culture of learning, mentorship, and
            support within the tech ecosystem.
          </li>
          <li>
            <span></span> We embrace change, encourage creativity, and provide
            opportunities for career advancement.
          </li>
          <li>
            <span></span> We welcome people from all backgrounds, ensuring an
            open and respectful environment.
          </li>
          <li>
            <span></span> We strive for high-quality discussions, meaningful
            connections, and tangible career benefits.
          </li>
        </ul>
        <div>
          <ul className={styles.value_list_container}>
            <h2>Content and Marketing Guidelines</h2>
            <li>
              <span></span> Content should be relevant and provide actionable
              insights, case studies, or hands-on solutions.
            </li>
            <li>
              <span></span> While sponsors can showcase their brand, content
              should focus on industry knowledge and skills.
            </li>
            <li>
              <span></span> Sessions should be interactive, with opportunities
              for Q&A and audience participation.
            </li>
          </ul>
          <ul className={styles.value_list_container}>
            <h2>Brand Exposure and Product Showcase</h2>
            <li>
              <span></span> Sponsors can present their products through
              designated brand booths or live demos.
            </li>
            <li>
              <span></span> Promotional materials should align with the event’s
              theme and provide real value.
            </li>
            <li>
              <span></span> Digital sponsors will have opportunities for product
              placements.
            </li>
          </ul>
          <ul className={styles.value_list_container}>
            <h2>Speaker and Panelist Expectations</h2>
            <li>
              <span></span> Speakers should maintain a professional appearance.
            </li>
            <li>
              <span></span> Presentations should be clear and concise.
            </li>
            <li>
              <span></span> Sessions must adhere to the allocated time slots.
            </li>
            <li>
              <span></span> Remote speakers should ensure a stable internet
              connection and clear audio.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Values;
