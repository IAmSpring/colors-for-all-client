import React, { Component } from 'react';
import PaginationTest from './PaginationTest';


class List extends Component {

    render() {
        return (
            <React.Fragment>
                <PaginationTest 
                colors={this.props.colors}
                gotoDetail={this.props.gotoDetail}
                />
            </React.Fragment>
        );
    }
}

export default List;