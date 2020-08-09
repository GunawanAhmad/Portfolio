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
  --main: white;
  --second: #141414;
}
.navbar {
  --main-color: var(--main);
  --second-color: var(--second);
}

.view {
  --main-color: var(--main);
  --second-color: var(--second);
}
#app {
  display: flex;
}
</style>
