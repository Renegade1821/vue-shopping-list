import { ShoppingItem } from '@/models/ShoppingItem.model';

export interface State {
  list: ShoppingItem[];
  history: ShoppingItem[];
}

export const store = {
  state: {
    list: [
      { title: 'apple' },
      { title: 'fanta' },
      { title: 'cola' },
      { title: 'sprite' },
    ],
    history: [],
  } as State,

  addItem(item: ShoppingItem) {
    this.state.list.push(item);
  },

  checkItem(checkedItem: ShoppingItem) {
    this.state.history.push(checkedItem);

    const index = this.state.list.findIndex((item) => item.title === checkedItem.title);
    if (index !== -1) {
      this.state.list.splice(index, 1);
    }
  },
};
