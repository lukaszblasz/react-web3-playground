import React, { Component } from 'react';
import Item from './../item/item';

class List extends Component {

  clickHandler() {
    alert('alert from parent');
  }

  render() {
    return (
        <div>
            <h3>List</h3>
            <Item clickHandler={this.clickHandler}></Item>
        </div>
    );
  }
}

export default List;