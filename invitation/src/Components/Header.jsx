import styles from "../styles/header.module.css";
import { HambergerMenu, CloseCircle } from "iconsax-react";
import { useStoreContext } from "../context/store";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { state, dispatch } = useStoreContext();
  const location = useLocation();
  const navigate = useNavigate();

  const OpenSideBar = () => {
    dispatch({ type: "TOGGLE_SIDE_BAR" });
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <h1 className={styles.logo_text} onClick={() => navigate("/")}>
          <span className={styles.integral_sign}>∫</span>
          Quarterly Tech Reboot
        </h1>
        {location.pathname !== "/registration" && (
          <button className={styles.hamburger_button} onClick={OpenSideBar}>
            {!state.isSideBarOpen ? (
              <HambergerMenu size='42' color='#E1C340' />
            ) : (
              <CloseCircle size='42' color='#e1c340' />
            )}
          </button>
        )}
      </div>
    </header>
  );
}
