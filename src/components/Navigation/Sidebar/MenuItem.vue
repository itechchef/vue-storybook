<template>
  <div>
    <a :class="classes" :href="url" @click="isOpen = !isOpen">
      <slot name="icon"></slot>
      <div class="flex-grow px-4">{{ title }}</div>
      <span
        v-if="badgeCount > 0"
        class="
          text-xs text-red-800
          font-medium
          bg-red-200
          w-5
          h-5
          flex
          items-center
          justify-center
          rounded-full
          leading-none
        "
        >{{ badgeCount }}</span
      >
      <span v-if="hasSubMenu">
        <svg
          v-if="isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </a>

    <div v-if="hasSubMenu && isOpen">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    className: {
      type: [String, Object],
    },
    iconName: {
      type: String,
    },
    title: {
      type: String,
    },
    badgeCount: {
      type: Number,
    },
    hasSubMenu: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: null,
    }
  },
  computed: {
    classes() {
      let classes = {
        "p-2 w-full rounded-lg flex flex-nowrap items-center justify-between cursor-default": true,
        "bg-active": this.active,
      };

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
  },
  watch: {
    open(value) {
      this.isOpen = value;
    }
  },
  mounted() {
    this.isOpen = this.open;
  }
};
</script>

<style lang="css" scoped>
.primary .bg-active {
  @apply bg-blue-500;
}

.secondary .bg-active {
  @apply bg-cool-gray-200;
}

.dark .bg-active {
  @apply bg-cool-gray-700;
}

.white .bg-active {
  @apply bg-white;
}

.orange2 .bg-active {
  @apply bg-orange2-600;
}

.blue2 .bg-active {
  @apply bg-blue2-500;
}

.red .bg-active {
  @apply bg-red-700;
}

.green .bg-active {
  @apply bg-green-500;
}

.magenta .bg-active {
  @apply bg-magenta-600;
}

.purple .bg-active {
  @apply bg-purple-600;
}
</style>
