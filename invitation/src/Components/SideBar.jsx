import styles from "../styles/sidebar.module.css";
import { CloseCircle } from "iconsax-react";
import { useStoreContext } from "../context/store";

export default function SideBar() {
  const { dispatch, state, scrollToSection } = useStoreContext();

  const closeSideBar = () => {
    dispatch({ type: "TOGGLE_SIDE_BAR" });
  };

  const openRegisterForm = () => {
    dispatch({ type: "TOGGLE_REGISTER_FORM" });
    dispatch({ type: "TOGGLE_SIDE_BAR" });
  };

  return (
    <div
      className={`${styles.side_bar_wrapper} ${
        state.isSideBarOpen ? styles.show : ""
      }`}
    >
      <div className={styles.side_bar_content}>
        <button onClick={closeSideBar} className={styles.close_btn}>
          <CloseCircle size="42" color="#e1c340" />
        </button>
        <div className={styles.side_bar_nav_btn}>
          <button onClick={() => scrollToSection("section1")}>About Us</button>
          <button onClick={() => scrollToSection("section2")}>
            Our Audience
          </button>
          <button onClick={() => scrollToSection("section3")}>
            Event Flow
          </button>
          <button onClick={() => scrollToSection("section4")}>
            Our Values
          </button>
          <button onClick={() => scrollToSection("section5")}>
            Contact Us
          </button>
          <button onClick={openRegisterForm}>Register Now</button>
        </div>
      </div>
    </div>
  );
}
