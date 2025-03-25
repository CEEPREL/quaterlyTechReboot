import Header from "../Components/Header";
import styles from "../styles/pagelayout.module.css";

const PageLayout = ({ children, className = "" }) => {
  return (
    <div className={`${styles.layout_main} ${className}`}>
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
