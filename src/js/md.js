import React from 'react';

class Md extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render(){
    return (
        <h1>Hello {this.props.name}!</h1>
    );
  }
}

export default Md;
