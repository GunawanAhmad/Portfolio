<template>
  <div id="app">
    <navBar class="navbar" />

    <div class="view">
      <div class="symbols">
        <div class="top">
          <i class="fas fa-less-than"></i>
        </div>
        <div class="bottom">
          <i class="fas fa-slash"></i>
          <i class="fas fa-greater-than"></i>
        </div>
      </div>

      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import navBar from "./components/nav.vue";
export default {
  components: {
    navBar,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --main: #fafafa;
  --second: #272727;
}
#app {
  --main-color: var(--main);
  --second-color: var(--second);
}

.top {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 8;
  font-size: 24px;
  color: var(--second-color);
}

.bottom {
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
  z-index: 8;
  font-size: 24px;
  color: var(--second-color);
}

.fa-slash {
  transform: rotateZ(70deg);
  margin-right: -10px;
}
/* .navbar {
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  z-index: 99;
} */

.view {
  --main-color: var(--main);
  --second-color: var(--second);
  width: 100%;
  background-color: var(--main);
  margin: 0 0 0 8vh;
  position: relative;
}
#app {
  display: flex;
  background-color: var(--main-color);
  justify-content: space-between;
  overflow: hidden;
}

.fade-enter {
  transform: translateX(100%);
}

.fade-enter-active {
  transition: transform 500ms;
}

.fade-leave {
}
.fade-leave-active {
  opacity: 0.3;
  transition: all 500ms;
  transform: scale(0.7);
  animation: slide 500ms linear;
  animation-delay: 200ms;
}

@keyframes slide {
  to {
    transform: translateX(-100%) scale(0.7);
  }
}

@media only screen and (max-width: 900px) {
  .view {
    margin: 0px 0 0 10px;
    /* padding: 60px 0; */
  }
  .top {
    top: 60px;
  }
}
</style>
