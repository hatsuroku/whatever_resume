<template>
  <ul class="list-inside list-disc">
    <template v-for="line in content.split('\n')">
      <li v-if="line.startsWith('*')">{{ line.substring(2) }}</li>
      <div v-else class="font-medium mt-[2px]">{{ line.substring(3) }}</div>
    </template>
  </ul>
</template>
<script setup>
const props = defineProps(['content'])
</script>