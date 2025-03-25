import styles from "../styles/herosection.module.css";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context/store";

import heroImage from "/images/image1.jpg";

const HeroImageSection = () => {
  const { dispatch } = useStoreContext();

  const navigate = useNavigate();

  const openRegisterForm = () => {
    dispatch({ type: "TOGGLE_REGISTER_FORM" });
    navigate("/registration");
  };

  return (
    <div className={styles.hero_container}>
      <div className={styles.image_wrapper}>
        <img
          src={heroImage}
          alt='Hero Background'
          className={styles.hero_image}
        />
        <div className={styles.text_overlay}>
          <h1>Quarterly Tech Reboot</h1>
          <p>
            A rotational hybrid tech event happening across Nigeria— Coming soon
            to your community!
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
