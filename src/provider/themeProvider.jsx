import React, { Component, PropTypes, Children } from 'react'

export default class ThemeProvider extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
  }
  // you must specify what you’re adding to the context
  static childContextTypes = {
    theme: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
  }

  getChildContext() {
   const { theme } = this.props
   return { theme }
  }
  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children)
  }
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired
};
