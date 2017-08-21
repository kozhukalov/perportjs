import yaml from 'js-yaml';
import $ from 'jquery';
import _ from 'lodash';

class Index {
  constructor(store) {
    this.store = store;
    this.parse = this.parse.bind(this);
  }

  init() {
    for (var i in this.store.config.urls) {
      let url = this.store.config.urls[i];
      let base_url = url.split('/').slice(0,-1).join('/');
      console.log("Trying to get url: " + url);
      $.get(url, (raw) => {
        this.parse(base_url, raw);
      });
    }
  }

  parse(base_url, raw) {
    try {
      let data = yaml.safeLoad(raw);
      this.append_to_store(base_url, data);
    } catch (e) {
      console.log(e);
    }
  }

  append_to_store(base_url, data) {
    for (var i in data) {
      console.log('Item: ' + data[i]);
      if (data[i].type === 'menu'){
        this.store.addMenuItem(data[i]);
      }
      else if (data[i].type === 'markdown'){
        console.log("Appending markdown item: " + data[i].path);
        var item = data[i];
        _.defaults(item, {
          date: '',
          tags: [],
          content: ''
        });
        item.path = `${base_url}/${item.path}`;
        this.store.addMarkdownItem(item);
        this.store.addTag(item);
      }
    }
    this.store.main_item = this.store.markdown_items[0];
    $.get(this.store.main_item.path, ((data) => {
      this.store.main_item.content = data;
    }).bind(this));
  }
}

export default Index;
