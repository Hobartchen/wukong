<template>
  <div id="article-root">
    <div id="article-bg" :style="bgStyle"></div>
    <div id="article-ct" :class="{ 'article-article': type == 'article' }"><slot></slot></div>
  </div>
</template>

<script>
module.exports = {
  props: {
    img: String, // background image link, empty for white background
    type: String,
  },
  data() {
    return {
      min_height: 0,
    };
  },
  computed: {
    bgStyle() {
      return this.img
        ? `background-image: url('${this.img}');`
        : "background-color: white;";
    },
  },
  mounted() {
    this.root = $("#article-root");
    this.bg = $("#article-bg");
    this.ct = $("#article-ct");

    this.setHeight();
    $(window).on("resize", () => {
      this.setHeight();
    });
  },
  methods: {
    setHeight() {
      h = this.rootHeight();
      this.bg.height(h);
      this.ct.css("min-height", h + "px");
    },
    rootHeight() {
      return innerHeight - this.root.offset().top;
    },
  },
};
</script>

<style scoped>
#article-root {
  z-index: -10;
  position: absolute;
  background-color: black;
  width: 100%;
}
#article-bg {
  z-index: -20;
  position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  opacity: 0.4;
  width: 100%;
  filter: blur(5px);
}

#article-ct {
  z-index: 10;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;

  color: white;

  margin-left: auto;
  margin-right: auto;
}

.article-article {
  max-width: 768px;
  padding-top: 3em;
  padding-bottom: 1em;
}

@media only screen and (max-width: 768px) {
  .article-article {
    padding-left: 10%;
    padding-right: 10%;
  }
}

#article-ct h1 {
  font-size: 4em;
  padding-bottom: 0.5em;
}

#article-ct p {
  font-size: 1.5em;
}
</style>
