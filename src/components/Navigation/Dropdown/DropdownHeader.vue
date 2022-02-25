<template>
  <li :class="dropdownHeaderClass">
    <slot />
  </li>
</template>

<script>
export default {
  name: "DropdownHeader",
  props: {
    className: {
      type: [String, Object],
    },
  },
  computed: {
    dropdownHeaderClass() {
      let classes = {
        "text-cool-gray-900 dark:text-cool-gray-300 py-2.5 px-5 cursor-default": true,
      };

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    }
  }
};
</script>
