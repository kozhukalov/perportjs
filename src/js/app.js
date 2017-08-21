// import 'vis/dist/vis.min.css';
// import vis from 'vis';
// import {hljs} from 'highlight';
// import 'highlight/lib/vendor/highlight.js/styles/github.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'css/main.css'
import yaml from 'js-yaml';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Config from 'config';
import Index from 'index';
import Store from 'store';
import Root from 'root';

class App {
  constructor() {
    this.store = new Store();
    this.config_url = "/config.yaml";
    this.config = new Config(this.config_url, this.store);
    this.index = new Index(this.store);
  }

  run() {
    let config_init = new Promise((onSuccess, onError) => {
      this.config.init(onSuccess, onError);
    });
    config_init.then(() => this.index.init());
    ReactDOM.render(
      <Root store={this.store} />,
      $('#app')[0]
    );
  }

};

window.app = new App();
$(() => app.run());
