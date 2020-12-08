<template>
  <div class="home"><HelloWorld v-bind:msg="msg" /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js + TypeScript App",
    };
  },
  components: {
    HelloWorld,
  },
});
</script>
