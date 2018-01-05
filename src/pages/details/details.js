import React, {Component} from 'react';
import TestComponent from './../../components/test/test';  
import ContactForm from './../../components/form/form';

class DetailsComponent extends Component {

    submitForm(values) {
      alert(values);

      return false;
    }

    render() {
      return (
        <div>  
            <h1>Details</h1>
            <TestComponent></TestComponent>
            <ContactForm handleSubmit={this.submitForm}></ContactForm>
        </div>
      );
    }
  }
  
  export default DetailsComponent;