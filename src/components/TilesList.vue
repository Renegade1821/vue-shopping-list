<template>
  <div>
    <!-- <button class="btn btn-primary" @click="handleClick()">foo</button> -->
    <transition-group name="list" tag="p" class="d-flex flex-wrap">
      <Tile
        class="tile"
        v-for="item in items"
        :key="item.title"
        :item="item"
        @click.native="handleTileClick(item)"
      ></Tile>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Tile from '@/components/Tile.vue';
import { ShoppingItem } from '@/models/ShoppingItem.model';
import ShoppingList from '@/components/lists/ShoppingList.vue';

@Component({
  components: {
    Tile,
  },
})
export default class TilesList extends Vue {
  @Prop() private items!: ShoppingItem[];

  handleTileClick(item: ShoppingItem) {
    this.$emit('tileClick', item);
  }

  // handleClick() {
  //   this.items = this.shuffle(this.items);
  // }

  // shuffle(array: ShoppingItem[]) {
  //   const foo = [...array];
  //   let currentIndex = array.length;
  //   let temporaryValue;
  //   let randomIndex;
  //   console.log('items', this.items);

  //   // While there remain elements to shuffle...
  //   while (currentIndex !== 0) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // And swap it with the current element.
  //     temporaryValue = foo[currentIndex];
  //     foo[currentIndex] = foo[randomIndex];
  //     foo[randomIndex] = temporaryValue;
  //   }

  //   return foo;
  // }
}

</script>

<style scoped lang="scss">

.tile {
  display: inline-block;
}

.list-enter-active, .list-leave-active {
  transition: opacity 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
}
.list-move {
  transition: transform 1s;
}
</style>
