<template>
  <div class="container d-flex justify-content-center">
    <HistoryList/>
  </div>
</template>

<script>
import HistoryList from '@/components/lists/HistoryList.vue';

export default {
  name: 'History',
  components: {
    HistoryList,
  },
};
</script>
