<template>
  <div class="card shoppingList">
    <TilesList :items="list"></TilesList>
    <div>
      <input v-model="newItem" v-on:keyup.enter="addItem()" />
      <button class="btn btn-primary" type="submit" v-on:click="addItem()">add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/store';
import TilesList from '@/components/TilesList.vue';

@Component({
  components: {
    TilesList,
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
  max-width: 410px;
}
</style>
