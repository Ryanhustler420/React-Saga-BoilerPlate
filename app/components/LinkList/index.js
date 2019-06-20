/**
*
* LinkList
*
*/

import React from 'react';


import styles from './styles.css';
import Link from './../Link/index';
import IconButton from '../IconButton';

function LinkList(props) {
  const { links, topicName, children, startAdd, updateVote } = props;
  const linkNodes = links.map(l => <Link onClick={updateVote} key={l.id} link={l}/>);

  return (
    <div className={styles.linkList}>
      <h2>{topicName}</h2>
      {linkNodes}
      <IconButton
        onClick={() => startAdd(topicName)}
        icon="plus"
        buttonClass={styles.button}
        iconClass={styles.icon}
      />
      {children}
    </div>
  );
}

LinkList.propTypes = {
  updateVote: React.PropTypes.func.isRequired,
  startAdd: React.PropTypes.func.isRequired,
  children: React.PropTypes.element,
  topicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
  })),
}

export default LinkList;
