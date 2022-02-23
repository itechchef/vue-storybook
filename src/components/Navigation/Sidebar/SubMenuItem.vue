<template>
  <a :href="url" class="block pl-12 py-2 cursor-default">{{ title }}</a>
</template>

<script>
export default {
  name: "SubMenuItem",
  props: {
    title: {
      type: String,
    },
    url: {
      type: String,
      default: null,
    }
  }
}
</script>