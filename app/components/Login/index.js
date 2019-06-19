/**
*
* Login
*
*/

import React from 'react';

import styles from './styles.css';
import validator from 'email-validator';
import classNames from 'classnames';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    errorText: null
  };

  login = () => {
    // work with bind
    const email = this.emailField.value;
    if(!validator.validate(email)){
      // console.log(`${this.emailField.value}!, Is Not An Valid Email Address`);
      this.setState({
        errorText: 'Please Provide A Valid Email'
      });
      return;
    }
    this.setState({
      errorText: null
    })
  }

  // login() {
  //   Work with bind
  //   console.log(`login btn clicked, ${this.emailField.value}`);
  // }
  
  render() {
    const fieldError = this.state.errorText ? (
      <div className={styles.errorMessage}>
        {this.state.errorText}
      </div>
    ): null;
    return (
      <div className={styles.login}>
        <div className={styles.heading}>
            Login with your email
        </div>
        <input 
          className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
          placeholder="Your email"
          ref={f => {this.emailField = f;}}
          type="text"
        />
        {fieldError}
        <div className={styles.actionContainer}>
          <div className={styles.button}>
            cancel
          </div>
          <div 
            className={styles.button}
            // onClick={this.login.bind(this)} // it will work
            onClick={this.login}
          >
            log in
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
