<template>
  <div class="navbar">
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
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../../public/styles/nav.css">
</style>