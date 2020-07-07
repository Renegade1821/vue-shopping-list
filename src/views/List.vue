<template>
  <div class="container d-flex justify-content-center">
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
