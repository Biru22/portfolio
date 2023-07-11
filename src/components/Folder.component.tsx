import React from "react";
import style from "../styles/folder.module.scss";
import Link from "next/link";

const FolderComponent = () => {
  return (
    <div>
      <div className={style.x}>
        <Link href="/" className={style.buttonx} aria-label="Close the window">
          <svg
            className={style.svgexit}
            height="15"
            viewBox="0 -960 960 960"
            width="15"
          >
            <path d="M480-480q0-91 64.5-155.5T700-700q91 0 155.5 64.5T920-480H480ZM260-260q-91 0-155.5-64.5T40-480h440q0 91-64.5 155.5T260-260Zm220-220q-91 0-155.5-64.5T260-700q0-91 64.5-155.5T480-920v440Zm0 440v-440q91 0 155.5 64.5T700-260q0 91-64.5 155.5T480-40Z" />
          </svg>
        </Link>
      </div>
      <hr className={style.hr} />
    </div>
  );
};

export default FolderComponent;
