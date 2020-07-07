<template>
  <div class="container">
    <ShoppingList/>
  </div>
</template>

<script>
import ShoppingList from '@/components/lists/ShoppingList.vue';

export default {
  name: 'List',
  components: {
    ShoppingList,
  },
};
</script>
