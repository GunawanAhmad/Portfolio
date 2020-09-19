<template>
  <div class="skills">
    <div class="text">
      <h1>
        <span class="hov">W</span>
        <span class="hov">h</span>
        <span class="hov">a</span>

        <span class="hov">t</span>
        <span class="space"></span>
        <span class="hov">I</span>
        <span class="space"></span>
        <span class="hov">D</span>
        <span class="hov">o</span>
      </h1>

      <p>
        The main area of my expertise is front end development
        (client side of the web).
      </p>

      <p>Build beautiful and interactive Web Application with HTML, CSS, and Javascript or Vue.js.</p>

      <p>I also have full stack development experience with Node.Js and MongoDB.</p>
      <p>
        Visit my
        <a href="#">Linkedln</a> profile for more details or just
        <router-link to="/contact">contact me.</router-link>
      </p>
    </div>
    <div class="illus">
      <div class="front__end">
        <div class="vue" @mouseover="hover">
          Vue.Js
          <span>
            <i class="fab fa-vuejs"></i>
          </span>
        </div>
        <div class="js">
          Javascript
          <span>
            <i class="fab fa-js-square"></i>
          </span>
        </div>
        <div class="sass">
          Sass
          <span>
            <i class="fab fa-sass"></i>
          </span>
        </div>
        <div class="css">
          CSS
          <span>
            <i class="fab fa-css3-alt"></i>
          </span>
        </div>
        <div class="html">
          HTML
          <span>
            <i class="fab fa-html5"></i>
          </span>
        </div>
      </div>
      <div class="back__end">
        <div class="express">
          Express.Js
          <span>
            <i class="fab fa-node-js"></i>
          </span>
        </div>
        <div class="node">
          Node.Js
          <span>
            <i class="fab fa-node"></i>
          </span>
        </div>
        <div class="mongo">
          MongoDB
          <span>
            <i class="fas fa-database"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hover() {},
  },
};
</script>

<style scoped src="../../public/styles/skills.css">
</style>