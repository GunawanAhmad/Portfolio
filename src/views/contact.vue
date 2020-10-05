<template>
  <div class="contact">
    <div class="main" ref="main">
      <div class="text">
      <div class="header">
        <h1>
          <span class="hov">C</span>
          <span class="hov">o</span>
          <span class="hov">n</span>
          <span class="hov">t</span>
          <span class="hov">a</span>
          <span class="hov">c</span>
          <span class="hov">t</span>
          <span class="space"></span>
          <span class="hov">M</span>
          <span class="hov">e</span>
        </h1>
      </div>
      <form action @submit="send">
        <div class="name">
          <input type="text" placeholder="Name" required v-model="name" />
        </div>
        <div class="email">
          <input type="email" placeholder="Email address" required v-model="email" />
        </div>
        <div class="message">
          <textarea
            name
            id
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
            v-model="message"
          ></textarea>
        </div>

        <div class="send">
          <button type="submit">
            Send
            <i class="fas fa-paper-plane"></i>
          </button>
          <div class="validate">
            <p>{{ num1 }} + {{ num2 }} =</p>
            <input type="text" class="check_input" v-model="checkAnswer" required />
          </div>
        </div>
      </form>
    </div>
    <div class="social">
      <a class="email media" href="https://mail.google.com/">
        <div class="icon">
          <i class="fas fa-envelope"></i>
        </div>
        <p id="test">Gunawanfsdev@gmail.com</p>
      </a>
      <a class="twitter media" href="https://twitter.com/Gunawan10x">
        <div class="icon">
          <i class="fab fa-twitter"></i>
        </div>
        <p>Gunawan10x</p>
      </a>
      <a class="github media" href="https://github.com/GunawanAhmad">
        <div class="icon">
          <i class="fab fa-github"></i>
        </div>
        <p>GunawanAhmad</p>
      </a>
      <a class="Linkedln media" href="https://linkedin.com/in/gunawan-ahmad-0148441b7">
        <div class="icon">
          <i class="fab fa-linkedin"></i>
        </div>
        <p>Gunawan Ahmad</p>
      </a>
    </div>
    </div>
    
    <div class="loader hide" ref="loader">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      num1: 1,
      num2: 2,
      checkAnswer: "",
      answer: "",
      name: "",
      email: "",
      message: "",
    };
  },
  mounted() {
    let num1 = Math.round(Math.random() * 3);
    let num2 = Math.round(Math.random() * 3);
    this.num1 = num1;
    this.num2 = num2;
    this.answer = num1 + num2;
  },
  methods: {
    send(e) {
      if (this.checkAnswer.toString() != this.answer) {
        e.preventDefault();
      } else {
        e.preventDefault()
        this.$refs.main.classList.toggle('hide')
        this.$refs.loader.classList.toggle('hide')
        axios.post('https://api.apispreadsheets.com/data/1739/', {
          data : {
            name : this.name,
            email : this.email,
            message : this.message
          }
        })
        .then(res => {
          console.log(res)
          this.$refs.main.classList.toggle('hide')
          this.$refs.loader.classList.toggle('hide')
          this.email = ''
          this.name = ''
          this.message = ''
          this.checkAnswer = ''
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
  },
};
</script>

<style scoped src="../../public/styles/contact.css">
</style>