export default {
    methods : {
        pageTransition() {
          console.log('mixins')
          this.$store.state.backgroundTransition.classList.toggle('show')
          setTimeout(()=> {
            this.$store.state.backgroundTransition.classList.toggle('show')
          },1500)
        }
      }
}