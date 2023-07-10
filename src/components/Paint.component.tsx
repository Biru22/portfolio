'use client'

import React from "react";
import Image from 'next/image';
import paint from '../assets/paint.svg'
import styles from '../styles/buttons.module.scss'
import Link from 'next/link';
import { usePathname } from "next/navigation";

const PaintComponent = () => {

  const pathname = usePathname();

  const handlePaintClick = () => {
    if (pathname !== '/paint') {
      return '/paint';
    } else {
      return '/';
    }
  };
  const pathPaint = handlePaintClick();

  return (
      <Link className={styles.button} href={pathPaint}>
        <Image src={paint} alt='Paint' priority/>
      </Link>
  );
}

export default PaintComponent;
