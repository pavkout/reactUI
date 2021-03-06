import React, { Component, PropTypes } from 'react';

export default function themedComponent(ThemedComponent) {
  return class ThemeComponent extends Component {
    // let’s define what’s needed from the `context`
    static contextTypes = {
      theme: PropTypes.object,
      size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
    }

    render() {
      const { theme, size } = this.context;
      // what we do is basically rendering `ComponentToWrap`
      // with an added `theme` prop, like a hook
      return (
        <ThemedComponent {...this.props} theme={theme} size={size} />
      )
    }
  }
}
