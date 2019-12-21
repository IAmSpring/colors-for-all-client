import React, { Component } from 'react';
import FeaturedSwatch from './FeaturedSwatch';
import SimilarSwatches from './SimilarSwatches';

const flexSimilar = {
    display: 'flex',
    justifyContent: 'center'
}

const clearButton = {
    textAlign: 'center',
    border: '0.5px solid rgb(0, 0, 0)',
    padding: '7px 36px',
    fontSize: '0.76rem',
    borderRadius: '5px',
    fontWeight: '600'
}

class List extends Component {

    render() {

        const color = this.props.colors.filter((color) => {
            return color._id === this.props.colorid
        })[0]

        return (

            <div>
                <div className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="column col-12">
                                <FeaturedSwatch
                                    color={color}
                                />
                                <container style={flexSimilar}>

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

                                </container>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.props.gotoList} style={clearButton}>Clear</button>
                </div>
            </div >
        );
    }
}

export default List;