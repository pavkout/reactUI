import React, {Component, PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ThemeProvider from 'themeProvider';

import Button from 'button';

export default class App extends Component {
  renderButtons(theme = 'light', size="xsmall") {
    return (
      <div>
        <ThemeProvider theme={theme} size={size}>
          <div>
            <Button>Click me</Button>
            <Button disabled>Click me</Button>
            <Button display="link">Click me</Button>
            <Button display="text">Click me</Button>
            <Button withRoundedCorners>Click me</Button>
            <Button withRoundedCorners fullWidth textPosition="left">Click me</Button>
            <Button withRoundedCorners fullWidth textPosition="center">Click me</Button>
            <Button withRoundedCorners fullWidth textPosition="right">Click me</Button>
            <Button fullWidth>Click me</Button>
            <Button withRoundedCorners icon="facebook" iconPosition="before">Click me</Button>
            <Button withRoundedCorners icon="facebook" iconPosition="after">Click me</Button>
            <Button withRoundedCorners icon="facebook" iconPosition="up">Click me</Button>
            <Button withRoundedCorners icon="facebook" iconPosition="down">Click me</Button>
            <Button withRoundedCorners icon="facebook"/>
          </div>
        </ThemeProvider>
      </div>
    );
  }
  render() {
    return (
      <div style={{ height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', backgroundColor: 'cadetblue', color: 'white', height: 'auto', padding: '10px 70px', border: '1px solid black' }}>
          <h3>xsmall size</h3>
          <h3>small size</h3>
          <h3>medium size</h3>
          <h3>large size</h3>
          <h3>xlarge size</h3>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', backgroundColor: 'oldlace', height: 'auto', padding: '60px', border: '1px solid black' }}>
          {this.renderButtons("dark", 'xsmall')}
          {this.renderButtons("dark", 'small')}
          {this.renderButtons("dark", 'medium')}
          {this.renderButtons("dark", 'large')}
          {this.renderButtons("dark", 'xlarge')}
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', backgroundColor: 'black', height: 'auto', padding: '60px', border: '1px solid black' }}>
          {this.renderButtons("light", 'xsmall')}
          {this.renderButtons("light", 'small')}
          {this.renderButtons("light", 'medium')}
          {this.renderButtons("light", 'large')}
          {this.renderButtons("light", 'xlarge')}
        </div>
        <div style={{ width: '100%', border: '1px solid black',  backgroundColor: 'oldlace' }}>
          <div style={{ width: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: 'auto', padding: '60px' }}>
            <ThemeProvider theme="dark" size="xlarge">
              <div>
                <Button fullWidth>Click me</Button>
                <Button withRoundedCorners fullWidth textPosition="left">Click me</Button>
                <Button withRoundedCorners fullWidth textPosition="center">Click me</Button>
                <Button withRoundedCorners fullWidth textPosition="right">Click me</Button>
              </div>
            </ThemeProvider>
          </div>
        </div>
      </div>
    );
  }
};
