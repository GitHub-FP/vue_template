<template>
  <div class="hello">
    <h1 v-on:click="clicktest">{{ msg }}</h1>
    <h1>{{ testCount }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapState("test", ["testCount"]),
  },
  methods: {
    clicktest() {
      this;
      debugger;
    },
  },
});
</script>
