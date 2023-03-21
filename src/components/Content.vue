<template>
  <ul class="list-inside list-disc">
    <template v-for="line in content.split('\n')">
      <li v-if="line.startsWith('*') || line.startsWith('-')">{{ line.substring(2) }}</li>
      <div v-else-if="line.startsWith('##')" class="font-bold mt-0.5">{{ line.substring(3) }}</div>
      <div v-else>{{ line }}</div>
    </template>
  </ul>
</template>
<script setup>
const props = defineProps(['content'])
</script>