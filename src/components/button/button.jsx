import React, {Component, PropTypes} from 'react';
import theme from 'theme';

class Button extends Component {
  render() {
    const { theme } = this.props;
    return (<button style={{ backgroundColor: theme.color }}>Click me</button>);
  }
}

export default theme(Button);
