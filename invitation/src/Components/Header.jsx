import styles from "../styles/header.module.css";
import { HambergerMenu, CloseCircle } from "iconsax-react";
import { useStoreContext } from "../context/store";

export default function Header() {
  const { dispatch } = useStoreContext();

  const OpenSideBar = () => {
    dispatch({ type: "TOGGLE_SIDE_BAR" });
  };

  return (
    <header>
      <div className={styles.header_content}>
        <h1 className='logo-text'>
          Quarterly <span className='highlight'>Tech Event</span>
        </h1>
        <button onClick={OpenSideBar}>
          <HambergerMenu size='42' color='#E1C340' />
        </button>
      </div>
    </header>
  );
}
