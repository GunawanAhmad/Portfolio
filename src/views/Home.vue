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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style  scoped>
.fa-slash {
  transform: rotateZ(70deg);
  margin-right: -10px;
}
.symbol {
  font-size: 30px;
  color: var(--second-color);
}

.top {
  position: absolute;
  top: 20px;
  left: 90px;
}

.bottom {
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
}
</style>
