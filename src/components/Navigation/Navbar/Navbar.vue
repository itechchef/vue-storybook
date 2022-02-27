<template>
  <div :class="navbarClass">
    <slot name="brand" />
    <div :class="menuClass"><slot /></div>
    <div :class="actionClass">
      <slot name="action" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    color: {
      type: String,
      default: "white",
      validator: function (value) {
        return (
          [
            "white",
            "dark",
          ].indexOf(value) !== -1
        );
      },
    },
    alignMenu: {
      type: String,
      default: "between",
      validator: function (value) {
        return (
          [
            "start",
            "end",
            "between",
            "center"
          ].indexOf(value) !== -1
        )
      }
    },
    className: {
      type: [String, Object],
    },
  },
  computed: {
    navbarClass() {
      let classes = {
        "text-sm font-medium bg-white border-b border-cool-gray-200 px-2 sm:px-4 py-2.5 w-full h-16 flex flex-nowrap gap-4 items-center justify-between dark:text-cool-gray-300 dark:bg-cool-gray-800 dark:border-cool-gray-700": true,
        "text-cool-gray-500": this.color == "white",
        "!text-cool-gray-300 !bg-cool-gray-800": this.color == "dark",
      }

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
    menuClass() {
      return {
        "flex-grow flex items-center gap-3 text-sm font-medium": true,
        ["justify-" + this.alignMenu]: true,
      }
    },
    actionClass() {
      return {
        "hidden sm:flex flex-nowrap items-center gap-3": true,
      }
    }
  }
}
</script>
