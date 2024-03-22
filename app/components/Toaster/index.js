import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toaster extends Component {
  static propTypes = {
    timeout: PropTypes.number,
    message: PropTypes.string.isRequired,
    success: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    size: PropTypes.string,
  };
  static defaultProps = {
    size: 'small',
  };
  state = { visible: true };
  componentDidMount() {
    if (this.props.timeout) {
      this.timer = setTimeout(() => {
        this.setState({ visible: false });
      }, this.props.timeout);
    }
  }
  componentWillUnmount() {
    if (this.props.timeout) clearTimeout(this.timer);
  }
  handleDismiss = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    const { message, success, error, warning, size } = this.props;
    if (visible) {
      return (


        // <ToastContainer
        //   className="toaster"
        //   floating
        //   onDismiss={this.handleDismiss}
        //   header={'Message from server!'}
        //   content={message}
        //   positive={success}
        //   negative={error}
        //   warning={warning}
        //   size={size}
        // />

        <Message
          className="toaster"
          floating
          onDismiss={this.handleDismiss}
          header={'Message from server!'}
          content={message}
          positive={success}
          negative={error}
          warning={warning}
          size={size}
        />
      );
    }
    return null;
  }
}

export default Toaster;
