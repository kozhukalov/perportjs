// import 'vis/dist/vis.min.css';
// import vis from 'vis';
// import {hljs} from 'highlight';
// import 'highlight/lib/vendor/highlight.js/styles/github.css'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap'
// import Md from 'md';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from 'index';
import Store from 'store';
import Root from 'root';

class App {
  constructor() {
    this.store = new Store();
    this.base_url = "http://localhost:8003"
    this.index = new Index(this.base_url, this.store);
    this.store.base_url = this.base_url;
  }

  run() {
    this.index.init();
    ReactDOM.render(
      <Root store={this.store} />,
      $('#app')[0]
    );
  }

};

window.app = new App();
$(() => app.run());
