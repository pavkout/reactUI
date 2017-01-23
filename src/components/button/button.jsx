import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import ThemedComponent from 'themedComponent';

const DefaultButton = styled.button`
  /* Adapt the colors based on primary prop */
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  border-style: solid;
  user-select: none;

  /* Full width */
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  opacity: ${props => props.disabled ? '0.5' : '1'};
  pointer-events: ${props => props.disabled ? 'none' : null};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  /* Colors style*/
  background: ${props => props.theme.button.colors[props.color].background};
  color: ${props => props.theme.button.colors[props.color].color};
  border-color: ${props => props.theme.button.colors[props.color].borderColor};

  /* Sizes style */
  padding: ${props => props.theme.button[props.size].padding};
  font-size: ${props => props.theme.button[props.size].fontSize};
  border-radius: ${props => props.withRoundedCorners ? props.theme.button[props.size].borderRadius : null};

  /* Icon Position style */
  flex-direction: ${props => props.theme.button.iconPosition[props.iconPosition].flexDirection};

  /* Text Position style */
  justify-content: ${props => props.theme.button.textPosition[props.textPosition].justifyContent};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }

  &:focus {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }
`;

const LinkButton = styled(DefaultButton)`
  border: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-radius: 0;
  background: transparent;
  color: ${props => props.theme.button.colors[props.color].color};
`;

const TextButton = styled(DefaultButton)`
  border: none;
  border-radius: 0;
  background: transparent;
  color: ${props => props.theme.button.colors[props.color].color};
`;

const Icon = styled(FontAwesome)`
  padding: 5px;
`;

class Button extends Component {
  static propTypes = {
    /**
     * Width of button container
     */
    width: PropTypes.string,
    /**
     * Width of button container
     */
    height: PropTypes.string,
    /**
     * True if the button is disabled
     */
    isDisabled: PropTypes.bool,
    /**
     * Custom text for the button
     */
    text: PropTypes.string,
    /**
     * Choose the alignment of the given text
     */
    textPosition: PropTypes.oneOf(['left', 'center', 'right']),
    /**
     * onClick handler
     */
    onClick: PropTypes.func,
    /**
     * If true the button is invisible
     */
    hidden: PropTypes.bool,
    /**
     * Choose if the button will be displayed as a link or as a button
     */
    display: PropTypes.oneOf(['default', 'link', 'text']),
    /**
      * App renders any type of react component inside it
      */
    children: PropTypes.any,
    /**
      * Additional classNames
      */
    className: PropTypes.string,
    /**
      * Additional classNames
      */
    iconClassName: PropTypes.string,
    /**
     * Set button full width
     */
    fullWidth: PropTypes.bool,
    /**
     * Choose if the button will be displayed as a link or as a button
     */
    color: PropTypes.oneOf(['default', 'grey', 'red', 'black', 'blue']),
    /**
     * Choose the icon name
     */
    icon: PropTypes.string,
    /**
     * Choose the icon library
     */
    iconLibrary: PropTypes.string,
    /**
     * Choose the icon position before text or after text
     */
    iconPosition: PropTypes.oneOf(['before', 'after', 'up', 'down']),
    /**
     * The tooltip title if button is icon button
     */
    title: PropTypes.string,
    /**
     * Set true if we want border Radius
     */
    withRoundedCorners: PropTypes.bool
  }

  static defaultProps = {
    display: 'default',
    isDisabled: false,
    textPosition: 'center',
    iconLibrary: 'fa',
    iconPosition: 'before',
    color: 'default',
    theme: {},
    size: 'medium',
    withRoundedCorners: false
  }

  renderIcon() {
    let icon = null;
    // Display an icon if it is declared in the props
    if (this.props.icon) {
      icon = (
        <Icon name={this.props.icon}/>
      );
    }

    return icon;
  }

  render() {
    // Don't display the button if hidden is true
    if (this.props.hidden) {
      return null;
    }

    switch (this.props.display) {
      case 'text':
        return (
          <TextButton {...this.props}>
            {this.renderIcon()}
            {this.props.children}
          </TextButton>
        );
      case 'link':
        return (
          <LinkButton {...this.props}>
            {this.renderIcon()}
            {this.props.children}
          </LinkButton>
        );
      default:
        return (
          <DefaultButton {...this.props}>
            {this.renderIcon()}
            {this.props.children}
          </DefaultButton>
        );
    }
  }
}

export default ThemedComponent(Button);
