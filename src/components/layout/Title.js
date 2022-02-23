import React, { Component} from 'react';

export default class Tittle extends Component {
    render() {
      return (
        <div className="CreateInternalUser">
          <h1>{this.props.title}</h1>
  
        </div>
      );
    }
  }