/**
*
* LinkList
*
*/

import React from 'react';


import styles from './styles.css';
import Link from './../Link/index';

function LinkList({ links, routeTopicName }) {

  const linkNodes = links.map(l => <Link key={l.id} link={l}/>);

  return (
    <div className={styles.linkList}>
      {routeTopicName}
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  routeTopicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
  })),
}

export default LinkList;
