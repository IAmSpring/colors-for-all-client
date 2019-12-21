import React from 'react';
import Pagination from './Pagination';
import Swatch from './Swatch';

class PaginationTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exampleItems: this.props.colors,
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
                <div className="container">
                    <div className="text-center">
                        <div className="container">
                            <div className="row">
                                {this.state.pageOfItems.map(color =>
                                    <div className="column col-3">
                                        <Swatch
                                            color={color}
                                            gotoDetail={this.props.gotoDetail}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <Pagination items={this.props.colors} onChangePage={this.onChangePage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default PaginationTest;