/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import classNames from 'classnames';

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
          <input
            className={classNames (styles.input, {
              [styles.inputError]: this.state.errorText,
            })}
            placeholder="URL"
            ref={f => {
              this.urlField = f;
            }}
            type="text"
          />
          <input
            className={classNames (styles.input, {
              [styles.inputError]: this.state.errorText,
            })}
            placeholder="Description"
            ref={f => {
              this.descriptionField = f;
            }}
            type="text"
          />
          {/* {fieldError} */}
          <div className={styles.actionContainer}>
            <div className={styles.button} onClick={this.props.cancelLogin}>
              cancel
            </div>
            <div
              className={styles.button}
              // onClick={this.login.bind(this)} // it will work
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
