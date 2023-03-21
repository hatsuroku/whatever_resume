<template>
  <div class="text-lg flex font-bold text-white bg-r-emphasis pl-2 rounded-md items-center mt-5 mb-2">
    <!-- <div class="flex justify-center items-center mr-1.5 w-5 h-5 rounded-full bg-r-emphasis text-white"> -->
      <i class="mr-2" :class="props.icon"></i>
    <!-- </div> -->
    <div><slot></slot></div>
  </div>
</template>
<script setup>
const props = defineProps(['icon']);
</script>