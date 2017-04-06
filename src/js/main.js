import React from 'react';
import {observer} from 'mobx-react';
import Item from 'item';

@observer
class Main extends React.Component {
  render() {
    return (
        <Item store={this.props.store} />
    );
  }
}

export default Main;
