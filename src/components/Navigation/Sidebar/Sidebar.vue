<template>
  <div :class="sidebarClass">
    <div class="flex-grow overflow-y-auto">
      <slot />
    </div>
    <div :class="bottomMenuClass">
      <span class="m-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </span>
      <span class="m-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
      <span class="m-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    color: {
      type: String,
      default: "white",
      validator: function (value) {
        return (
          [
            "white",
            "dark",
            "gray",
          ].indexOf(value) !== -1
        );
      },
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: String,
      default: "icon",
      validator: function (value) {
        return ["icon", "letter"].indexOf(value) != -1
      }
    },
  },
  computed: {
    sidebarClass() {
      let classes = {
        "text-white w-64 p-2 min-h-screen h-full flex flex-col justify-between": true,
        "!text-cool-gray-900 bg-white border-r border-cool-gray-300": this.color === "white",
        "bg-cool-gray-800": this.color === "dark",
        "!text-cool-gray-900 bg-cool-gray-100": this.color === "gray",
        "bg-blue-700": this.color === "primary",
        "bg-blue2-600": this.color === "blue2",
        "bg-purple-700": this.color === "purple",
        "bg-magenta-700": this.color === "magenta",
        "bg-orange2-700": this.color === "orange2",
        "bg-red-800": this.color === "red",
        "bg-green-600": this.color === "green",
        [this.color]: true,
        "collapsed !w-14 !px-0": this.collapsed,
        [`${this.menu}-menu`]: true,
      }

      if (typeof this.className === "string") {
        classes = { ...classes, [this.className]: true };
      } else if (typeof this.className === "object") {
        classes = { ...classes, ...this.className };
      }

      return classes;
    },
    bottomMenuClass() {
      return {
        "w-full flex items-center justify-evenly py-3 text-white": true,
        "!text-cool-gray-500": this.color === "white",
        "!text-cool-gray-400": this.color === "dark",
        "!text-cool-gray-900": this.color === "gray",
        "!text-blue-300": this.color === "primary",
        "flex-wrap": this.collapsed,
      }
    }
  }
}
</script>
