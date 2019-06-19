/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import TextInput from './../TextInput/index';

class LinkForm extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {};

  render () {
    const fieldError = () =>
      this.state.errorText
        ? <div className={styles.errorMessage}>
            {this.state.errorText}
          </div>
        : null;

    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>
            Add a link
          </div>

          <TextInput placeholder="URL" className={styles.input} />
          <TextInput placeholder="Description" className={styles.input} />

          <div className={styles.actionContainer}>
            <div className={styles.button} onClick={this.props.cancelLogin}>
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.login}
            >
              add
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
