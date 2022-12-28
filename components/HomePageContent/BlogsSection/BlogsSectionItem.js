import Image from "next/image";

import styles from "./BlogsSectionItem.module.css";

function BlogsSectionItem(props) {
  const { image, date, author, title, text } = props.blog;

  const dateModified = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <Image width={411} height={429} src={image} alt="Blog Image" />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.date}>{dateModified}</p>
          <p className={styles.author}>{author}</p>
        </div>
        <a href="#" className={styles.title}>
          {title}
        </a>
        <p className="section__text-p">{text}</p>
        <div className={styles.bottom}>
          <a href="#" className={styles["bottom__link"]}>
            Read More
          </a>
        </div>
      </div>
    </li>
  );
}

export default BlogsSectionItem;
