import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    static contextTypes = {
        value: PropTypes.string,
    }
    
    render() {
        return (
            <h6 onClick={this.props.clickHandler}>{this.context.value}</h6>
        );
    }
}

export default Item;