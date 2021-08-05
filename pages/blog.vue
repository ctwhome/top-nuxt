<template>
  <div class="flex flex-col ">
    <div class="container mx-auto h-full">
      <blog-list :posts="posts" />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  async asyncData ({ $content, params }) {
    // blog list
    const posts = await $content('posts')
      .sortBy('date', 'desc')
      .fetch()
    return {
      posts
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>

</style>
