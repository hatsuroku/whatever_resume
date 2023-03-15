<template>
  <div class="flex text-sm">
    <div class="mr-1.5"><i :class="props.icon"></i></div>
    <div><slot></slot></div>
  </div>
</template>
<script setup>
const props = defineProps(['icon']);
</script>