import styles from "../styles/header.module.css";
import { HambergerMenu } from "iconsax-react";
import { useStoreContext } from "../context/store";

export default function Header() {
  const { dispatch } = useStoreContext();

  const OpenSideBar = () => {
    dispatch({ type: "TOGGLE_SIDE_BAR" });
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <h1 className={styles.logo_text}>
          <span className={styles.integral_sign}>∫</span>
          Quarterly Tech Reboot
        </h1>
        <button className={styles.hamburger_button} onClick={OpenSideBar}>
          <HambergerMenu size="42" color="#E1C340" />
        </button>
      </div>
    </header>
  );
}
