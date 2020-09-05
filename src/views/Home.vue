<template>
  <div class="home">
    <div class="symbol">
      <div class="top">
        <i class="fas fa-less-than"></i>
      </div>
      <div class="bottom">
        <i class="fas fa-slash"></i>
        <i class="fas fa-greater-than"></i>
      </div>
      <div class="container">
        <div class="text">
          <h1>
            <span class="hov">H</span>
            <span class="hov">i</span>
            <span class="hov">,</span>
          </h1>
          <h1>
            <span class="hov">I</span>
            <span class="hov">'</span>
            <span class="hov">m</span>
            <span class="space"></span>
            <span class="hov">G</span>
            <span class="hov">u</span>
            <span class="hov">n</span>
            <span class="hov">a</span>
            <span class="hov">w</span>
            <span class="hov">a</span>
            <span class="hov">n</span>
            <span class="hov">,</span>
          </h1>
          <h1>
            <!-- <span class="hov">I</span>
            <span class="hov">'</span>
            <span class="hov">m</span>
            <span class="space"></span>
            <span class="hov">a</span>
            <span class="space"></span>-->
            <!-- <span class="typing"></span> -->
          </h1>
          <h1>
            <span class="hov">W</span>
            <span class="hov">e</span>
            <span class="hov">b</span>
            <span class="space"></span>
            <span class="hov">D</span>
            <span class="hov">e</span>
            <span class="hov">v</span>
            <span class="hov">e</span>
            <span class="hov">l</span>
            <span class="hov">o</span>
            <span class="hov">p</span>
            <span class="hov">e</span>
            <span class="hov">r</span>
            <span class="hov">.</span>
          </h1>
          <div class="deks">
            <p>Front End Developer / Freelancer</p>
          </div>
          <button class="contact-btn" @click="$router.push({path : '/about'})">
            about me
            <span class="btn-arrow">
              <i class="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
        <div class="image">
          <img src="../../src/assets/image.svg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src
// import anime from "animejs";

export default {
  name: "Home",
  data() {
    return {
      toggle: false,
    };
  },
  created() {
    // let count = 0;
    // let index = 0;
    // let currentText = "";
    // let letter = "";
    // let texts = ["Front End", "Developer."];
    // setInterval(function () {
    //   if (count == texts.length) {
    //     count = 0;
    //   }
    //   currentText = texts[count];
    //   letter = currentText.slice(0, index++);
    //   document.querySelector(".typing").innerHTML = letter;
    //   if (letter.length === currentText.length) {
    //     count++;
    //     index = 0;
    //   }
    // }, 400);
  },
};
</script>

<style  scoped src="../../public/styles/home.css">
</style>
