<template>
  <div class="mb-4">
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>
    <select
      :id="id"
      :class="classes"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      @input="(e) => $emit('input', e.target.value)"
    >
      <option value="" hidden>{{ placeholder }}</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :selected="option.value ==  value"
      >
        {{ option.label }}
      </option>
    </select>
    <div v-if="description" :class="descriptionClasses">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    /**
     * id to pass to the select field
     */
    id: {
      type: String,
    },
    className: {
      type: [String, Object],
    },
    /**
     * The value to pass to the select field
     */
    value: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: "",
    },
    /**
     * adds required to the select element
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
    description: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      let classes = {
        "text-cool-gray-900 text-base placeholder-cool-gray-500 bg-cool-gray-50 border border-cool-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-cool-gray-700 dark:border-cool-gray-600 dark:placeholder-cool-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500": true,
        "text-xs !p-2": this.size === "small",
        "p-2.5": this.size === "medium",
        "text-lg p-3": this.size === "large",
        "bg-green-50 border-green-500": this.state === "success",
        "bg-red-50 !border-red-500": this.state === "error",
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
        "block text-sm font-medium text-cool-gray-900 dark:text-cool-gray-300 mb-2": true,
      };
    },
    descriptionClasses() {
      return {
        "text-xs font-inter mt-1": true,
        "text-green-500": this.state === "success",
        "text-red-600": this.state === "error",
      };
    },
  },
};
</script>
