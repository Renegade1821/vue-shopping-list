<template>
  <div class="shoppingListItemTile" @click="checkTile()">
    <span class="shoppingListItemTitle">{{item.title}}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ShoppingItem } from '@/models/ShoppingItem.model';
import { store } from '../store';

@Component
export default class ShoppingListItem extends Vue {
  @Prop() private item!: ShoppingItem;

  public checkTile() {
    store.checkItem(this.item);
  }
}
</script>

<style scoped lang="scss">
.shoppingListItemTile {
  margin: 1px;
  height: 80px;
  width: 80px;
  border: 1px solid black;
  position: relative;

  &:hover {
    cursor: pointer;
    background: darken($color: #FFF, $amount: 5%);
  }
}
.shoppingListItemTitle {
  font-size: 11px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 8%);
  padding: 2px;
  width: 80px;
}
</style>
