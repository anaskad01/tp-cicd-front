<template>
  <Menubar :model="items" />
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';

const items = ref([
  {
    label: 'BookCopiesssss',
    command: () => router.push('/bookcopies'),
  },
  {
    label: 'Books',
    command: () => router.push('/books'),
  },
  {
    label: 'Authors',
    command: () => router.push('/authors'),
  },
]);
</script>

<style scoped>
.p-menubar .p-menubar-root-list > li > a {
  font-weight: 600;
}
</style>
