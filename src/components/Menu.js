import React from 'react';

const columnStyle = {
  marginTop: '40px'
}

const buttonStyle = {
  textAlign: 'center',
  border: '0.5px solid rgb(0, 0, 0)',
  padding: '7px 36px',
  fontSize: '0.76rem',
  borderRadius: '5px',
  fontWeight: '600'
}

const categoryStyle = {
  marginLeft: '-20px',
  marginTop: '20px'
}

const liStyle = {
  paddingBottom: '4px'
}

class Menu extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      catergories: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']
    };
  }

  render() {
    const categoryItems = this.state.catergories.map((category) =>
      <li style={liStyle}>{category}</li>
    );
    return (
      <div style={columnStyle}>
        <div className="text-center">
          <button style={buttonStyle} onClick={this.props.goToRandom}>Random Color</button>
        </div>
        {/* TODO: onClick use category to filter list view's colors by category value */}
        <ul style={categoryStyle}>{categoryItems}</ul>
      </div>
    );
  }
}

export default Menu;