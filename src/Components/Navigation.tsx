import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
interface Props {}

const Navigation = (props: Props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav className={styles.nav_menu}>
      <ul className={styles.nav_menu_items}>
        <li className={styles.nav_text}>
          <NavLink to="/" exact activeClassName={styles.active}>
            <span>Home</span>
          </NavLink>
        </li>
        <li className={styles.nav_text}>
          <NavLink to="/about" activeClassName={styles.active}>
            <span>About</span>
          </NavLink>
        </li>
        <li className={styles.nav_text}>
          <NavLink to="/projects" activeClassName={styles.active}>
            <span>Projects</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
