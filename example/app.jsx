import React, {Component, PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ThemeProvider from 'themeProvider';

import Button from 'button';

export default class App extends Component {
  constructor(props){
  	super(props);
  	this.state = { theme: 'light' };
  }

  handleChange(value) {
    this.setState({ theme: value });
  }

  renderButtons(size='xsmall', color='default') {
    return (
      <div>
        <ThemeProvider theme={this.state.theme} size={size}>
          <div>
            <Button color={color}>Click me</Button>
            <Button color={color} disabled>Click me</Button>
            <Button color={color} display="link">Click me</Button>
            <Button color={color} display="text">Click me</Button>
            <Button color={color} withRoundedCorners>Click me</Button>
            <Button color={color} withRoundedCorners fullWidth textPosition="left">Click me</Button>
            <Button color={color} withRoundedCorners fullWidth textPosition="center">Click me</Button>
            <Button color={color} withRoundedCorners fullWidth textPosition="right">Click me</Button>
            <Button color={color} fullWidth>Click me</Button>
            <Button color={color} withRoundedCorners icon="facebook" iconPosition="before">Click me</Button>
            <Button color={color} withRoundedCorners icon="facebook" iconPosition="after">Click me</Button>
            <Button color={color} withRoundedCorners icon="facebook" iconPosition="up">Click me</Button>
            <Button color={color} withRoundedCorners icon="facebook" iconPosition="down">Click me</Button>
            <Button color={color} withRoundedCorners icon="facebook"/>
          </div>
        </ThemeProvider>
      </div>
    );
  }

  renderButtonsTheme() {
    return (
      <div style={{ width: '100%' }}>
        <ThemeProvider theme="light" size="large">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => { this.handleChange("light"); }} color="blue" fullWidth>LIGHT THEME (DRFAULT)</Button>
            <Button onClick={() => { this.handleChange("dark"); }} color="blue" fullWidth>DARK THEME</Button>
          </div>
        </ThemeProvider>
      </div>
    );
  }

  render() {
    const backgroundColor = this.state.theme === 'light' ? 'oldlace' : '#303030';
    return (
      <div style={{ height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        {this.renderButtonsTheme()}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', backgroundColor: 'cadetblue', color: 'white', height: 'auto', padding: '10px 70px', border: '1px solid black' }}>
          <h3>xsmall size</h3>
          <h3>small size</h3>
          <h3>medium size</h3>
          <h3>large size</h3>
          <h3>xlarge size</h3>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', backgroundColor, height: 'auto', padding: '40px', border: '1px solid black' }}>
          {this.renderButtons('xsmall')}
          {this.renderButtons('small', 'red')}
          {this.renderButtons('medium', 'black')}
          {this.renderButtons('large', 'blue')}
          {this.renderButtons('xlarge', 'grey')}
        </div>
      </div>
    );
  }
};
