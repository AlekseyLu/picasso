import { FC } from "react";
import { CustomLink } from "../../shared/UI/CustomLink/CustomLink";
import styles from "./cartPost.module.css";

interface ICartPost {
  id: number;
  title: string;
  body: string;
}

export const CartPost: FC<ICartPost> = ({ id, title, body }) => (
  <li className={styles.postItem} key={id}>
    <div className={styles.itemBlock}>
      <h2 className={styles.itemTitle}>
        <span className={styles.itemNumber}>{id}. </span>
        {title}
      </h2>
      <div className={styles.itemDescr}>{body}</div>
    </div>
    <CustomLink link={`/posts/${id}`} text="Посмотреть" />
  </li>
);
