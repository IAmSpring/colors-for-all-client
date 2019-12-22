import React from 'react';
import Pagination from './Pagination';
import Swatch from './Swatch';

const containerStyle = {
    paddingRight: '0px',
    paddingLeft: '0px'
}

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div>
                <div className="container" style={containerStyle}>
                    <div className="text-center">
                        <div className="row">
                            {this.state.pageOfItems.map(color =>
                                <div className="column col-3">
                                    <Swatch
                                        color={color}
                                        goToDetail={this.props.goToDetail}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <Pagination items={this.props.colors} onChangePage={this.onChangePage} />
                </div>
            </div>
        );
    }
}

export default List;