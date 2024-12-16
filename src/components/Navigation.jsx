import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/">Про мене</Link></li>
        <li><Link to="/projects">Проєкти</Link></li>
        <li><Link to="/skills">Навички</Link></li>
        <li><Link to="/contacts">Контакти</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
