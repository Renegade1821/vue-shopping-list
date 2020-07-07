<template>
  <div class="wrapper">
    <Tile
      v-for="item in items"
      :key="item.title"
      :item="item"
      @click.native="handleTileClick(item)"
    ></Tile>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Tile from '@/components/Tile.vue';
import { ShoppingItem } from '@/models/ShoppingItem.model';

@Component({
  components: {
    Tile,
  },
})
export default class TilesList extends Vue {
  @Prop() private items!: ShoppingItem;

  handleTileClick(item: ShoppingItem) {
    this.$emit('tileClick', item);
  }
}

</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
