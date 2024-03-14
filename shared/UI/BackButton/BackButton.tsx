import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./backButton.module.css";

interface IBackButton {
  text: string;
}

export const BackButton: FC<IBackButton> = ({ text }) => {
  const nav = useNavigate();

  const handleBackButton = () => nav(-1);

  return (
    <button className={styles.backButton} onClick={handleBackButton}>
      {text}
    </button>
  );
};
