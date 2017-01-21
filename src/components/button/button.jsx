import React, {Component, PropTypes} from 'react';
import ThemedComponent from 'themedComponent';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.theme === 'light' ? '#fff' : '#337ab7'};
  color: ${props => props.theme === 'light' ? '#333' : '#fff'};

  line-height: 1.5;

  /*padding for all sizes*/
  ${props => props.size === 'xsmall' && 'padding: 1px 5px;'
    || props.size === 'small' && 'padding: 5px 10px;'
    || props.size === 'medium' && 'padding: 6px 12px;'
    || props.size === 'large' && 'padding: 10px 16px;'
    || props.size === 'xlarge' && 'padding: 14px 20px;'
  }

  /*border-radius for all sizes*/
  ${props => props.size === 'xsmall' && 'border-radius: 3px'
    || props.size === 'small' && 'border-radius: 3px;'
    || props.size === 'medium' && 'border-radius: 4px;'
    || props.size === 'large' && 'border-radius: 6px;'
    || props.size === 'xlarge' && 'border-radius: 8px;'
  }

  /*font-size for all sizes*/
  ${props => props.size === 'xsmall' && 'font-size: 12px;'
    || props.size === 'small' && 'font-size: 12px;'
    || props.size === 'medium' && 'font-size: 14px;'
    || props.size === 'large' && 'font-size: 18px;'
    || props.size === 'xlarge' && 'font-size: 18px;'
  }
`;

export default ThemedComponent(Button);
