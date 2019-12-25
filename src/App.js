import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import List from './components/List';
import Detail from './components/Detail';
import './App.css';

const columnStyle = {
  marginTop: '30px'
}

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      colors: []
    };
  }


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

    fetch('https://colors-for-all-server.herokuapp.com/graphql', {
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
        const colors = resData.data.colors;
        this.setState({ colors: colors });
      })
      .catch(err => {
        console.log(err);
      });
  }

  goToDetail = (colorId) => {
    this.setState({ colorId: colorId })
  }

  goToList = () => {
    this.setState({ colorId: null })
  }

  goToRandom = () => {
    const index = Math.floor(Math.random() * this.state.colors.length)
    const randColor = this.state.colors[index]._id
    this.setState({ colorId: randColor })
  }

  render() {

    return (
      <div className="App">
        <div className="container-fluid">
          <Navbar />
          <div className="row">
            <div className="column col-sm-3 side-nav">
              <Menu goToRandom={this.goToRandom} />
            </div>
            <div className="column col-sm-9" style={columnStyle}>
              {!this.state.colorId &&
                <List
                  colors={this.state.colors}
                  goToDetail={this.goToDetail}
                />
              }
              {this.state.colorId && this.state.colors.length > 0 &&
                <Detail
                  colors={this.state.colors}
                  colorId={this.state.colorId}
                  goToDetail={this.goToDetail}
                  goToList={this.goToList}
                />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
