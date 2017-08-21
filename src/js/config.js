import yaml from 'js-yaml';
import $ from 'jquery';

class Config {
  constructor(config_url, store) {
    this.config_url = config_url;
    this.store = store;
    this.parse = this.parse.bind(this);
  }

  init(onSuccess, onError) {
    $.get(this.config_url, this.parse)
      .done(onSuccess)
      .fail(onError);
  }

  parse(raw) {
    try {
      this.store.config = yaml.safeLoad(raw);
    } catch (e) {
      console.log(e);
    }
  }

}

export default Config;
