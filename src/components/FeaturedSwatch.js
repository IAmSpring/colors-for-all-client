import React from 'react';

const Swatch = ({ color, gotoDetail }) => {


    const liStyle = {
        display: 'block',
        width: '120px'
    }

    const cardStyle = {
        heigth: '130px',
        fontSize: '0.8rem',
        padding: '0px!important'
    };

    const cardTitle = {
        height: '40px',
        lineHeight: '20px'
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
                        <p className="card-title" style={cardTitle} >{color.name}</p>
                    </div>
                </div>
            </li>

    )
}


export default Swatch;