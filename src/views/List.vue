<template>
  <div>
    <ShoppingList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingList from '@/components/ShoppingList.vue';

export default {
  name: 'List',
  components: {
    ShoppingList,
  },
};
</script>
