<template>
  <div class="work-page">
    <h1 class="title-page">
      <span class="hov">M</span>
      <span class="hov">y</span>
      <span class="space"></span>
      <span class="hov">p</span>
      <span class="hov">r</span>
      <span class="hov">o</span>
      <span class="hov">j</span>
      <span class="hov">e</span>
      <span class="hov">c</span>
      <span class="hov">t</span>
      <span class="hov">s</span>
    </h1>

    <div class="work-list">
      <div class="work" v-for="work in myProjects" :key="work.key">
        <div class="information">
          <h2>0{{ work.key }}.</h2>
          <h1 class="work-title">
            {{ work.title }}
          </h1>
          <p class="description">
            {{ work.description }}
          </p>
          <div class="tools">
            <p>
              Code Tools :
              <span>{{ work.codeTools.join(", ") }}</span>
            </p>
            <p class="design">
              Design : <span>{{ work.design }}</span>
            </p>
          </div>
          <div class="links">
            <a :href="work.link" :class="work.link === '' ? 'disabled' : ''"
              >Visit</a
            >
            <a :href="work.source" :class="work.source === '' ? 'disabled' : ''"
              >Source Code</a
            >
          </div>
        </div>
        <div class="img">
          <img :src="require(`@/assets/${work.img}`)" alt="" />
        </div>
      </div>
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
      myProjects: [
        {
          title: "Web Application for Online Consultation (Kliniku)",
          description:
            "Kliniku is online consultation platform where people can fill in an online form about their health issue to send to a doctor. The doctor can response and give them medicine advice.",
          source: "https://github.com/GunawanAhmad/Sisfo-Klinik-Full-Stack",
          link: "",
          codeTools: ["VueJS", "MongoDB", "NodeJs", "ExpressJS"],
          design: "Design by Faris Azizy",
          img: "kliniku.svg",
          key: 1,
        },
        {
          title: "Radio and Checkbox Input Generator",
          description:
            "Radio and Checkbox Input Generator is a web where developer can make their custom radio and checkbox input for HTML and CSS code and make the developtment process easier and faster.",
          source: "https://github.com/GunawanAhmad/Radio-Checkbox-Generator",
          link: "https://gunawanahmad.github.io/Radio-Checkbox-Generator/",
          img: "generator.png",
          codeTools: ["HTML", "SCSS", "Javascript"],
          design: "Design by Me with Adobe XD",
          key: 2,
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped src="../../public/styles/work.css"></style>
