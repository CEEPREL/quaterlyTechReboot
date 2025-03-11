import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/herosection.module.css";
import Header from "./Header";

const HeroImageSection = () => {
  const heroImagesArray = useMemo(
    () => ["/images/image1.jpg", "/images/image2.jpg"],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImagesArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImagesArray.length]);

  return (
    <div className={styles.hero_container}>
      <Header />
      <div className={styles.image_wrapper}>
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentIndex}
            src={heroImagesArray[currentIndex]}
            alt='Hero Background'
            className={styles.hero_image}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroImageSection;
