import yaml from 'js-yaml';
import $ from 'jquery';
import _ from 'lodash';

class Index {
  constructor(base_url, store) {
    this.base_url = base_url;
    this.metadata_yaml = `${this.base_url}/metadata.yaml`;
    this.store = store;
    this.parse = this.parse.bind(this);
  }

  init() {
    $.get(this.metadata_yaml, this.parse);
  }

  parse(raw) {
    try {
      var data = yaml.safeLoad(raw);
      this.init_store(data);
    } catch (e) {
      console.log(e);
    }
  }

  init_store(data) {
    for (var i in data) {
      console.log('Item: ' + data[i]);
      if (data[i].type === 'menu'){
        this.store.addMenuItem(data[i]);
      }
      else if (data[i].type === 'markdown'){
        var item = data[i];
        _.defaults(item, {
          date: '',
          tags: [],
          content: ''
        });
        this.store.addMarkdownItem(item);

      }
    }


    this.store.main_item = this.store.markdown_items[0];

    $.get(`${this.base_url}/${this.store.main_item.path}`, function(data){
      this.store.main_item.content = data;
    }.bind(this));


  }


}

export default Index;
