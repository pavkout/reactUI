import React, {Component, PropTypes} from 'react';
import ThemedComponent from 'themedComponent';
import './button.post.css';

class Button extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
   text: ''
  }

  constructor(props) {
   super(props)
   this.state = { isLight: false };
  }

  handleClick() {
    this.setState({ isLight: !this.state.isLight });
  }

  render() {
    const { theme } = this.props;
    let style = theme.dark;
    if (this.state.isLight) {
      style = theme.light;
    }

    return (
      <div className="ui-button-container">
        <button className= "btn ui-button" onClick={this.handleClick.bind(this)} style={style}>{this.props.text}</button>
      </div>
    );
  }
}

export default ThemedComponent(Button);
