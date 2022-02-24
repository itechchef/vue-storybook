<template>
  <div>
    <a :class="classes" :href="url" @click="isOpen = !isOpen">
      <slot name="icon" class="menu-icon"></slot>
      <div class="flex-grow px-4 menu-title">{{ title }}</div>
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
          badge
        "
        >{{ badgeCount }}</span
      >
      <span v-if="hasSubMenu" class="chevron">
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

    <div v-if="hasSubMenu && isOpen" class="submenu">
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
    },
  },
  computed: {
    classes() {
      let classes = {
        "p-2 w-full rounded-lg flex flex-nowrap items-center justify-between cursor-default menu-item": true,
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
    },
  },
  mounted() {
    this.isOpen = this.open;
  },
};
</script>

<style lang="css" scoped>
.white .bg-active {
  @apply bg-cool-gray-100;
}

.white.collapsed .bg-active::before {
  @apply bg-cool-gray-900;
}

.dark .bg-active {
  @apply bg-cool-gray-700;
}

.dark.collapsed .bg-active::before  {
  @apply bg-cool-gray-500;
}

.gray .bg-active {
  @apply bg-cool-gray-200;
}

.gray.collapsed .bg-active::before {
  @apply bg-cool-gray-900;
}

.primary .bg-active {
  @apply bg-blue-500;
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

.collapsed .menu-item {
  @apply relative justify-center rounded-none;
}

.collapsed.letter-menu .menu-item {
  @apply py-1.5;
}

.collapsed .bg-active::before {
  content: "";
  @apply absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md w-1.5 h-8 bg-cool-gray-500;
}

.collapsed.icon-menu .menu-title {
  @apply hidden;
}

.collapsed.letter-menu .menu-title {
  font-size: 0;
  @apply first-letter:uppercase first-letter:text-xl first-letter:font-semibold;
}

.collapsed.letter-menu .menu-icon {
  @apply hidden;
}

.collapsed .submenu {
  @apply hidden;
}

.collapsed .chevron {
  @apply hidden;
}

.collapsed .badge {
  @apply w-4 h-4 absolute right-2 bottom-1;
}
</style>
