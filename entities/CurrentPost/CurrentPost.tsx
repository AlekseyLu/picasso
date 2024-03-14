import { useParams } from "react-router-dom";
import { BackButton } from "../../shared/UI/BackButton/BackButton";
import { useGetCurrentPostQuery } from "../../shared/api/postsApi";
import styles from "./currentpost.module.css";

export const CurrentPost = () => {
  const { id } = useParams();
  const { data: currentPost, isLoading } = useGetCurrentPostQuery(id);

  if (isLoading) return "Loading...";

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {currentPost.id}. {currentPost.title}
      </h2>
      <p className={styles.text}>{currentPost.body}</p>
      <BackButton text="Вернуться" />
    </div>
  );
};
