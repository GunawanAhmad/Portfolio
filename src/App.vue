<template>
  <div id="app">
    <navBar class="navbar" />
    <router-view class="view" />
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
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  z-index: 99;
}

.view {
  --main-color: var(--main);
  --second-color: var(--second);
  width: 100%;
  background-color: var(--main);
}
#app {
  display: flex;
  background-color: var(--main-color);
  justify-content: space-between;
}
</style>
