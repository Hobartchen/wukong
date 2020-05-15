<template>
  <div>
    <nav
      id="nav"
      class="navbar navbar-expand-md pb-4 shadow"
      :class="{
        'navbar-light bg-light': type != 'reg',
        'navbar-dark bg-black text-light py-sm-4': type == 'reg',
        sticky: sticky,
      }"
    >

      <!-- Branding -->
      
      <a href="./index.html">
        <img v-if="type != 'reg'"
          src="./images/black.png">
        </img>

        <img v-if="type == 'reg'"
          src="./images/white.png">
        </img>
      </a>
      
      <!-- collapse button -->
      <button
        v-if="type == 'main'"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navbar Content -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav w-100 d-flex justify-content-between">
          <li></li>
          <li class="nav-item">
            <div class="col">

              <div
                class="row nav-title"
                :class="{ 'nav-title-underline': type == 'main' }">

                <span class="mx-auto">Miners Gold Brewery</span>

              </div>

              <div v-if="type == 'main'" class="row text-center nav-list">

                <div class="col-md">
                  <a href="about.html" class="nav-link text-dark">About</a>
                </div>
                <div class="col-md">
                  <a href="beers.html" class="nav-link text-dark">Beers</a>
                </div>
                <div class="col-md">
                  <a href="contact.html" class="nav-link text-dark">Contact</a>
                </div>
                <div class="col-md">
                  <a href="news.html" class="nav-link text-dark">News</a>
                </div>

              </div>
            </div>
          </li>

          <!-- Login entry -->
          <li class="nav-item">

            <div
              v-if="type == 'main'"
              class="row h-100 align-items-center justify-content-center text-center"
            >
              <a href="login.html" class="col-md nav-link text-dark">Login</a>
              <span class="acc-div"></span>
              <a href="register.html" class="col-md nav-link text-dark"
                >Register</a
              >
            </div>

            <div
              v-if="type == 'reg'"
              class="row h-100 align-items-center justify-content-center text-center"
              style="visibility:hidden;"
            >
              <a href="login.html" class="col-md nav-link text-dark">Login</a>
              <span class="acc-div"></span>
              <a href="register.html" class="col-md nav-link text-dark"
                >Register</a
              >
            </div>

            <div
              v-if="type != 'main' && type != 'reg'"
              class="row h-100 align-items-center justify-content-center text-center pr-2"
            >
              <div>Welcome, {{ type }}!</div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div id="space"></div>
  </div>
</template>

<script>
module.exports = {
  props: {
    type: String, // main, reg
  },
  data() {
    return {
      sticky: false,
    };
  },
  mounted() {
    $(window).on("resize", () => {
      this.setHeight();
    });
    $(window).on("scroll", () => {
      t = this.atTop();
      this.sticky = !t;
      this.setHeight(t);
    });
  },
  components: {},
  methods: {
    atTop() {
      return window.pageYOffset <= 0;
    },
    setHeight() {
      $("#space").height(!this.atTop() ? $("#nav").outerHeight() : 0);
    },
  },
};
</script>

<style scoped>
.sticky {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}

#nav {
  box-sizing: border-box;
  min-height: 80px;
}
.nav-title {
  position: relative;
  font-size: 2.2em;
  font-weight: 500;
  padding-bottom: 0.2em;
}

.nav-title-underline::before {
  content: "";
  position: absolute;
  left: 20%;
  bottom: 0;
  width: 60%;
  border-bottom: 2px solid black;
}

.bg-black {
  background: black;
}

.nav-list {
  padding-top: 1em;
}

.nav-list > div {
  border-right: 2px solid black;
  padding-left: 2em;
  padding-right: 2em;
}

.nav-list > div:last-child {
  border-right: none;
}

span.acc-div {
  margin: 0 1em;
  height: 1em;
  border-right: 2px solid black;
}

@media only screen and (max-width: 768px) {
  .nav-list > div.col-md {
    border-right: none;
  }

  span.acc-div {
    display: none;
  }

  .nav-link {
    font-weight: 500;
  }
}
</style>
