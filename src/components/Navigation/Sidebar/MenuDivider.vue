<template>
  <div class="w-full h-0 my-4 border-[0.5px] border-color"></div>
</template>

<script>
export default {
  name: "MenuDivider",
}
</script>

<style lang="css" scoped>
.primary .border-color {
  @apply border-blue-500;
}

.secondary .border-color {
  @apply border-cool-gray-200;
}

.dark .border-color {
  @apply border-cool-gray-700;
}

.white .border-color {
  @apply border-white;
}

.orange2 .border-color {
  @apply border-orange2-600;
}

.blue2 .border-color {
  @apply border-blue2-500;
}

.red .border-color {
  @apply border-red-700;
}

.green .border-color {
  @apply border-green-500;
}

.magenta .border-color {
  @apply border-magenta-600;
}

.purple .border-color {
  @apply border-purple-600;
}
</style>