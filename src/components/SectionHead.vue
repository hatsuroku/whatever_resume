<template>
  <div class="text-lg flex font-semibold text-r-emphasis items-center mt-4 mb-2">
    <div class="flex justify-center items-center mr-1.5 w-5 h-5 rounded-full bg-r-emphasis text-white">
      <i class="text-xs" :class="props.icon"></i>
    </div>
    <div><slot></slot></div>
    <div class="grow pl-3"><hr /></div>
  </div>
</template>
<script setup>
const props = defineProps(['icon']);
</script>