<template>
  <article class="flex flex-col lg:h-screen w-screen lg:overflow-hidden">
    <div class="flex h-full">
      <!--Left side-->
      <div class="relative lg:w-1/2 xs:w-full lg:h-full ">
        <img
          :src="post && post.image"
          class="absolute h-full w-full object-cover"
        >
        <div class="hidden lg:block absolute top-32 left-32 pr-4 text-white ">
          <div class="mt-16 -mb-3 flex uppercase text-sm">
            <p class="mr-3 mb-4">
              {{ formatDate(post.createdAt) }}
            </p>
          </div>
          <h1 class="text-6xl font-bold">
            {{ post.title }}
          </h1>
        </div>
      </div>
      <!--Right Side-->
      <div class="flex flex-col relative p-6 w-full h-full md:py-8 lg:p-16 lg:w-1/2 overflow-y-scroll">
        <h1 class="font-bold text-4xl">
          {{ post.title }}
        </h1>
        <p class="py-4 text-gray-400">
          {{ formatDate(post.createdAt) }}
        </p>
        <!-- table of contents -->
        <nav class="pb-6" />
        <!-- content from markdown -->
        <nuxt-content :document="post" class="prose flex-1" />
        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    </div>
  </article>
</template>
<script>
export default {
  transition: 'fade',
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.post).fetch()
    const [prev, next] = await $content('posts')
      .only(['title', 'post'])
      .sortBy('createdAt', 'desc')
      .surround(params.post)
      .fetch()
    return {
      post,
      prev,
      next
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
