import PageLayout from "../Layout/PageLayout";
import RegisterModal from "../Components/RegisterModal";
import styles from "../styles/registrationpage.module.css";

const RegisterPage = () => {
  return (
    <PageLayout className={styles.registrationLayout}>
      <RegisterModal />
    </PageLayout>
  );
};

export default RegisterPage;
