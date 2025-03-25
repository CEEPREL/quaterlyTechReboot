import styles from "../styles/sidebar.module.css";
import { useStoreContext } from "../context/store";
import { useNavigate } from "react-router-dom";
export default function SideBar() {
  const { dispatch, state, scrollToSection } = useStoreContext();
  const navigate = useNavigate();
  const openRegisterForm = () => {
    dispatch({ type: "TOGGLE_SIDE_BAR" });
    navigate("/registration");
  };

  return (
    <div
      className={`${styles.side_bar_wrapper} ${
        state.isSideBarOpen ? styles.show : ""
      }`}
    >
      <div className={styles.side_bar_content}>
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
