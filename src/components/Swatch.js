import React from 'react';

const Swatch = ({ color, gotoDetail }) => {

    const liStyle = {
        display: 'block',
        width: '120px',
        margin: '10px'
    }

    const cardStyle = {
        heigth: '130px',
        fontSize: '0.8rem',
        borderRadius: '8px',
        padding: '0px!important',
        boxShadow: '#b7b7b7ba 0px 0px 2px 0px'
    }

    const cardTitle = {
        height: '40px',
        lineHeight: '20px',
        marginBottom: '-1rem'
    }

    const cardHeaderStyle = {
        background: `#${color.hex}`,
        height: '120px',
    };

    return (
        
            <li onClick={()=>(gotoDetail && gotoDetail(color._id))} key={color._id} style={liStyle}>
                <div className="card" style={cardStyle}>
                    <div className="card-header" style={cardHeaderStyle}></div>
                    <div className="">
                        <p className="card-title" style={cardTitle} >#{color.hex}</p>
                    </div>
                </div>
            </li>
    )
}

export default Swatch;