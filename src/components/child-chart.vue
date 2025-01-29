<template>
  <div id="chart">
    {{ text }}
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      text: "旧的不去",
    };
  },
  methods: {
    reset() {
      this.text = "旧的不去";
    },
    showChart() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.text = "新的不来";
          resolve();
        }, 1000);
      });
    },
  },
};
</script>
  
  <style>
</style>
  