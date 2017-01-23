import { Component, PropTypes, Children } from 'react';

/**
 * This is a base class that all UI components must inherit from, if they need
 * theming capabilities. It is responsible to add specific props for the theming
 * and to have the basic functionality to get the class names from it.
 *
 * NOTE Please do NOT use this class to add generic functionality to your components.
 */
export default class ThemeProvider extends Component {
  static propTypes = {
    /**
     * The name of theme we want, each component can have a default value
     */
    theme: PropTypes.object,
    /**
     * Set the size medium or large, each component can have a default value
     */
    size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ]).isRequired
  }

  static defaultProps = {
    theme: {},
    size: 'medium'
  }

  // you must specify what you’re adding to the context
  static childContextTypes = {
    theme: PropTypes.object.isRequired,
    size: PropTypes.string.isRequired
  }

  getChildContext() {
    const { theme, size } = this.props;

    return { theme, size };
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children)
  }
}
