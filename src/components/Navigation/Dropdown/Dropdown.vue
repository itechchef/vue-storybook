<template>
  <div class="inline-block relative" @click.stop>
    <component
      :is="navmenu ? 'a' : 'button'"
      :class="dropdownClass"
      @click="showList = !showList"
    >
      <slot name="menu-content">
        {{ text }}
      </slot>
      <svg v-if="!navmenu" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </component>

    <ul v-if="showList" :class="listClass"><slot /></ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      showList: false,
    }
  },
  props: {
    navmenu: {
      type: Boolean,
      default: false,
    },
    className: {
      type: [String, Object],
    },
    listClassName: {
      type: [String, Object],
    },
    text: {
      type: String,
      default: "",
    }
  },
  computed: {
    dropdownClass() {
      let classes = {
        "flex items-center gap-1 justify-center": true,
        "bg-blue-600 text-white text-base font-medium py-3 px-4 rounded-lg": !this.navmenu,
        "bg-transparent cursor-default dark:text-cool-gray-200": this.navmenu,
      };

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
    listClass() {
      let classes = {
        "text-cool-gray-500 bg-white drop-shadow flex flex-col flex-nowrap gap-1 rounded-md overflow-hidden list-none min-w-[12.25rem] mt-1 p-0 dark:text-cool-gray-300 dark:bg-cool-gray-700 absolute bottom-0 translate-y-full": true,
      };

      if (typeof this.listClassName === "string") {
        classes = { ...classes, [this.listClassName]: true };
      } else if (typeof this.listClassName === "object") {
        classes = { ...classes, ...this.listClassName };
      }

      return classes;
    }
  },
  mounted() {
    const _instance = this;
    document.addEventListener("click", () => {
      _instance.showList = false;
    })
  }
};
</script>
