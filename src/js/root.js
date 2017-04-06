import React from 'react';
import { observer } from 'mobx-react';
import Menu from 'menu';
import Main from 'main';

@observer
class Root extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <h1>PerPort</h1>
          <div className="row">
            <div className="col-sm-12">
              <Menu store={this.props.store} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <Main store={this.props.store} />
            </div>
            <div className="col-sm-4">
              side
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              (C) copyright
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Root;
