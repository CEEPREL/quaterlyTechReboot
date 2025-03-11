import styles from "../styles/sidebar.module.css";
import { CloseCircle } from "iconsax-react";
import { useStoreContext } from "../context/store";

export default function SideBar() {
  const { dispatch, state } = useStoreContext();

  const closeSideBar = () => {
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
          <CloseCircle size='42' color='#e1c340' />
        </button>
        <div className={styles.side_bar_nav_btn}>
          <button>Who we are</button>
          <button>What we do</button>
          <button>Sign up</button>
          <button>contact</button>
        </div>
      </div>
    </div>
  );
}
