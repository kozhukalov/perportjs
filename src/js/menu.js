import React from 'react';
import {observer} from 'mobx-react';

@observer
class Menu extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(menu_index) {
    console.log('chosen menu item: ' + menu_index);
    this.props.store.chooseMenuItem(menu_index);
  }

  render() {
    return (
      <ul className="list-inline">
        {this.props.store.menu_items.map(
          (item, index) =>
            <li key={index}><a href="#" onClick={()=>{this.handleClick(index)}}>{item.name}</a></li>
        )}
      </ul>
    );
  }
}

export default Menu;
