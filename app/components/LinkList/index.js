/**
*
* LinkList
*
*/

import React from 'react';


import styles from './styles.css';
import Link from './../Link/index';
import { Link as LinkButton } from 'react-router';

function LinkList(props) {
  const { links, topicName, children, location } = props;
  const linkNodes = links.map(l => <Link key={l.id} link={l}/>);

  return (
    <div className={styles.linkList}>
      <h2>{topicName}</h2>
      {linkNodes}
      <LinkButton to={`${location.pathname}/${"add"}`}>ADD NEW LINK</LinkButton>
      {children}
    </div>
  );
}

LinkList.propTypes = {
  children: React.PropTypes.element,
  topicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
  })),
}

export default LinkList;
