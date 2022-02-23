<template>
  <button :class="classes" @click="onClick" :id="id" :type="type" :disabled="disabled">
    {{ label }}
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    /**
     * id to pass to the button
     */
    id: {
      type: String,
    },
    /**
     * Label of the button
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * The size of a button is exposed on the component
     */
    size: {
      type: String,
      default: "base",
      validator: function (value) {
        return (
          ["extra-small", "small", "base", "large", "extra-large"].indexOf(
            value
          ) !== -1
        );
      },
    },
    /**
     * The color of a button is exposed on the component
     */
    color: {
      type: String,
      default: "primary",
      validator: function (value) {
        return (
          [
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "dark",
            "white",
            "orange2",
            "blue2",
            "magenta",
            "purple",
          ].indexOf(value) !== -1
        );
      },
    },
    /**
     * Disabled property which causes the button to be disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Outline property which causes the button to be outlined
     */
    outlined: {
      type: Boolean,
      default: false,
    },
    /**
     * Pills property which causes the button to be rounded
     */
    pills: {
      type: Boolean,
      default: false,
    },
    className: {
      type: [String, Object],
    },
    /**
     * The type of a button is exposed on the component
     */
    type: {
      type: String,
      validator: function (value) {
        return ["button", "submit", "reset"].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      let classes = {
        "text-base text-center font-inter font-medium focus:ring-4 border py-2 px-3 rounded-lg": true,
        "text-white hover:text-white focus:text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-600 focus:ring-blue-300 border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":
          this.color === "primary",
        "text-cool-gray-700 hover:text-cool-gray-700 focus:text-cool-gray-700 bg-cool-gray-200 hover:bg-cool-gray-300 focus:bg-cool-gray-200 focus:ring-cool-gray-100 border-cool-gray-700 dark:bg-cool-gray-200 dark:hover:bg-cool-gray-300 dark:focus:ring-cool-gray-100":
          this.color === "secondary",
        "text-cool-gray-900 bg-white hover:bg-gray-100 border-gray-200 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700":
          this.color === "white",
        "text-white hover:text-white focus:text-white bg-cool-gray-700 hover:bg-cool-gray-800 focus:bg-cool-gray-700 focus:ring-cool-gray-300 border-cool-gray-700 dark:bg-cool-gray-800 dark:hover:bg-cool-gray-700 dark:focus:bg-cool-gray-800 dark:focus:ring-cool-gray-800":
          this.color === "dark",
        "text-white hover:text-white focus:text-white bg-red-500 hover:bg-red-800 focus:bg-red-500 focus:ring-red-300 border-red-500 dark:bg-red-500 dark:hover:bg-red-800 dark:focus:bg-red-500 dark:focus:ring-red-800":
          this.color === "danger",
        "text-white hover:text-white focus:text-white bg-green-600 hover:bg-green-700 focus:bg-green-600 focus:ring-green-300 border-green-600 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800":
          this.color === "success",
        "text-cool-gray-900 hover:text-cool-gray-900 focus:text-cool-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-400 focus:ring-yellow-300 border-yellow-400 dark:focus:ring-yellow-900":
          this.color === "warning",
        "text-white hover:text-white focus:text-white bg-orange2-600 hover:bg-orange2-700 focus:bg-orange2-600 focus:ring-orange2-300 border-orange2-600 dark:focus:ring-orange2-900":
          this.color === "orange2",
        "text-white hover:text-white focus:text-white bg-blue2-500 hover:bg-blue2-600 focus:bg-blue2-500 focus:ring-blue2-300 border-blue2-500 dark:focus:ring-blue2-900":
          this.color === "blue2",
        "text-white hover:text-white focus:text-white bg-magenta-600 hover:bg-magenta-700 focus:bg-magenta-600 focus:ring-magenta-300 border-magenta-600 dark:focus:ring-magenta-900":
          this.color === "magenta",
        "text-white hover:text-white focus:text-white bg-purple-500 hover:bg-purple-700 focus:bg-purple-600 focus:ring-purple-300 border-purple-500 dark:focus:ring-purple-900":
          this.color === "purple",
        "bg-transparent dark:bg-transparent": this.outlined,
        "text-blue-600": this.outlined && this.color === "primary",
        "text-cool-gray-700": this.outlined && this.color === "secondary",
        "text-cool-gray-700": this.outlined && this.color === "dark",
        "text-red-500": this.outlined && this.color === "danger",
        "text-green-600": this.outlined && this.color === "success",
        "text-yellow-400": this.outlined && this.color === "warning",
        "text-orange2-600": this.outlined && this.color === "orange2",
        "text-blue2-500": this.outlined && this.color === "blue2",
        "text-magenta-600": this.outlined && this.color === "magenta",
        "text-purple-500": this.outlined && this.color === "purple",
        "disabled:text-gray-400 disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:cursor-not-allowed":
          this.disabled,
        "text-xs px-3 py-2": this.size === "extra-small",
        "text-sm px-3 py-2": this.size === "small",
        "text-base font-medium px-5 py-2.5": this.size === "base",
        "text-lg font-bold px-5 py-3": this.size === "large",
        "text-xl font-extrabold px-6 py-3.5": this.size === "extra-large",
        "rounded-full": this.pills,
      };

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
  },

  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
