import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useStoreContext } from "../context/store";
import AudiencePieChart from "./AudiencePieChart";
import styles from "../styles/audience.module.css";

const Audience = () => {
  const { sectionsRef } = useStoreContext();
  const isInView = useInView(sectionsRef.section2, {
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className={styles.audience_container}
      ref={sectionsRef.section2}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className={styles.audience_content}>
        <h1 className={styles.audience_header}>KNOW OUR AUDIENCE</h1>
        <p className={styles.audience_description}>
          All our audience are tech enthusiasts.
        </p>
        <AudiencePieChart />
      </div>
    </motion.div>
  );
};

export default Audience;
