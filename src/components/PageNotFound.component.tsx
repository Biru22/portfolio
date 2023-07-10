'use client'

import styles from "../styles/PageNotFound.module.scss";
import useLanguageStore from "../store/language";

const PageNotFoundComponent = () => {

  const notFound1 = useLanguageStore((state) => state.notFound1);
  const notFound2 = useLanguageStore((state) => state.notFound2);
  
  return (
    <div className={styles.page404Container}>
      <h1 className={styles.h1}>
        {notFound1}
        <br />
        <span>{notFound2}</span>
      </h1>
      <section className={styles.errorContainer}>
        <span className={styles.four}>
          <span className={styles.screenReaderText}></span>
        </span>
        <span className={styles.zero}>
          <span className={styles.screenReaderText}></span>
        </span>
        <span className={styles.four}>
          <span className={styles.screenReaderText}></span>
        </span>
      </section>
    </div>
  );
};

export default PageNotFoundComponent;
