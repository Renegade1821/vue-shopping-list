<template>
  <div class="container d-flex flex-wrap justify-content-between">
    <ShoppingList class="shoppingList mb-3"/>
    <HistoryList/>
  </div>
</template>

<script>
import ShoppingList from '@/components/lists/ShoppingList.vue';
import HistoryList from '@/components/lists/HistoryList.vue';

export default {
  name: 'List',
  components: {
    ShoppingList,
    HistoryList,
  },
};
</script>
<style scoped lang="scss">
@media (min-width: 992px) {
  .shoppingList {
    margin-bottom: 0px !important;
  }
}

</style>
