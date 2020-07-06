<template>
  <div class="shoppingList">
    <ul>
      <li v-for="item in list" :key="item.title" @click="checkItem(item)">
        {{item.title}}
      </li>
    </ul>
    <div>
    <input v-model="newItem" v-on:keyup.enter="addItem()" />
    <button type="submit" v-on:click="addItem()">add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '../store';
import { ShoppingItem } from '../models/ShoppingItem.model';

@Component
export default class ShoppingList extends Vue {
  newItem = '';

  list = store.state.list;

  addItem() {
    if (this.newItem === '') {
      return;
    }
    store.addItem({ title: this.newItem });
    this.newItem = '';
  }

  checkItem = (item: ShoppingItem) => {
    store.checkItem(item);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shoppingList {
  display: flex;
  align-items: center;
  flex-direction: column;
}
ul {
  max-width: 200px;
  padding: 0;
}
li:hover {
  cursor: pointer;
  background-color: #C7C7C7
}

</style>
