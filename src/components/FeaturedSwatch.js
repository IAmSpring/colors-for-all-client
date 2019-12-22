import React from 'react';

const Swatch = ({ color, goToDetail }) => {

    const featuredStyle = {
        display: 'block',
        width: '100%',
        marginTop: '10px'
    }

    const cardStyle = {
        heigth: '324px',
        fontSize: '0.8rem',
        padding: '0px!important'
    };

    const cardHeaderStyle = {
        background: `#${color.hex}`,
        height: '280px',
    };

    const cardTitleStyle = {
        height: '50px',
        lineHeight: '65px',
        fontSize: '1.5rem'
    }

    return (
        
            <div onClick={()=>(goToDetail && goToDetail(color._id))} key={color._id} style={featuredStyle}>
                <div className="card" style={cardStyle}>
                    <div className="card-header" style={cardHeaderStyle}></div>
                    <div className="">
                        <p className="card-title" style={cardTitleStyle} >#{color.hex}</p>
                    </div>
                </div>
            </div>
    )
}

export default Swatch;