<template>
  <div class="navbar">
    <nav>
      <div class="logo">
        <img src="../assets/logoName.svg" alt="" />
      </div>
      <div class="direct" ref="navList">
        <div class="active-back" ref="menuBag">
          <span class="top-white"></span>
          <span class="top-black"></span>
          <span class="bot-white"></span>
          <span class="bot-black"></span>
        </div>
        <div ref="size" class="home list" @click="menuBackgroundAnim(0)">
          <router-link to="/" data-content="Home">
            <i class="icon fa fa-home fa"></i>
          </router-link>
        </div>
        <div class="profile list" @click="menuBackgroundAnim(1)">
          <router-link to="/about" data-content="About">
            <i class="fas fa-user"></i>
          </router-link>
        </div>

        <div class="skills list" @click="menuBackgroundAnim(2)">
          <router-link to="/skills" data-content="Skills">
            <i class="fas fa-tools"></i>
          </router-link>
        </div>
        <div class="work list" @click="menuBackgroundAnim(3)">
          <router-link to="/work" data-content="My Work">
            <i class="fas fa-eye"></i>
          </router-link>
        </div>
        <div class="contact list" @click="menuBackgroundAnim(4)">
          <router-link to="/contact" data-content="Contact">
            <i class="fas fa-address-card"></i>
          </router-link>
        </div>
      </div>
      <div class="menu-toogle">
        <input type="checkbox" @click="slide" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    <div class="mob-ver" ref="nav">
      <div class="home" data-content="Home" @click="pageTransition">
        <router-link to="/">
          <i class="icon fa fa-home fa"></i>
        </router-link>
      </div>
      <div class="profile" data-content="Profile" @click="pageTransition">
        <router-link to="/about">
          <i class="fas fa-user"></i>
        </router-link>
      </div>

      <div class="skills" data-content="Skills" @click="pageTransition">
        <router-link to="/skills">
          <i class="fas fa-tools"></i>
        </router-link>
      </div>
      <div class="work" data-content="Work" @click="pageTransition">
        <router-link to="/work">
          <i class="fas fa-eye"></i>
        </router-link>
      </div>
      <div class="contact" data-content="Contact" @click="pageTransition">
        <router-link to="/contact">
          <i class="fas fa-address-card"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TransitionMixin from "../mixins/transition";
export default {
  mixins: [TransitionMixin],
  data() {
    return {
      navListSize: 0,
    };
  },
  methods: {
    slide() {
      this.$refs.nav.classList.toggle("slide");
    },
  },
  mounted() {
    this.$store.state.navList = this.$refs.navList;
    this.$store.state.menuListHeight = this.$refs.size.clientHeight;
    this.$store.state.lastVisitedPage = this.$refs.size.children[0];
    this.$store.state.lastVisitedPage.classList.toggle("active");
    this.$store.state.hover.push(document.querySelector(".logo"));
    let nav1 = document.querySelectorAll(".direct a");
    nav1.forEach((p) => {
      this.$store.state.hover.push(p);
    });

    let nav2 = document.querySelectorAll(".mob-ver div");
    nav2.forEach((p) => {
      this.$store.state.hover.push(p);
    });
  },
};
</script>

<style scoped src="../../public/styles/nav.css"></style>
