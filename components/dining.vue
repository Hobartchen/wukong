<template>
  <div class="root w-100 row py-5 justify-content-center">
    
    <!-- left text -->
    <div
      v-if="side == 'right' && md"
      class="col-md-4 text-left"
      :class="`dining-left-${index}`"
    >
      <div :class="`dining-text-${index}`">
        <h1>{{ title }}</h1>
        <p>{{ title }}</p>
        <small>{{ title }}</small>
      </div>
    </div>

    <!-- image -->
    <div class="col-md-8 text-center" :class="`dining-img-${index}`">
      <img
        :src="img"
        :alt="title"
        class="my-5"
        :class="`dining-img-${index}`"
      />
    </div>

    <!-- right text -->
    <div
      v-if="side == 'left' || !md"
      class="col-md-4 text-left"
      :class="`dining-right-${index}`"
    >
      <div :class="`dining-text-${index}`">
        <h1>{{ title }}</h1>
        <p>{{ title }}</p>
        <small>{{ title }}</small>
      </div>
    </div>

  </div>
</template>

<script>
module.exports = {
  props: {
    img: String,
    title: String,
    side: String,
    index: String,
  },
  data() {
    return {
      md: true,
    };
  },
  computed: {},
  beforemount() {},
  mounted() {
    this.md = window.innerWidth > 768;
    $(window).on("resize", () => {
      this.md = window.innerWidth > 768;
    });
  },
  methods: {},
};
</script>

<style scoped>
.root {
  background-color: grey;
}
[class*="dining-img-"] {
  background-color: white;
  min-height: 300px;
  max-width: 600px;
  width: 100%;
}
</style>
