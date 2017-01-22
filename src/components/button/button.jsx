import React, {Component, PropTypes} from 'react';
import styled, { css } from 'styled-components'
import FontAwesome from 'react-fontawesome';

import ThemedComponent from 'themedComponent';

const xsmall = css`
  ${props => props.size === 'xsmall' && 'padding: 1px 5px; font-size: 12px'};
  ${props => (props.size === 'xsmall' && props.withRoundedCorners) && 'border-radius: 3px'};
`;

const small = css`
  ${props => props.size === 'small' && 'padding: 5px 10px; font-size: 12px'};
  ${props => (props.size === 'small' && props.withRoundedCorners) && 'border-radius: 3px'};
`;

const medium = css`
  ${props => props.size === 'medium' && 'padding: 6px 12px; font-size: 14px'};
  ${props => (props.size === 'medium' && props.withRoundedCorners) && 'border-radius: 4px'};
`;

const large = css`
  ${props => props.size === 'large' && 'padding: 10px 16px; font-size: 18px'};
  ${props => (props.size === 'large' && props.withRoundedCorners) && 'border-radius: 6px'};
`;

const xlarge = css`
  ${props => props.size === 'xlarge' && 'padding: 14px 20px; font-size: 18px'};
  ${props => (props.size === 'xlarge' && props.withRoundedCorners) && 'border-radius: 8px'};
`;

const disabledStyle = css`
  /* Disabled style */
  ${props => props.disabled && 'border-color: #d3d6db; color: black; opacity: 0.5; pointer-events: none; cursor: not-allowed !important'};
`;

const textPosition = css`
  /* Text Position*/
  ${props => props.textPosition === 'center' && 'justify-content: center;'
    || props.textPosition === 'left' && 'justify-content: flex-start;'
    || props.textPosition === 'right' && 'justify-content: flex-end;'
  }
`;

const iconPosition = css`
  /* Icon Position*/
  ${props => props.iconPosition === 'before' && 'flex-direction: row;'
    || props.iconPosition === 'after' && 'flex-direction: row-reverse;'
    || props.iconPosition === 'up' && 'flex-direction: column;'
    || props.iconPosition === 'down' && 'flex-direction: column-reverse;'
  }
`;

const DefaultButton = styled.button`
  /* Adapt the colors based on primary prop */
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  border-style: solid;
  margin: 10px;

  /* Full width */
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  border-color: ${props => props.theme === 'light' ? '#fff' : '#0A7AB9'};
  background: ${props => props.theme === 'light' ? '#fff' : '#0A7AB9'};
  color: ${props => props.theme === 'light' ? '#333' : 'whitesmoke'};

  /* Disabled style */
  ${ disabledStyle }

  /* Sizes style */
  ${ xsmall }
  ${ small }
  ${ medium }
  ${ large }
  ${ xlarge }

  /* Icon Position style */
  ${ iconPosition}

  /* Text Position style */
  ${ textPosition }

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
  color: #337ab7;
`;

const TextButton = styled(DefaultButton)`
  border: none;
  border-radius: 0;
  background: transparent;
  color: #337ab7;
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
    color: PropTypes.oneOf(['default', 'grey', 'red', 'black', 'blue', 'popup']),
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
    theme: 'dark',
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
