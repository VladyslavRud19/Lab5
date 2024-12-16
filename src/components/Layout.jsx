import React from 'react';
import Navigation from './Navigation';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
