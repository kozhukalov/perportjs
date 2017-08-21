import React from 'react';
import { observer } from 'mobx-react';
import Menu from 'menu';
import Main from 'main';
import Side from 'side';

@observer
class Root extends React.Component {
  renderHeader(props) {
    return (
        <div className="container">
          <h1 className="header-title">PerPort</h1>
          <div className="row">
            <div className="col-sm-12">
              <Menu store={props.store} />
            </div>
          </div>
        </div>
    );
  }

  renderMain(props) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Main store={props.store} />
          </div>
          <div className="col-sm-4">
            <Side store={props.store} />
          </div>
        </div>
      </div>
    );
  }

  renderFooter(props) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            (C) copyright
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.renderHeader store={this.props.store} />
        <this.renderMain store={this.props.store} />
        <this.renderFooter />
      </div>
    );
  }

}

export default Root;
