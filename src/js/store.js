import { observable, computed, autorun } from 'mobx';

class Store {

  @observable menu_items;
  @observable chosen_menu_index;
  @observable main_item;

  constructor() {
    this.base_url = '';
    this.markdown_items = [];
    this.menu_items = [];
    this.chosen_menu_index = 0;

    this.main_item = {};

    autorun(() => this.chosen_menu_name);
  }

  @computed get chosen_menu_name() {
    if (this.menu_items.length === 0)
      return 'undefined';
    return this.menu_items[this.chosen_menu_index].name;
  }

  addMenuItem(item) {
    this.menu_items.push(item);
  }

  addMarkdownItem(item) {
    this.markdown_items.push(item);
  }

  chooseMenuItem(menu_index) {
    this.chosen_menu_index = menu_index;
  }

  chooseTag(tag) {
    this.chosen_tag = tag;
  }

}

export default Store;
