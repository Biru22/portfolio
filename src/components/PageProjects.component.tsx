"use client";

import React from "react";
import style from "../styles/folders.module.scss";
import styles from "../styles/project.module.scss";
import Image from "next/image";
import capture1 from "../assets/capture1.webp";
import capture2 from "../assets/capture2.webp";
import html5 from "../assets/svgtools/html5.svg";
import css from "../assets/svgtools/css.svg";
import javascript from "../assets/svgtools/javascript.svg";
import scss from "../assets/svgtools/scss.svg";
import typescript from "../assets/svgtools/typescript.svg";
import angular from "../assets/svgtools/angular.svg";
import firebase from "../assets/svgtools/firebase.svg";
import FolderComponent from "../components/Folder.component";
import useLanguageStore from "../store/language";

const PageProjects = () => {
  const projects1 = useLanguageStore((state) => state.projects1);

  return (
    <div className={style.folder}>
      <FolderComponent />
      <h1 className={styles.h1}>{projects1}</h1>
      <div className={styles.learn}>
        <div>
          <a
            className={styles.a}
            href="https://conversor-wisc4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.imageCard}>
              <Image
                className={styles.projectImage}
                src={capture1}
                alt="Page Converter Wisc-4"
                width={350}
                height={300}
                priority
              />
            </div>
            <div className={styles.card}>
              <p className={styles.p}>Conversor de puntuaciones Wisc-4</p>
              <div className={styles.projectSVG}>
                <div>
                  <Image src={html5} alt="HTML" />
                </div>
                <div>
                  <Image src={css} alt="CCS" />
                </div>
                <div>
                  <Image src={javascript} alt="JavaScript" />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            className={styles.a}
            href="https://web-psicopedagogia.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.imageCard}>
              <Image
                className={styles.projectImage}
                src={capture2}
                alt="Page Converter Wisc-4"
                width={350}
                height={300}
                priority
              />
            </div>
            <div className={styles.card}>
              <p className={styles.p}>Camino al aprendizaje</p>
              <div className={styles.projectSVG}>
                <div>
                  <Image src={html5} alt="HTML" />
                </div>
                <div>
                  <Image src={scss} alt="SCSS" />
                </div>
                <div>
                  <Image src={typescript} alt="TypeScript" />
                </div>
                <div>
                  <Image src={angular} alt="Angular" />
                </div>
                <div>
                  <Image src={firebase} alt="Firebase" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageProjects;
