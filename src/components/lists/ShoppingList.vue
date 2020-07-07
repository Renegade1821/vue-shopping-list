<template>
<div class="card shoppingList p-3">
  <AddItemComponent></AddItemComponent>
  <TilesList :items="list"></TilesList>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/store';
import TilesList from '@/components/TilesList.vue';
import AddItemComponent from '@/components/AddItemComponent.vue';

@Component({
  components: {
    TilesList,
    AddItemComponent,
  },
})
export default class ShoppingList extends Vue {
  private newItem = '';

  private list = store.state.list;

  public addItem() {
    if (this.newItem === '') {
      return;
    }
    store.addItem({
      title: this.newItem,
    });
    this.newItem = '';
  }
}
</script>

<style scoped lang="scss">
.shoppingList {
  max-width: 444px;
}

.shoppingTilesWrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 410px;
}
</style>
