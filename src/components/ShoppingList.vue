<template>
  <div class="shoppingList">
    <ul>
      <div class="shoppingTilesWrapper" >
        <ShoppingListItem v-for="item in list" :key="item.title" :item="item"></ShoppingListItem>
      </div>
    </ul>
    <div>
      <input v-model="newItem" v-on:keyup.enter="addItem()" />
      <button type="submit" v-on:click="addItem()">add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShoppingListItem from '@/components/ShoppingListItem.vue';
import { store } from '@/store';

@Component({
  components: {
    ShoppingListItem,
  },
})
export default class ShoppingList extends Vue {
  private newItem = '';

  private list = store.state.list;

  public addItem() {
    if (this.newItem === '') {
      return;
    }
    store.addItem({ title: this.newItem });
    this.newItem = '';
  }
}

</script>

<style scoped lang="scss">
.shoppingList {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.shoppingTilesWrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
}
</style>
