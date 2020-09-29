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
        The main area of my expertise is front end development (client side of
        the web).
      </p>

      <p>
        Build beautiful and interactive Web Application with HTML, CSS, and
        Javascript or Vue.js.
      </p>

      <p>
        I also have full stack development experience with Node.Js and MongoDB.
      </p>
      <p>
        Visit my
        <a href="https://linkedin.com/in/gunawan-ahmad-0148441b7">Linkedln</a>
        profile for more details or just
        <router-link to="/contact">contact me.</router-link>
      </p>
    </div>
    <div class="illus">
      <!-- <h1>My Tools</h1> -->
      <div class="front__end">
        <div
          class="vue stack"
          @click="
            showInfo(
              'Vue.Js',
              'fab fa-vuejs',
              'Vue Js is a Javascript framework, I use Vue.Js when i have to build Medium or Big Project.'
            )
          "
        >
          <p>Vue.Js</p>

          <span>
            <i class="fab fa-vuejs"></i>
          </span>
        </div>
        <div
          class="js stack"
          @click="
            showInfo(
              'Javascript',
              'fab fa-js-square',
              'JavaScript is used to create responsive, interactive elements for web pages, enhancing the user experience. I use pure Javascript when I have to build small project only. '
            )
          "
        >
          <p>Javascript</p>

          <span>
            <i class="fab fa-js-square"></i>
          </span>
        </div>
        <div
          class="sass stack"
          @click="
            showInfo(
              'Sass',
              'fab fa-sass',
              'Sass help me to keep things organised in CSS especially when I have to deal with Big project.'
            )
          "
        >
          <p>Sass</p>

          <span>
            <i class="fab fa-sass"></i>
          </span>
        </div>
        <div
          class="css stack"
          @click="
            showInfo(
              'CSS',
              'fab fa-css3-alt',
              'CSS is a tool for Create beautiful, responsive layout, and implementing the design into the Web App'
            )
          "
        >
          <p>CSS</p>

          <span>
            <i class="fab fa-css3-alt"></i>
          </span>
        </div>
        <div
          class="html stack"
          @click="
            showInfo(
              'HTML',
              'fab fa-html5',
              'HTML is a standard for describing a structure and presentation of information in a web.'
            )
          "
        >
          <p>HTML</p>

          <span>
            <i class="fab fa-html5"></i>
          </span>
        </div>
      </div>
      <div class="back__end">
        <div
          class="express stack"
          @click="
            showInfo(
              'Express.Js',
              'fab fa-node-js',
              'Express.Js is a framework for Node.Js, '
            )
          "
        >
          <p>Express.Js</p>

          <span>
            <i class="fab fa-node-js"></i>
          </span>
        </div>
        <div class="node stack">
          <p>Node.Js</p>

          <span>
            <i class="fab fa-node"></i>
          </span>
        </div>
        <div class="mongo stack">
          <p>MongoDB</p>

          <span>
            <i class="fas fa-database"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="warn hide" ref="warn">
      <span>
        <i class="fas fa-info-circle"></i>
      </span>
      <p>Click the stack for more information!</p>
    </div>
    <div class="skills-info" ref="skillInfo">
      <div class="card">
        <div class="logo">
          <i :class="icon"></i>
        </div>
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <div class="close" @click="closeInfo">
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      icon: "",
      content: "",
    };
  },
  mounted() {
    let warn = this.$refs.warn;
    setTimeout(() => {
      warn.classList.toggle("hide");
      setTimeout(() => {
        warn.classList.toggle("hide");
      }, 3000);
    }, 3000);
  },

  methods: {
    showInfo(title, icon, content) {
      this.title = title;
      this.icon = icon;
      this.content = content;
      let info = this.$refs.skillInfo;
      info.classList.toggle("show");
    },
    closeInfo() {
      let info = this.$refs.skillInfo;
      info.classList.toggle("show");
    },
  },
};
</script>

<style scoped src="../../public/styles/skills.css">
</style>