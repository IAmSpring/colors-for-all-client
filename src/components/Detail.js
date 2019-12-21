import React, { Component } from 'react';
import FeaturedSwatch from './FeaturedSwatch';

class List extends Component {

    render() {

        const color = this.props.colors.filter((color) => {
            return color._id === this.props.colorid
        })[0]

        return (
            <React.Fragment>
                <FeaturedSwatch
                    color={color}
                />
                <button onClick={this.props.gotoList}>Clear</button>
            </React.Fragment>
        );
    }
}

export default List;