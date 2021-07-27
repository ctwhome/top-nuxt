<template>
  <div class="h-screen">
    <nuxt-content :document="content" class="prose p-20" />
    <div v-if="!!error" class="mt-60 p-20 text-base-content bg-primary prose">
      <h3>
        Page not found
        <div class="btn btn-ghost" @click="$router.push('/')">
          ← Go back
        </div>
      </h3>
    </div>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader'
export default {
  components: { MainHeader },
  transition: 'fade',
  data () {
    return {
      content: {},
      error: null
    }
  },
  async fetch () {
    const { page } = this.$route.params
    try {
      this.content = await this.$content('pages/' + page).fetch()
    } catch {
      this.error = true
    }
  }
}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 2000ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
