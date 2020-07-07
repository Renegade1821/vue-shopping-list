<template>
  <div class="tile" @click="checkTile()">
    <span class="abbreviation">{{abbreviation}}</span>
    <span class="title">{{item.title}}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ShoppingItem } from '@/models/ShoppingItem.model';
import { store } from '../store';

@Component
export default class Tile extends Vue {
  @Prop() private item!: ShoppingItem;

  public checkTile() {
    store.checkItem(this.item);
  }

  get abbreviation(): string {
    return this.item.title.charAt(0).toUpperCase();
  }
}
</script>

<style scoped lang="scss">
.tile {
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
.abbreviation {
  position: absolute;
  font-weight: bold;
  font-size: 30px;
  left: 50%;
  top: 50%;
  margin-left: -10px;
  margin-top: -30px;
}
.title {
  font-size: 11px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 8%);
  padding: 4px;
  width: 80px;

  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 2.9em;
  line-height: 1.2em;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
}
</style>
