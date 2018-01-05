import React, {Component} from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import PropTypes from 'prop-types';

import List from './../../components/list/list';

class HomeComponent extends Component {
    static childContextTypes = {
      value: PropTypes.string
    }

    getChildContext = () => ({
      value: 'Test'
    });

    render() {
      return (
        <div>
          <h1>Home</h1>
          <LinearProgress mode="indeterminate" />
          <List></List>
        </div>
      );
    }
  }
  
  export default HomeComponent;