<template>
  <div class="flex flex-col w-screen h-screen bg-base-200">
    <nuxt-link to="/article">
      <div ref="wrapper" class="city paris">
        <img ref="img" width="300" src="@/assets/img/paris.jpg" alt="paris">
      </div>
    </nuxt-link>

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
