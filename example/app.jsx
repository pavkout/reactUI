import React, {Component, PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ThemeProvider from 'themeProvider';
import themes from 'themes';

import Button from 'button';

import Sidebar from 'react-sidebar';

let themeName = 'light';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin: 5px;
  z-index: 1;
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background: cadetblue;
`;

const MenuTitle = styled.h1`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  text-align: center;
  color: white;
`;

const Span = styled.span`
  font-size: 24px;
  color: black;
  padding-left: 5px;
  text-decoration: underline;
  margin-bottom: 25px;
  user-select: none;
`;

const SidebarContent = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const sideBarStyle = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  sidebar: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
    background: 'cadetblue',
    width: '300px'
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'auto',
    transition: 'left .3s ease-out, right .3s ease-out',
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
  },
};

export default class App extends Component {
  constructor(props){
  	super(props);
  	this.state = { theme: themes.light, themeName: 'light', sidebarOpen: false };
  }

  onSetSidebarOpen = (open) => {
     this.setState({sidebarOpen: open});
   }

  handleChange(value) {
    this.setState({ theme: themes[value], themeName: value });
  }

  renderButtons(size='xsmall', color='default') {
    return (
      <div>
        <ThemeProvider theme={this.state.theme} size={size}>
          <ButtonsWrapper>
            <Span style={{ color: this.state.themeName === 'light' ? '#111' : '#fff' }}>{size}</Span>
            <ButtonContainer><Button color={color}>Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} disabled>Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} display="link">Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} display="text">Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} withRoundedCorners>Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} withRoundedCorners fullWidth textPosition="left">Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} withRoundedCorners fullWidth textPosition="center">Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} withRoundedCorners fullWidth textPosition="right">Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} fullWidth>Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} withRoundedCorners icon="facebook" iconPosition="before">Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} withRoundedCorners icon="facebook" iconPosition="after">Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} withRoundedCorners icon="facebook" iconPosition="up">Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} withRoundedCorners icon="facebook" iconPosition="down">Click me</Button></ButtonContainer>
            <ButtonContainer><Button color={color} withRoundedCorners icon="facebook"/></ButtonContainer>
          </ButtonsWrapper>
        </ThemeProvider>
      </div>
    );
  }

  renderButtonsTheme() {
    console.log(themes);
    return (
      <div style={{ width: '100%' }}>
        <ThemeProvider theme={this.state.theme} size="large">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => { this.handleChange("light"); }} color="blue" fullWidth>LIGHT THEME (DRFAULT)</Button>
            <Button onClick={() => { this.handleChange("dark"); }} color="blue" fullWidth>DARK THEME</Button>
          </div>
        </ThemeProvider>
      </div>
    );
  }

  render() {
    const backgroundColor = this.state.themeName === 'light' ? 'oldlace' : '#303030';
    const sidebarContent = (
      <SidebarContent>
        <ThemeProvider theme={this.state.theme} size="large">
          <div>
            <Button fullWidth icon="facebook" textPosition="left" onClick={() => {this.onSetSidebarOpen(false)}}>Button</Button>
            <Button fullWidth icon="facebook" textPosition="left" onClick={() => {this.onSetSidebarOpen(false)}}>LoadingButton</Button>
            <Button fullWidth icon="facebook" textPosition="left" onClick={() => {this.onSetSidebarOpen(false)}}>Icon</Button>
          </div>
        </ThemeProvider>
      </SidebarContent>
    );
    return (
      <Sidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        sidebarClassName="sideBar-container-menu"
        styles={sideBarStyle}
      >
        <div style={{ height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <MenuContainer>
            <ButtonContainer>
              <ThemeProvider theme={this.state.theme} size="large">
                <Button size="large" withRoundedCorners icon="bars" onClick={() => {this.onSetSidebarOpen(true)}}/>
              </ThemeProvider>
            </ButtonContainer>
            <MenuTitle>Ordereze UI Components</MenuTitle>
          </MenuContainer>
          {this.renderButtonsTheme()}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', backgroundColor, height: 'auto', padding: '40px', border: '1px solid black' }}>
            {this.renderButtons('xsmall')}
            {this.renderButtons('small', 'red')}
            {this.renderButtons('medium', 'black')}
            {this.renderButtons('large', 'blue')}
            {this.renderButtons('xlarge', 'red')}
          </div>
        </div>
     </Sidebar>
    );
  }
};
