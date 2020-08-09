<template>
  <div class="navbar">
    <nav>
      <div class="logo">
        <h3>Ga.</h3>
      </div>
      <div class="direct">
        <div class="home">
          <i class="icon fa fa-home fa"></i>
        </div>
        <div class="profile">
          <i class="fas fa-user"></i>
        </div>
        <div class="skills">
          <i class="fas fa-tools"></i>
        </div>
        <div class="contact">
          <i class="fas fa-address-card"></i>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  font-family: "Poppins", sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  width: 70px;
  background-color: var(--second-color);
  color: var(--main-color);
  padding: 40px 0;
  box-shadow: 0 1px 3px 2px rgb(168, 168, 168);
}
.direct {
  display: flex;
  flex-direction: column;
}

.direct > div {
  margin: 20px 0;
  cursor: pointer;
}
</style>