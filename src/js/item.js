import React from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import moment from 'moment';

@observer
class Item extends React.Component {
  // renderDate(props) {
  //   var date = props.date;
  //   if (date instanceof Date)
  //     date = moment(date).format('YYYY-MM-DD');
  //   return (
  //     <div className="date">
  //       {date}
  //     </div>
  //   );
  // }

  // renderTags(props) {
  //   return (
  //     <div className="tags">
  //       {props.tags.join(' | ')}
  //     </div>
  //   );
  // }

  // renderContent(props) {
  //   return (
  //     <div>
  //       {props.content}
  //     </div>
  //   );
  // }

  render() {
    // var item = this.props.store.main_item;
    // _.defaults(item, {date: '', tags: [], content: ''})

    // return (
    //   <div className="item">
    //     <this.renderDate date={item.date} />
    //     <this.renderTags tags={item.tags} />
    //     <this.renderContent content={item.content} />
    //   </div>
    // );
    var item = this.props.store.main_item;
    return (
      <div className="item">{item.content}</div>
    );
  }
}




export default Item;
