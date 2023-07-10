"use client";
import React from "react";

//Importación desde estilo distinto, orientado a paginas que ya tengan una scrollbar 
import style from "../../styles/page.module.scss";
//
import styles from "../../styles/home.module.scss";
import Image from "next/image";
import html5 from "../../assets/svgtools/html5.svg";
import css from "../../assets/svgtools/css.svg";
import scss from "../../assets/svgtools/scss.svg";
import javascript from "../../assets/svgtools/javascript.svg";
import typescript from "../../assets/svgtools/typescript.svg";
import angular from "../../assets/svgtools/angular.svg";
import react from "../../assets/svgtools/react.svg";
import next from "../../assets/svgtools/next.svg";
import node from "../../assets/svgtools/node.svg";
import express from "../../assets/svgtools/express.svg";
import python from "../../assets/svgtools/python.svg";
import fastapi from "../../assets/svgtools/fastapi.svg";
import git from "../../assets/svgtools/git.svg";
import github from "../../assets/svgtools/github.svg";
import mysql from "../../assets/svgtools/mysql.svg";
import firebase from "../../assets/svgtools/firebase.svg";
import user from "../../assets/user.svg";
import on from "../../assets/on.svg";
import FolderComponent from "../../components/Folder.component";
import useLanguageStore from "../../store/language";
import Link from "next/link";
import scrollstyles from '../../styles/scrollstyles.module.scss'

const PageHome = () => {
  const home1 = useLanguageStore((state) => state.home1);
  const home2 = useLanguageStore((state) => state.home2);
  const home3 = useLanguageStore((state) => state.home3);
  const home4 = useLanguageStore((state) => state.home4);
  const home5 = useLanguageStore((state) => state.home5);

  return (
    <div className={`${style.folder} ${scrollstyles.scrollbar}`}>
      <FolderComponent />
      <div>
        <h1 className={styles.name}>Mauricio Gomez</h1>
        <h2 className={styles.h2}>{home1}</h2>
        <p className={styles.p}>{home2}</p>
        <p className={styles.p}>{home3}</p>
        <p className={styles.p}>{home4}</p>
      </div>
      <div>
        <h1 className={styles.title}>{home5}</h1>
        <div className={styles.tools}>
          <div>
            <Image src={html5} alt="HTML" />
            <p className={styles.icon}>HTML</p>
          </div>
          <div>
            <Image src={css} alt="CSS" />
            <p className={styles.icon}>CSS</p>
          </div>
          <div>
            <Image src={scss} alt="SCSS" />
            <p className={styles.icon}>SCSS</p>
          </div>
          <div>
            <Image src={javascript} alt="JavaScript" />
            <p className={styles.icon}>JavaScript</p>
          </div>
          <div>
            <Image src={typescript} alt="TypeScript" />
            <p className={styles.icon}>TypeScript</p>
          </div>
          <div>
            <Image src={angular} alt="Angular" />
            <p className={styles.icon}>Angular</p>
          </div>
          <div>
            <Image src={react} alt="React" />
            <p className={styles.icon}>React</p>
          </div>
          <div>
            <Image src={next} alt="Next" />
            <p className={styles.icon}>Next</p>
          </div>
          <div>
            <Image src={node} alt="Node" />
            <p className={styles.icon}>Node</p>
          </div>
          <div>
            <Image src={express} alt="Express" />
            <p className={styles.icon}>Express</p>
          </div>
          <div>
            <Image src={python} alt="Phyton" />
            <p className={styles.icon}>Phyton</p>
          </div>
          <div>
            <Image src={fastapi} alt="FastAPI" />
            <p className={styles.icon}>FastAPI</p>
          </div>
          <div>
            <Image src={git} alt="Git" />
            <p className={styles.icon}>Git</p>
          </div>
          <div>
            <Image src={github} alt="Github" />
            <p className={styles.icon}>Github</p>
          </div>
          <div>
            <Image src={mysql} alt="MySQL" />
            <p className={styles.icon}>MySQL</p>
          </div>
          <div>
            <Image src={firebase} alt="Firebase" />
            <p className={styles.icon}>Firebase</p>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.user}>
        <div className={styles.left}>
          <a className={styles.a}
            href="https://www.linkedin.com/in/mauricio-exequiel-miranda-gomez-629037270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={user} alt="User" />
          </a>
          <p>User</p>
        </div>
        <div className={styles.right}>
          <Link href='/404' className={styles.off}>
          <Image src={on} alt="On/Off" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
