/**
*
* Navigation
*
*/

import React from 'react';


import styles from './styles.css';
import AppBar from '../AppBar/index';
import Drawer from '../Drawer/index';

function Navigation({ topics, selectTopic, toggleDrawer, isDrawerOpen }) {
  return (
    <div className={styles.navigation}>
      <AppBar 
        toggleDrawer={toggleDrawer}
      />
      <Drawer 
        items={topics}
        selectItem={selectTopic}
        itemLabelAttr="name"
        itemKeyAttr="name"
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
}

Navigation.propTypes = {
  isDrawerOpen: React.PropTypes.bool.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired,
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired
    })
  ).isRequired,
  selectTopic: React.PropTypes.func.isRequired,
}

export default Navigation;
