<template>
  <li>
    <a :class="dropdownItemClass" :href="url">
      <div class="text-black dark:text-cool-gray-300">
        <slot name="icon" />
      </div>
      <slot />
    </a>
  </li>
</template>

<script>
export default {
  name: "DropdownItem",
  props: {
    navmenu: {
      type: Boolean,
      default: false,
    },
    className: {
      type: [String, Object],
    },
    url: {
      type: String,
      default: "#",
    },
  },
  computed: {
    dropdownItemClass() {
      let classes = {
        "flex flex-nowrap items-center gap-2 cursor-pointer hover:bg-cool-gray-100 dark:hover:bg-cool-gray-600 py-2.5 px-5": true,
      };

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
  }
};
</script>
