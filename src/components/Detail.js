import React from 'react';
import FeaturedSwatch from './FeaturedSwatch';
import SimilarSwatches from './SimilarSwatches';

const flexSimilar = {
    display: 'flex',
    justifyContent: 'space-between'
}

const containerStyle = {
    paddingRight: '0px',
    paddingLeft: '0px'
}

const buttonStyle = {
    textAlign: 'center',
    border: '0.5px solid rgb(0, 0, 0)',
    padding: '7px 36px',
    fontSize: '0.76rem',
    borderRadius: '5px',
    fontWeight: '600'
}

class Detail extends React.Component {

    render() {

        const color = this.props.colors.filter((color) => {
            return color._id === this.props.colorId
        })[0]

        return (

            <div>
                <div className="text-center">
                    <div className="container" style={containerStyle}>
                        <div className="row">
                            <div className="column col-12">
                                <FeaturedSwatch
                                    color={color}
                                />
                                <div style={flexSimilar}>

                                    {/* TODO: create script to sort colors by closest match to current color's R G B values and return first five */}
                                    <SimilarSwatches
                                        color={color}
                                    />
                                    <SimilarSwatches
                                        color={color}
                                    />
                                    <SimilarSwatches
                                        color={color}
                                    />
                                    <SimilarSwatches
                                        color={color}
                                    />
                                    <SimilarSwatches
                                        color={color}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.props.goToList} style={buttonStyle}>Clear</button>
                </div>
            </div >
        );
    }
}

export default Detail;