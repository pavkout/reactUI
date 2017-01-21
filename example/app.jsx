import React, {Component, PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ThemeProvider from 'themeProvider';

import Button from 'button';

export default class App extends Component {
  render() {
    return (
      <div>
        <Grid style={{ backgroundColor: 'white', height: '150px', padding: '60px' }}>
          <Row>
            <Col sm={2}>
              <ThemeProvider theme="dark" size="xsmall">
                <Button>xsmall</Button>
              </ThemeProvider>
            </Col>
            <Col sm={2}>
              <ThemeProvider theme="dark" size="small">
                <Button>small</Button>
              </ThemeProvider>
            </Col>
            <Col sm={2}>
              <ThemeProvider theme="dark" size="medium">
                <Button>medium</Button>
              </ThemeProvider>
            </Col>
            <Col sm={2}>
              <ThemeProvider theme="dark" size="large">
                <Button>large</Button>
              </ThemeProvider>
            </Col>
            <Col sm={2}>
              <ThemeProvider theme="dark" size="xlarge">
                <Button>xlarge</Button>
              </ThemeProvider>
            </Col>
          </Row>
        </Grid>
        <Grid style={{ backgroundColor: 'black', height: '150px', padding: '60px' }}>
          <Row>
            <Col sm={2}>
              <ThemeProvider size="xsmall">
                <Button>xsmall</Button>
              </ThemeProvider>
            </Col>
            <Col sm={2}>
              <ThemeProvider size="small">
                <Button>small</Button>
              </ThemeProvider>
            </Col>
            <Col sm={2}>
              <ThemeProvider size="medium">
                <Button>medium</Button>
              </ThemeProvider>
            </Col>
            <Col sm={2}>
              <ThemeProvider size="large">
                <Button>large</Button>
              </ThemeProvider>
            </Col>
            <Col sm={2}>
              <ThemeProvider size="xlarge">
                <Button>xlarge</Button>
              </ThemeProvider>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};
