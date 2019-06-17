/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import {requestTopics, selectTopic} from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestTopics: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestTopics();
  }

  render() {
    return (
      <Navigation {...this.props}/>
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  // This function Attach These Function To PRops And We Can
  // Call This From `Prop.selectTopic()` like this
  // NOTE:- Navigation Component Can Also Access This Function
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: (topic) => dispatch(selectTopic(topic))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
