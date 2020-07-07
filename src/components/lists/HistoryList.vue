<template>
  <div class="card history p-3">
    <TilesList
    :items="history"
    @tileClick="handleTileClick"
    ></TilesList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/store';
import TilesList from '@/components/TilesList.vue';
import { ShoppingItem } from '../../models/ShoppingItem.model';

@Component({
  components: {
    TilesList,
  },
})
export default class HistoryList extends Vue {
  store = store;

  history = store.state.history;

  handleTileClick(item: ShoppingItem) {
    console.log('history', item);
    this.store.readdItem(item);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.history {
  width: 444px;
}
</style>
