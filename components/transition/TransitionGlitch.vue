<template>
  <canvas class="glitch"></canvas>
</template>

<script setup lang="ts">
// get random size for the glitch effect
const getRandomInt = function (min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

onMounted(() => {
  /** GLITCH
   * https://codepen.io/knyttneve/pen/eXNbKo
   * **/

  const canvas = document.querySelector('.glitch') as HTMLCanvasElement
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
  let i = 0

  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight

  function glitch() {
    if (!ctx) return

    ctx.fillStyle = '#1a191c'
    // ctx.fillRect(0, 0, document.body.clientWidth, document.body.clientHeight)

    ctx.shadowBlur = 0
    ctx.shadowColor = 'none'
    // ctx.setTransform(1, 0, 0, 1, 0, 0)

    for (let i = 0; i < 1000; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.03})`
      ctx.fillRect(
        Math.floor(Math.random() * document.body.clientWidth),
        Math.floor(Math.random() * document.body.clientHeight),
        Math.floor(Math.random() * 30) + 1,
        Math.floor(Math.random() * 30) + 1,
      )

      ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`
      ctx.fillRect(
        Math.floor(Math.random() * document.body.clientWidth),
        Math.floor(Math.random() * document.body.clientHeight),
        Math.floor(Math.random() * 25) + 1,
        Math.floor(Math.random() * 25) + 1,
      )
    }

    const height = getRandomInt(10, 30)

    ctx.fillStyle = colors[Math.floor(Math.random() * 20)]
    ctx.fillRect(
      Math.random() * document.body.clientWidth,
      Math.random() * document.body.clientHeight,
      Math.random() * document.body.clientWidth,
      height,
    )

    // ctx.setTransform(1, 0, 0, 0.8, 0.2, 0)
    i++
    const speed = 40 // ms
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
})
</script>

<style lang="scss" scoped>
.glitch {
  order: 1;
  position: fixed;
  z-index: 99;
  overflow: hidden;
  opacity: 0.4;
  display: none;
}
</style>

<style lang="scss">
/* pageTransition */

.pageTransition-enter-active,
.pageTransition-leave-active {
  transition: opacity 0.55s;
}

.pageTransition-enter-from,
.pageTransition-leave-to {
  opacity: 0;

  & + .glitch {
    display: block !important;
  }
}
</style>
