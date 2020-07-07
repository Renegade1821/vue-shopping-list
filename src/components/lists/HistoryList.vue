<template>
  <div class="history">
    <ul>
      <li v-for="item in history" :key="item.title">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/store';

@Component
export default class HistoryList extends Vue {
  history = store.state.history;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.history {
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
