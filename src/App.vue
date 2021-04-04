<template>
  <generic :model="model" class="root"></generic>
</template>

<script>
import Generic from "./components/Generic.vue";

export default {
  name: "App",
  components: {
    Generic
  },
  data: function() {
    return {
      key: 0,
      model: null
    };
  },
  created() {
    this.model = {
      key: this.genNum(),
      type: "col",
      items: [
        this.genNum(),
        this.genNum(),
        {
          key: this.genNum(),
          type: "row",
          items: [
            this.genNum(),
            this.genNum(),
            this.genNum(),
            {
              key: this.genNum(),
              type: "col",
              items: [this.genNum(), this.genNum(), this.genNum()]
            }
          ]
        },
        this.genNum(),
        this.genNum()
      ]
    };
  },
  methods: {
    genNum() {
      this.key++;
      return this.key;
    }
  }
};
</script>

<style scoped>
.root {
  width: 800px;
  padding: 50px;
}
</style>

<style>
* {
  box-sizing: border-box;
}
</style>