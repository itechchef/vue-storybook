<template>
  <div v-if="showAlert" :class="classes" :id="id" role="alert">
    <div class="flex-grow">
      <div><slot /></div>
      <Button v-if="moreButton" className="mt-4" label="View more" size="extra-small" :color="buttonColor" />
    </div>
    <button v-if="dismissable" @click="showAlert = false" type="button" class="ml-auto -mx-1.5 -my-1.5 p-1.5 inline-flex h-8 w-8 rounded-md" aria-label="Close">
      <span class="sr-only">Close</span>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
</template>

<script>
import Button from "../Button/Button.vue";

export default {
  name: "Alert",
  components: {
    Button,
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    /**
     * id to pass to the alert
     */
    id: {
      type: String,
    },
    /**
     * The color of a button is exposed on the component
     */
    color: {
      type: String,
      default: "success",
      validator: function (value) {
        return (
          [
            "success",
            "danger",
            "info",
            "warning",
            "dark",
          ].indexOf(value) !== -1
        );
      },
    },
    className: {
      type: [String, Object],
    },
    /**
     * Dismissable property to causes the dismiss button to be shown
     */
    dismissable: {
      type: Boolean,
      default: false,
    },
    /**
     * Property to causes the view more button to be shown
     */
    moreButton: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    classes() {
      let classes = {
        "text-sm font-inter rounded-md p-4 mb-4 flex": true,
        "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800": this.color === "success",
        "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800": this.color === "danger",
        "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800": this.color === "info",
        "text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800": this.color === "warning",
        "text-cool-gray-900 bg-cool-gray-100 dark:bg-cool-gray-700 dark:text-cool-gray-300": this.color === "dark",
      };

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
    showAlert: {
      get() {
        return this.show;
      },
      set() {
        this.$emit("dismiss")
      }
    },
    buttonColor() {
      if (this.color === "success") return "success";
      if (this.color === "danger") return "danger";
      if (this.color === "info") return "primary";
      if (this.color === "warning") return "warning";
      if (this.color === "dark") return "dark";
    }
  },
};
</script>
