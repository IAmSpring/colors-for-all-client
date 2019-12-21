import React from 'react';

const Swatch = ({ color, gotoDetail }) => {

    const featuredStyle = {
        display: 'block',
        width: '100%',
        marginTop: '8px'
    }

    const cardStyle = {
        heigth: '324px',
        fontSize: '0.8rem',
        padding: '0px!important'
    };

    const cardHeaderStyle = {
        background: `#${color.hex}`,
        height: '300px',
    };

    const cardTitle = {
        height: '50px',
        lineHeight: '65px',
        fontSize: '1.5rem'
    }

    return (
        
            <div onClick={()=>(gotoDetail && gotoDetail(color._id))} key={color._id} style={featuredStyle}>
                <div className="card" style={cardStyle}>
                    <div className="card-header" style={cardHeaderStyle}></div>
                    <div className="">
                        <p className="card-title" style={cardTitle} >#{color.hex}</p>
                    </div>
                </div>
            </div>
    )
}

export default Swatch;