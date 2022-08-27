<template>
  <div class="page_wrapper">
    <Nuxt />
    <canvas class="glitch"></canvas>
  </div>
</template>

<script>
export default {
  computed: {
    navOpen() {
      return this.$store.state.navigation.navOpen
    },
  },
  watch: {
    // watch for route change
    $route() {
      // set navigation toggle to false (close all navigation)
      this.$store.commit('navigation/close')
    },
    navOpen(store) {
      // console.log('navOpen() -> watching navOpen', store)
      document.querySelector('body').classList.toggle('navOpen')
    },
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
  },
  mounted() {
    /** GLITCH
     * https://codepen.io/knyttneve/pen/eXNbKo
     * **/

    const canvas = document.querySelector('.glitch')
    const ctx = canvas.getContext('2d')
    const colors = [
      '#b4b2b5',
      '#dfd73f',
      '#6ed2dc',
      '#66cf5d',
      '#c542cb',
      '#d0535e',
      '#3733c9',
    ]
    let linePos = 0
    let i = 0

    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight

    const self = this

    function glitch() {
      ctx.fillStyle = '#1a191c'
      //ctx.fillRect(0, 0, document.body.clientWidth, document.body.clientHeight)

      ctx.shadowBlur = 0
      ctx.shadowColor = 'none'
      //ctx.setTransform(1, 0, 0, 1, 0, 0)

      for (let i = 0; i < 1000; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.03})`
        ctx.fillRect(
          Math.floor(Math.random() * document.body.clientWidth),
          Math.floor(Math.random() * document.body.clientHeight),
          Math.floor(Math.random() * 30) + 1,
          Math.floor(Math.random() * 30) + 1
        )

        ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`
        ctx.fillRect(
          Math.floor(Math.random() * document.body.clientWidth),
          Math.floor(Math.random() * document.body.clientHeight),
          Math.floor(Math.random() * 25) + 1,
          Math.floor(Math.random() * 25) + 1
        )
      }

      const height = self.getRandomInt(10, 30)

      ctx.fillStyle = colors[Math.floor(Math.random() * 20)]
      ctx.fillRect(
        Math.random() * document.body.clientWidth,
        Math.random() * document.body.clientHeight,
        Math.random() * document.body.clientWidth,
        height
      )

      //ctx.setTransform(1, 0, 0, 0.8, 0.2, 0)
      i++
      let speed = 40 // ms
      setTimeout(() => {
        if (i % 2) {
          ctx.clearRect(0, 0, canvas.width, canvas.height) // clear the canvas
        }
        window.requestAnimationFrame(glitch) // repeat
      }, speed)
    }

    glitch()

    window.addEventListener('resize', () => {
      canvas.width = document.body.clientWidth
      canvas.height = document.body.clientHeight
    })
  },
}
</script>

<style lang="scss" scoped>
.page_wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  .print {
    display: none;
  }
  @media print {
    .print {
      display: block;
    }
  }
}

.glitch {
  order: 1;
  position: fixed;
  z-index: 99;
  overflow: hidden;
  opacity: 0.4;
  display: none;
}
</style>
