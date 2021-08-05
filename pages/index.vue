<template>
  <div class="container mx-auto">
    <tutorial class="mt-20" />
    <blog-list :posts="posts" :more="true" />
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
