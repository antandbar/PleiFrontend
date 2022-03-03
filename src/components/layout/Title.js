import React, { Component} from 'react';

export default class Title extends Component {
    render() {
      return (
        <div className="CreateInternalUser">
          <h1>{this.props.title}</h1>
  
        </div>
      );
    }
  }