/**
*
* IconButton
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.css';

function IconButton ({ onClick, icon }) {
  return (
    <div className={styles.iconButton} onClick={onClick}>
      <FontAwesome className={styles.icon} name={icon} />
    </div>
  );
}

IconButton.propTypes = {
  icon: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default IconButton;
