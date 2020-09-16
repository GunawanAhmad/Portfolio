<template>
  <div class="navbar">
    <!-- <div class="cursor"></div> -->
    <nav>
      <div class="logo">Ga.</div>
      <div class="direct">
        <div class="home">
          <router-link to="/">
            <i class="icon fa fa-home fa"></i>
          </router-link>
        </div>
        <div class="profile">
          <router-link to="/about">
            <i class="fas fa-user"></i>
          </router-link>
        </div>

        <div class="skills">
          <router-link to="/skills">
            <i class="fas fa-tools"></i>
          </router-link>
        </div>
        <div class="work">
          <router-link to="/work">
            <i class="fas fa-eye"></i>
          </router-link>
        </div>
        <div class="contact">
          <router-link to="/contact">
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
      <div class="home">
        <router-link to="/">
          <i class="icon fa fa-home fa"></i>
        </router-link>
      </div>
      <div class="profile">
        <router-link to="/about">
          <i class="fas fa-user"></i>
        </router-link>
      </div>

      <div class="skills">
        <router-link to="/skills">
          <i class="fas fa-tools"></i>
        </router-link>
      </div>
      <div class="work">
        <router-link to="/work">
          <i class="fas fa-eye"></i>
        </router-link>
      </div>
      <div class="contact">
        <router-link to="/contact">
          <i class="fas fa-address-card"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    slide() {
      this.$refs.nav.classList.toggle("slide");
    },
  },
  // mounted() {
  //   let cursor = document.querySelector(".cursor");
  //   document.addEventListener("mousemove", (e) => {
  //     cursor.setAttribute("style", `top : ${e.pageY}px; left : ${e.pageX}px`);
  //   });

  //   document.addEventListener("click", () => {
  //     cursor.classList.add("click");

  //     setTimeout(() => {
  //       cursor.classList.remove("click");
  //     }, 300);
  //   });
  // },
};
</script>

<style scoped src="../../public/styles/nav.css">
</style>