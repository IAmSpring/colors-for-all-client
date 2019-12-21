import React from 'react';

const columnMargin = {
  marginTop: '40px'
}

const randomButton = {
  textAlign: 'center',
  border: '0.5px solid rgb(0, 0, 0)',
  padding: '7px 36px',
  fontSize: '0.76rem',
  borderRadius: '5px',
  fontWeight: '600'
}

const menuItems = {
  marginLeft: '-20px',
  marginTop: '20px'
}

const liCategory = {
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
      <li style={liCategory}>{category}</li>
    );
    return (
      <div style={columnMargin}>
        <div className="text-center">
          <button style={randomButton} onClick={this.props.gotoRandom}>Random Color</button>
        </div>
        <ul style={menuItems}>{categoryItems}</ul>
      </div>
    );
  }
}

export default Menu;