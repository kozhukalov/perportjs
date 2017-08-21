import React from 'react';
import {observer} from 'mobx-react';

@observer
class Side extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tag) {
    console.log('chosen tag: ' + tag);
    this.props.store.chooseMenuItem(tag);
  }

  render() {
    return (
      {this.props.store.tags.map(
        (tag) =>
          <div className="tag">
          <a href="#" onClick={()=>{this.handleClick(tag)}}>{tag}</a>
          </div>
      )}
    );
  }
}

export default Side;
