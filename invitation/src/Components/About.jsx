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
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className={styles.about_content}>
        <h1 className={styles.about_header}>
          Welcome to Quarterly Tech Reboot
        </h1>
        <p className={styles.about_description}>
          The world is constantly evolving, and so is the tech industry. Whether
          you are a student just beginning your journey, a professional looking
          to transition into tech, or someone seeking to elevate your career to
          the next level, Quarterly Tech Reboot is designed with you in mind.
          Our event is a dynamic, hybrid experience that rotates across
          different communities in Nigeria, bringing together individuals from
          various backgrounds who share one common goal: growth.
        </p>
        <p className={styles.about_description2}>
          At Quarterly Tech Reboot, we believe that there is untapped,
          world-class talent in communities all over Nigeria. However, many of
          these individuals remain underrepresented or underutilized in the
          broader tech landscape. Our mission is to change that by creating
          opportunities for visibility, networking, and personal growth. We help
          individuals position themselves for better career opportunities by
          offering mentorship, guidance, and actionable advice.
        </p>
        <p className={styles.about_description2}>
          This event brings together leaders from the tech world: seasoned
          developers, designers, data scientists, entrepreneurs, hiring
          managers, and government officials. They will share valuable insights
          and experiences on navigating the ever-evolving tech industry. Whether
          you're a student exploring your career options, a professional looking
          to pivot into tech, or an industry veteran wanting to learn about
          emerging trends, we have something for you.
        </p>
        <p className={styles.about_description2}>
          You'll gain access to tailored workshops, hands-on activities, and
          networking sessions that will help you build the skills and
          connections needed to succeed in today’s fast-paced tech world. We
          understand the challenges of career transitions, and we are here to
          help you navigate those challenges, whether you're learning to code,
          trying to break into product management, or seeking a career as a data
          analyst.
        </p>
        <p className={styles.about_description2}>
          Join us at Quarterly Tech Reboot, where innovation, collaboration, and
          opportunity come together to help you achieve your professional goals.
          Whether you’re looking for your next big career move or want to
          sharpen your skills in the tech industry, we are here to help you make
          that leap. The future of tech is bright, and we want you to be part of
          it.
        </p>
      </div>
    </motion.div>
  );
}
