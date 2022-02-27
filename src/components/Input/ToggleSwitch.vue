<template>
  <label :for="id" class="flex items-center mb-4 cursor-pointer">
    <input type="checkbox" :id="id" :checked="state" @input="onInput" :disabled="disabled" :readonly="readonly" :class="inputClass">
    <div :class="backgroundClass">
      <span :class="switchClass"></span>
    </div>
    <span :class="labelClass">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "ToggleSwitch",
  data() {
    return {
      state: false,
    }
  },
  props: {
    /**
     * id to pass to the switch
     */
    id: {
      type: String,
      requried: true,
    },
    className: {
      type: [String, Object],
    },
    switchClassName: {
      type: [String, Object],
    },
    labelClassName: {
      type: [String, Object],
    },
    /**
     * The value to pass to the switch
     */
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    inputClass() {
      return {
        "sr-only": true,
        "cursor-not-allowed": this.disabled || this.readonly,
      }
    },
    backgroundClass() {
      let classes = {
        "background relative w-11 h-6 bg-cool-gray-200 rounded-full border border-cool-gray-200 dark:bg-gray-600 dark:border-gray-600": true,
        "bg-blue-700 dark:bg-blue-700": this.state,
        "cursor-not-allowed": this.disabled || this.readonly,
      }

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
    switchClass() {
      let classes = {
        "absolute w-4 h-4 rounded-full bg-white top-1/2 -translate-y-1/2 transition-all duration-500": true,
        "right-0.5": this.state,
        "left-0.5 dark:bg-cool-gray-400": !this.state,
      }

      if (typeof this.switchClassName === "string") {
        classes = { ...classes, [this.switchClassName]: true };
      } else if (typeof this.switchClassName === "object") {
        classes = { ...classes, ...this.switchClassName };
      }

      return classes;
    },
    labelClass() {
      let classes = {
        "ml-3 text-sm font-medium text-cool-gray-500 dark:text-gray-300": true,
      }

      if (typeof this.labelClassName === "string") {
        classes = { ...classes, [this.labelClassName]: true };
      } else if (typeof this.labelClassName === "object") {
        classes = { ...classes, ...this.labelClassName };
      }

      return classes;
    }
  },

  watch: {
    value(v) {
      this.state = v;
    }
  },

  mounted() {
    this.state = this.value
  },

  methods: {
    onInput(e) {
      if (!this.disabled && !this.readonly) {
        this.state = e.target.checked;
        this.$emit("input", e.target.checked ? true : false);
      }
    }
  }
}
</script>

<style lang="css" scoped>
input[type="checkbox"]:focus + div.background {
  @apply ring-2 ring-blue-200 dark:ring-blue-800;
}

input[type="checkbox"]:focus:not(:checked) + div.background {
  @apply ring-0;
}
</style>
