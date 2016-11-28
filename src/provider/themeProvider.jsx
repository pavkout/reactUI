import { Component, PropTypes, Children } from 'react'

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    theme: {}
  }

  // you must specify what you’re adding to the context
  static childContextTypes = {
    theme: PropTypes.object.isRequired,
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
