import React, { ReactNode } from 'react';
import NavbarComponent from '../components/Navbar.component';
import PaintComponent from '../components/Paint.component';
import styles from '../styles/grid.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <div className={styles.layout}>
        <div className={styles.page}>
          <div>
            <PaintComponent />
          </div>
          <div className={styles.folderPage}>
            {children}
          </div>
        </div>
        <div className={styles.nav}>
          <NavbarComponent />
        </div>
      </div>
  );
};

export default Layout;
