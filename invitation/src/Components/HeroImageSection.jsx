import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/herosection.module.css";
import Header from "./Header";
import { useStoreContext } from "../context/store";
const heroImagesArray = ["/images/image1.jpg", "/images/image2.jpg"];

const HeroImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { dispatch } = useStoreContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImagesArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    heroImagesArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const openRegisterForm = () => {
    dispatch({ type: "TOGGLE_REGISTER_FORM" });
  };

  return (
    <div className={styles.hero_container}>
      <Header />
      <div className={styles.image_wrapper}>
        <motion.img
          key={currentIndex}
          src={heroImagesArray[currentIndex]}
          alt='Hero Background'
          className={styles.hero_image}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className={styles.text_overlay}>
          <h1>Quarterly Tech Reboot</h1>
          <p>
            is a rotational hybrid tech event happening across Nigeria—
            <br />
            coming soon to your community!
          </p>
          <button className={styles.register_button} onClick={openRegisterForm}>
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImageSection;
