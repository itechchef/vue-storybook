<template>
  <div :class="containerClasses">
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>
    <div class="relative">
      <div v-if="showIcon" :class="iconClasses">
        <slot name="icon" />
      </div>
      <input
        :type="type"
        :id="id"
        v-model="inputValue"
        :class="classes"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        @focus="(e) => $emit('focus', e)"
        @change="(e) => $emit('change', e)"
        @blur="(e) => $emit('blur', e)"
        @keydown="(e) => $emit('keydown', e)"
      />
      <svg v-if="state === 'success'" class="absolute text-green-500 right-2 top-1/2 -translate-y-1/2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      <svg v-if="state === 'error'" class="absolute text-red-500 right-2 top-1/2 -translate-y-1/2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
    </div>
    <div v-if="description" :class="descriptionClasses">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    /**
     * id to pass to the text field
     */
    id: {
      type: String,
    },
    type: {
      type: String,
    },
    className: {
      type: [String, Object],
    },
    containerClassName: {
      type: [String, Object],
    },
    /**
     * The value to pass to the text field
     */
    value: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
    /**
     * adds required to the input element
     */
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1
      }
    },
  },

  computed: {
    classes() {
      let classes = {
        "text-cool-gray-900 text-base placeholder-cool-gray-500 bg-cool-gray-50 border border-cool-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-cool-gray-700 dark:border-cool-gray-600 dark:placeholder-cool-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500": true,
        "text-xs !p-2": this.size === "small",
        "p-2.5": this.size === "medium",
        "text-lg p-3": this.size === "large",
        "bg-green-50 border-green-500 pr-8": this.state === "success",
        "bg-red-50 !border-red-500 pr-8": this.state === "error",
        "text-cool-gray-400 cursor-not-allowed": this.disabled || this.readonly,
        "!pl-9": this.showIcon,
      };

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
    labelClasses() {
      return {
        "block text-sm font-medium text-cool-gray-900 dark:text-white mb-2": true,
      };
    },
    descriptionClasses() {
      return {
        "text-xs font-inter mt-1": true,
        "text-green-500": this.state === "success",
        "text-red-600": this.state === "error",
      };
    },
    iconClasses() {
      return {
        "absolute text-cool-gray-500 left-2 top-1/2 -translate-y-1/2 w-5 h-5": true,
      }
    },
    containerClasses() {
      let classes = {};

      if (typeof this.containerClassName === "string") {
        classes = { ...classes, [this.containerClassName]: true };
      } else if (typeof this.containerClassName === "object") {
        classes = { ...classes, ...this.containerClassName };
      }

      return classes;
    },
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>
