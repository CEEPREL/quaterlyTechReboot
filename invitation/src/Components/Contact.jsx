import { Call, MessageText } from "iconsax-react";
import styles from "../styles/contact.module.css";
import { useStoreContext } from "../context/store";

export default function Contact() {
  const { sectionsRef } = useStoreContext();

  return (
    <div className={styles.contact_container} ref={sectionsRef.section5}>
      <div className={styles.contact_content}>
        <h1 className={styles.contact_header}>
          For inquiries, please contact:
        </h1>
        <p className={styles.contact}>
          <Call size="32" color="#e1c340" />{" "}
          <a href="tel:+2347010842785">Ayo 07010842785</a>
        </p>
        <p className={styles.contact}>
          <Call size="32" color="#e1c340" />{" "}
          <a href="tel: +2347069014391">AB Ceeprel 07069014391</a>
        </p>
        <p className={styles.contact}>
          <MessageText size="32" color="#e1c340" />{" "}
          <a href="mailto:event@quarterlytechreboot.com.ng">
            event@quarterlytechreboot.com.ng
          </a>
        </p>
      </div>
    </div>
  );
}
