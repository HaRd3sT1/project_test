import React from 'react';
import styles from './Style.module.scss';
import screen_search from "../../assets/img/icons/screen_search.svg"

const Index = () => {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.noResult}>
        <img src={screen_search} alt="" />
        <p>Search results will appear here</p>
      </div>
    </div>
  );
};

export default Index;
