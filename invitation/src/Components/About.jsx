import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useStoreContext } from "../context/store";
import styles from "../styles/about.module.css";

export default function About() {
  const { sectionsRef } = useStoreContext();
  const isInView = useInView(sectionsRef.section1, {
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={sectionsRef.section1}
      className={styles.about_container}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className={styles.about_content}>
        <h1 className={styles.about_header}>About Us</h1>
        <p className={styles.about_description}>
          Quarterly Tech Reboot is a hybrid event that rotates across different
          communities in Nigeria. We believe world-class talent exists within
          these communities, often underproductive, and we are committed to
          helping individuals position themselves for better opportunities
          through networking, visibility, and adaptability.
        </p>
        <p className={styles.about_description2}>
          Our event brings together industry leaders, hiring managers,
          government officials, and tech experts to share their experiences and
          insights with job seekers, career changers, and professionals looking
          to grow. Whether you’re a developer, designer, data scientist, or
          digital professional navigating a career transition or working on a
          new idea, we provide the right guidance, mentorship, and networking
          opportunities to help you gain industry relevance and secure better
          opportunities.
        </p>
      </div>
    </motion.div>
  );
}
