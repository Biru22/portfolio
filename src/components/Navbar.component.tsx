"use client";

import React, { useState } from "react";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import box from "../assets/box.svg";
import project from "../assets/project.svg";
import contact from "../assets/contact.svg";
import { usePathname, useRouter } from "next/navigation";

import useLanguageStore from "../store/language";

const NavbarComponent = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleHomeClick = () => {
    if (pathname !== "/home") {
      return "/home";
    } else {
      return "/";
    }
  };
  const pathHome = handleHomeClick();

  const handleProjectsClick = () => {
    if (pathname !== "/projects") {
      return "/projects";
    } else {
      return "/";
    }
  };
  const pathProjects = handleProjectsClick();

  const handleAboutClick = () => {
    if (pathname !== "/about") {
      return "/about";
    } else {
      return "/";
    }
  };
  const pathAbout = handleAboutClick();

  //Translate
  const { español, english } = useLanguageStore();
  const [inputChecked, setInputChecked] = useState(false);
  const handleToggle = () => {
    if (inputChecked) {
      english("");
    } else {
      español("");
    }
  };

  return (
    <div className={styles.navbar}>
      <Link
        href={pathHome}
        className={`${styles.homebutton} ${
          pathname === "/home" ? styles.activeHome : ""
        }`}
      >
        <Image
          src={box}
          alt="Home"
          priority
          style={{ opacity: pathname !== "/home" ? 1 : 0 }}
        />
      </Link>
      <Link
        href={pathProjects}
        className={`${styles.navbutton} ${
          pathname === "/projects" ? styles.active : ""
        }`}
      >
        <Image src={project} alt="Projects" priority />
      </Link>
      <Link
        href={pathAbout}
        className={`${styles.navbutton} ${
          pathname === "/about" ? styles.active : ""
        }`}
      >
        <Image src={contact} alt="Contact" priority />
      </Link>
      <div className={styles.toggleDiv}>
        <input
          type="checkbox"
          id="translate"
          className={styles.offscreen}
          checked={inputChecked}
          onChange={() => setInputChecked(!inputChecked)}
          onClick={handleToggle}
        />
        <label htmlFor="translate" className={styles.switch}></label>
      </div>
    </div>
  );
};

export default NavbarComponent;
