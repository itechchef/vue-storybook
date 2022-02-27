<template>
  <div class="mb-4">
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>
    <div class="relative">
      <textarea
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
      <svg v-if="state === 'success'" class="absolute text-green-500 right-4 top-1/2 -translate-y-1/2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      <svg v-if="state === 'error'" class="absolute text-red-500 right-4 top-1/2 -translate-y-1/2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
    </div>
    <div v-if="description" :class="descriptionClasses">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Textarea",
  props: {
    /**
     * id to pass to the textarea field
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
    /**
     * The value to pass to the textarea field
     */
    value: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
    /**
     * Required property to the textarea element
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
    iconName: {
      type: String,
      default: "",
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
        "text-xs": this.size === "small",
        "text-base": this.size === "medium",
        "text-lg": this.size === "large",
        "bg-green-50 border-green-500 pr-8": this.state === "success",
        "bg-red-50 !border-red-500 pr-8": this.state === "error",
        "text-cool-gray-400 cursor-not-allowed": this.disabled || this.readonly,
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
