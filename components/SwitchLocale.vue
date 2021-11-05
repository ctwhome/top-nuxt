<template>
  <div class="flex gap-3 ml-auto">
    <!-- Switch translator-->
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="btn btn-circle btn-sm btn-ghost"
    >
      {{ locale.code }}
    </nuxt-link>
  </div>
</template>
