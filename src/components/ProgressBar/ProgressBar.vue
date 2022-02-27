<template>
  <div :class="containerClass">
    <div class="relative w-full h-1.5 my-1 rounded-sm overflow-hidden bg-cool-gray-200">
      <div :class="progressBarClass" :style="`width: ${percentage}%`"></div>
      <label v-if="showLabel" :class="labelClass">{{ percentage }}%</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 100,
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    alignLabel: {
      type: String,
      default: "right",
    },
    color: {
      type: String,
      default: "primary",
      validator: function (value) {
        return (
          [
            "primary",
            "danger",
            "green",
            "yellow",
            "orange2",
            "blue2",
            "magenta",
            "purple",
            "gray",
          ].indexOf(value) !== -1
        );
      },
    }
  },
  computed: {
    percentage() {
      return Math.round(100* this.value / this.total * 10) / 10;
    },
    containerClass() {
      let classes = {};

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
    progressBarClass() {
      return {
        "absolute h-full": true,
        "bg-blue-600": this.color === "primary",
        "bg-red-500": this.color === "danger",
        "bg-green-500": this.color === "green",
        "bg-white": this.color === "white",
        "bg-orange2-500": this.color === "orange2",
        "bg-blue2-500": this.color === "blue2",
        "bg-magenta-500": this.color === "magenta",
        "bg-purple-500": this.color === "purple",
        "bg-yellow-500": this.color === "yellow",
      };
    },
    labelClass() {
      return {
        "absolute -translate-y-full": true,
        "left-0": this.alignLabel === "left",
        "right-0": this.alignLabel === "right",
      };
    }
  }
}
</script>
