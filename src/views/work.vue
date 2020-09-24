<template>
  <div class="work">
    <div class="work-list">
      <div class="background" ref="back"></div>
      <div class="kliniku list shrink" ref="kliniku">
        <transition name="detail">
          <div class="detail" v-if="isDetail">
            <h2>Kliniku</h2>
            <p>This is a Docter consulting Website</p>
            <p>
              I build this web with HTML, CSS, Vue.Js, Express.Js, Node.Js, and
              MongoDB
            </p>
            <p>Please note that this isn't my design, only the code</p>
          </div>
        </transition>

        <div class="img">
          <img src="../../src/assets/kliniku.svg" alt />
        </div>

        <div class="tool">
          <div class="btn" ref="btn">
            <a
              href="https://github.com/GunawanAhmad/Sisfo-Klinik-Full-Stack"
              class="code"
              >Code</a
            >
            <button v-if="isDetail" @click="detail" ref="image">Image</button>
            <button class="detail" @click="detail" v-else>Detail</button>
          </div>
          <div class="icon" @click="expandProject">
            <div v-if="!isExpand">
              <span>
                <i class="fas fa-expand"></i>
              </span>
            </div>
            <div v-else>
              <span>
                <i class="fas fa-compress"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="warn hide" ref="warn">
      <span>
        <i class="fas fa-info-circle"></i>
      </span>
      <p>This is not my design, only the code!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpand: false,
      icon: "fas fa-expand",
      isDetail: false,
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
      this.$refs.back.classList.toggle("show");
      this.$refs.kliniku.classList.toggle("expand");
      this.$refs.kliniku.classList.toggle("shrink");
      this.isExpand = !this.isExpand;
      this.isDetail = false;
    },
    detail() {
      this.isDetail = !this.isDetail;
      this.$refs.image.classList.toggle("show");
    },
  },
};
</script>

<style scoped src="../../public/styles/work.css">
</style>