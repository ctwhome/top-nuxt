<template>
  <div class="flex flex-col w-screen h-screen bg-base-200">
    <nuxt-content :document="page" class="p-10 prose" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('hello').fetch()
    return { page }
  }
}
</script>
