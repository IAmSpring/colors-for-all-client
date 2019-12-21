import React from 'react';

const SimilarSwatches = ({ color, gotoDetail }) => {

    const liStyle = {
        width: '100px',
        marginTop: '10px',
        margin: '15px'
    }

    const cardStyle = {
        heigth: '30px',
        fontSize: '0.8rem',
        padding: '0px!important'
    };

    const cardHeaderStyle = {
        background: `#${color.hex}`,
        height: '69px',
    };

    const cardTitle = {
        height: '20px',
        lineHeight: '30px'
    }

    return (

        <React.Fragment>
            <div onClick={() => (gotoDetail && gotoDetail(color._id))} key={color._id} style={liStyle}>
                <div className="card" style={cardStyle}>
                    <div className="card-header" style={cardHeaderStyle}></div>
                    <div className="">
                        <p className="card-title" style={cardTitle} >#{color.hex}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SimilarSwatches;