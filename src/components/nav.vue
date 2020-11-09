<template>
  <div class="navbar">
    
    <nav>
      <div class="logo">
        <img src="../assets/logoName.svg" alt="">
      </div>
      <div class="direct">
        <div class="home" data-content="Home">
          <router-link to="/">
            <i class="icon fa fa-home fa"></i>
          </router-link>
        </div>
        <div class="profile" data-content="About">
          <router-link to="/about">
            <i class="fas fa-user"></i>
          </router-link>
        </div>

        <div class="skills" data-content="Skills">
          <router-link to="/skills">
            <i class="fas fa-tools"></i>
          </router-link>
        </div>
        <div class="work" data-content="My Work">
          <router-link to="/work" >
            <i class="fas fa-eye"></i>
          </router-link>
        </div>
        <div class="contact" data-content="Contact">
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
      <div class="home" data-content="Home">
        <router-link to="/">
          <i class="icon fa fa-home fa"></i>
        </router-link>
      </div>
      <div class="profile" data-content="Profile">
        <router-link to="/about">
          <i class="fas fa-user"></i>
        </router-link>
      </div>

      <div class="skills" data-content="Skills">
        <router-link to="/skills">
          <i class="fas fa-tools"></i>
        </router-link>
      </div>
      <div class="work" data-content="Work">
        <router-link to="/work">
          <i class="fas fa-eye"></i>
        </router-link>
      </div>
      <div class="contact" data-content="Contact">
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
  mounted() {

    this.$store.state.hover.push(document.querySelector('.logo'))
    let nav1 = document.querySelectorAll('.direct div')
    nav1.forEach(p => {
      this.$store.state.hover.push(p)
    })

    let nav2 = document.querySelectorAll('.mob-ver div')
    nav2.forEach(p => {
      this.$store.state.hover.push(p)
    })
  }
}



</script>

<style scoped src="../../public/styles/nav.css">
</style>