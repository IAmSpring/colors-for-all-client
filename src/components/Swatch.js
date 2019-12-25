import React from 'react';

const Swatch = ({ color, goToDetail }) => {

  const liStyle = {
    display: 'block',
    width: '115px',
    margin: '10px'
  }

  const cardStyle = {
    heigth: '130px',
    fontSize: '0.8rem',
    borderRadius: '8px',
    padding: '0px!important',
    boxShadow: '#b7b7b7ba 0px 0px 2px 0px'
  }

  const cardBodyStyle = {
    padding: '0rem'
  }

  const cardTitleStyle = {
    height: '40px',
    lineHeight: '25px',
    marginBottom: '-1rem'
  }

  const cardHeaderStyle = {
    background: `#${color.hex}`,
    height: '100px',
  };

  return (

    <li onClick={() => (goToDetail && goToDetail(color._id))} key={color._id} style={liStyle}>
      <div className="card" style={cardStyle}>
        <div className="card-header" style={cardHeaderStyle}></div>
        <div className="card-body" style={cardBodyStyle}>
          <p className="card-title" style={cardTitleStyle} >#{color.hex}</p>
        </div>
      </div>
    </li>
  )
}

export default Swatch;