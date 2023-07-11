"use client";

import FolderComponent from "./Folder.component";
import style from "../styles/folders.module.scss";
import styles from "../styles/about.module.scss";
import Image from "next/image";
import linkedin from "../assets/linkedin.svg";
import cv from "../assets/cv.svg";
import outlook from "../assets/outlook.svg";
import gmail from "../assets/gmail.svg";
import useLanguageStore from "../store/language";

const PageAbout = () => {
  const about1 = useLanguageStore((state) => state.about1);
  const about2 = useLanguageStore((state) => state.about2);
  const about3 = useLanguageStore((state) => state.about3);
  const about4 = useLanguageStore((state) => state.about4);

  return (
    <div className={style.folder}>
      <FolderComponent />
      <div className={styles.about}>
        <h1 className={styles.title}>{about1}</h1>
        <p className={styles.p}>{about2}</p>
        <p className={styles.p}>{about3}</p>
        <h1 className={styles.title}>{about4}</h1>
        <div>
          <a
            href="https://www.linkedin.com/in/mauricio-exequiel-miranda-gomez-629037270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} alt="LinkedIn" />
          </a>
          <a
            className={styles.cv}
            href="https://www.linkedin.com/in/mauricio-exequiel-miranda-gomez-629037270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={cv} alt="Curriculum Vitae" />
          </a>
        </div>
        <p className={styles.email}>
          <Image src={outlook} alt="Email" /> mauricio.m.gomez@outlook.com
        </p>
        <p className={styles.email}>
          <Image src={gmail} alt="Gmail" /> mauricio.e.m.gomez@gmail.com
        </p>
      </div>
    </div>
  );
};

export default PageAbout;
