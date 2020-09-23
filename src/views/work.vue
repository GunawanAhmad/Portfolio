<template>
  <div class="work">
    <div class="work-list">
      <div class="background" ref="back"></div>
      <div class="kliniku list shrink" ref="kliniku">
        <div class="img">
          <img src="../../src/assets/kliniku.svg" alt />
        </div>

        <div class="tool">
          <div class="btn">
            <a href="https://github.com/GunawanAhmad/Sisfo-Klinik-Full-Stack">Code</a>
          </div>
          <div class="icon" @click="expandProject">
            <i :class="icon"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="warn hide" ref="warn">
      <span>
        <i class="fas fa-info-circle"></i>
      </span>
      <p>This are not my design, only the code!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpand: false,
      icon: "fas fa-expand",
    };
  },
  mounted() {
    let warn = this.$refs.warn;
    setTimeout(() => {
      warn.classList.toggle("hide");
      setTimeout(() => {
        warn.classList.toggle("hide");
      }, 5000);
    }, 1000);
  },
  methods: {
    expandProject() {
      let back = this.$refs.back;
      let kliniku = this.$refs.kliniku;
      back.classList.toggle("show");
      kliniku.classList.toggle("expand");
      kliniku.classList.toggle("shrink");
      this.isExpand = !this.isExpand;
      if (this.isExpand) {
        this.icon = "fas fa-compress";
      } else {
        this.icon = "fas fa-expand";
      }
      console.log(this.icon);
    },
  },
};
</script>

<style scoped src="../../public/styles/work.css">
</style>