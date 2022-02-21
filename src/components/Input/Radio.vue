<template>
  <label :for="id" class="inline-block pl-6 relative cursor-pointer">
    <input :id="id" :aria-describedby="id" :checked="checked" @input="onInput" :disabled="disabled" :readonly="readonly" type="checkbox" class="input" />
    <span :class="markClass">
      <svg class="mark-icon" fill="currentColor" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="6"/></svg>
    </span>
    <span :class="labelClass">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "Radio",
  props: {
    /**
     * id to pass to the radio
     */
    id: {
      type: String,
      requried: true,
    },
    className: {
      type: [String, Object],
    },
    /**
     * The value to pass to the radio
     */
    value: {
      type: [String, Boolean],
      default: true,
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
    checked: {
      type: Boolean,
      default: false,
    },
    checkedValue: {
      type: [String, Boolean],
      default: true,
    },
    uncheckedValue: {
      type: [String, Boolean],
      default: false,
    }
  },

  computed: {
    markClass() {
      let classes = {
        "mark w-4 h-4": true,
        "cursor-not-allowed": this.disabled || this.readonly,
      }

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
    labelClass() {
      return {
        "cursor-not-allowed": this.disabled || this.readonly,
      }
    }
  },

  methods: {
    onInput(e) {
      if (!this.disabled && !this.readonly) {
        if (e.target.checked) {
          this.$emit("input", this.checkedValue);
        } else {
          this.$emit("input", this.uncheckedValue);
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
.input {
  @apply sr-only;
}

.mark {
  @apply absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center rounded-full overflow-hidden bg-cool-gray-50 border border-cool-gray-300 dark:bg-cool-gray-700 dark:border-cool-gray-600;
}

.mark-icon {
  @apply opacity-0;
}

.input:focus ~ .mark {
  @apply ring-2 ring-blue-200 dark:ring-blue-800
}

.input:focus:not(:checked) ~ .mark {
  @apply ring-0;
}

.input:checked ~ .mark {
  @apply text-white bg-blue-600 border-blue-600;
}

.input:checked ~ .mark > .mark-icon {
  @apply opacity-100;
}
</style>
