import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import List from './components/List';
import Menu from './components/Menu';


const columnMargin = {
    marginTop: '30px'
}

class App extends React.Component {
  state = { colors: [] }

  componentDidMount() {
    this.fetchColors();
  }

  fetchColors() {
    const requestBody = {
      query: `
            query {
                colors {
                    _id
                    name
                    hex
                }
            }
        `
    };

    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        console.log(res.json);
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        const colors = resData.data.colors;
        this.setState({ colors: colors });
      })
      .catch(err => {
        console.log(err);
      });
  }

  gotoDetail = (colorid) => {
    this.setState({ colorid: colorid })
  }

  gotoList = () => {
    this.setState({ colorid: null})
  }

  gotoRandom = () => {
    const index = Math.floor( Math.random() * this.state.colors.length)
    const randColor = this.state.colors[index]._id
    this.setState({ colorid: randColor })
  }

  render() {
    console.log(List);
    return (
      <div className="App">
        <Container fluid>
          <Navbar />
          <Row>
            <Col sm={3} className="side-nav">
            <Menu gotoRandom={this.gotoRandom}/>
            </Col>
            <Col sm={9} style={columnMargin}>
              {!this.state.colorid &&
                <List
                  colors={this.state.colors}
                  gotoDetail={this.gotoDetail}
                />
              }
              {this.state.colorid && this.state.colors.length > 0 &&
                <Detail
                  colors={this.state.colors}
                  colorid={this.state.colorid}
                  gotoList={this.gotoList}
                />
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
