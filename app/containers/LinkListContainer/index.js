/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';
import { requestLinks } from './actions';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  static propTypes = {
    routeTopicName: React.PropTypes.string.isRequired,
    requestLinks: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestLinks(this.props.routeTopicName);
  }
  
  componentWillReceiveProps(newProps) {
    if(newProps.routeTopicName !== this.props.routeTopicName){
      this.props.requestLinks(this.props.routeTopicName);
    }
  }
  
  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (topicName) => dispatch(requestLinks(topicName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
