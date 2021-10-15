<template>
  <div class="container mx-auto">
    <tutorial class="mt-20" />
    <blog-list :posts="posts" :more="true" />

    Optimized image
    <nuxt-img src="large.jpg" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    // blog list
    const posts = await $content('posts')
      .limit(4)
      .sortBy('date', 'asc')
      .fetch()

    return {
      posts
    }
  }
}
</script>

<style>
.boc{
  /*background: rgba(var(--b3));*/
  content: var(--b3)
}
</style>
