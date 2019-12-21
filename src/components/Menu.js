import React from 'react';

const columnMargin = {
  marginTop: '30px'
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


const Menu = (props) => (
  <div style={columnMargin}>
    <div className="text-center">
      <button style={randomButton} onClick={props.gotoRandom}>Random Color</button>
    </div>
    <ul style={menuItems}>
      <li>Red</li>
      <li>Orange</li>
      <li>Yellow</li>
      <li>Green</li>
      <li>Blue</li>
      <li>Purple</li>
      <li>Brown</li>
      <li>Gray</li>
    </ul>
  </div>
)

export default Menu;
