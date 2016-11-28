import React, {Component, PropTypes} from 'react';
import ThemedComponent from 'themedComponent';

class Button extends Component {
  render() {
    const { theme } = this.props;
    return (<button style={{ backgroundColor: theme.color }}>Click me</button>);
  }
}

export default ThemedComponent(Button);
