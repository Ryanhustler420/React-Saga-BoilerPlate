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

  static propTypes = {
   addLink : React.PropTypes.func.isRequired,
   topicName: React.PropTypes.string.isRequired, 
  };

  state = {
    urlError: '',
    descriptionError: '',
  };

  onAdd = () => {
    // getting the ref values
    const url = this.url.value ();
    const description = this.description.value ();
    let urlError = null;
    let descriptionError = null;

    const pettern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (!pettern.test(url)) {
      urlError = 'Please provide a valid URL';
    }

    if(!description) {
      descriptionError = 'Please provide a valid description';
    }

    this.setState({
      urlError,
      descriptionError,
    })

    if(urlError || descriptionError){
      return;
    }

    this.props.addLink({
      url,
      description,
      topicName: this.props.topicName,
    })
  };

  render () {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>
            Add a link
          </div>

          <TextInput
            errorText={this.state.urlError}
            ref={f => (this.url = f)}
            placeholder="URL"
            className={styles.input}
          />
          <TextInput
            errorText={this.state.descriptionError}
            ref={f => (this.description = f)}
            placeholder="Description"
            className={styles.input}
          />

          <div className={styles.actionContainer}>
            <div className={styles.button} onClick={this.props.cancelLogin}>
              cancel
            </div>
            <div className={styles.button} onClick={this.onAdd}>
              add
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
