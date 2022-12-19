import styles from "./preloader.module.css";
import preloader from "../../images/preloader.svg";

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <img
        className={styles.preloader_image}
        src={preloader}
        alt="Загрузка..."
      />
    </div>
  );
}
