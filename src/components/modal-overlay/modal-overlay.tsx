import styles from "./modal-overlay.module.css";
// types
import { TModalOverlayProps } from "../../utils/types";

export default function ModalOverlay({
  closeModal,
}: TModalOverlayProps): JSX.Element {
  return <div className={styles.overlay} onClick={closeModal}></div>;
}
