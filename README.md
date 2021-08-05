# Nuxt start template
[![cd](https://github.com/ctwhome/nuxt/actions/workflows/cd.yml/badge.svg)](https://github.com/ctwhome/nuxt/actions/workflows/cd.yml)


Template Nuxt with most common configuration to a based set with Nuxt, by Ctwhome

```
npx degit ctwhome/nuxt <directory-name>
```

### Includes:

*   Nuxt Vite (Experimental with issues, TailwindCSS JIT not working with nuxt-vite: [issue](https://github.com/nuxt/vite/issues/159))
*   Nuxt content
*   TailwindCss with JIT
*   DaisyUI for Tailwindcss
*   ESLint with 'fix on save'
*   Common VSCode settings for Nuxt and ESLint
*   Nuxt transitions
*   Ngrok exposes your localhost to the world for easy testing and sharing!

## Theming

DaisyUI offers the ability to theme your application with many default themes or create your own [here](https://daisyui.com/core/colors).

Daisy UI has the next utility classes where the theme will be applied (check the previous link for more details):

```
    bg-{COLOR_NAME}
    text-{COLOR_NAME}
    border-{COLOR_NAME}
    from-{COLOR_NAME}
    via-{COLOR_NAME}
    to-{COLOR_NAME}
    placeholder-{COLOR_NAME}
    divide-{COLOR_NAME}
    ring-{COLOR_NAME}




    ring-offset-{COLOR_NAME}
```

### Switching themes

*   An NPM component can be installed to handle easily global themes that keep it after refreshing the page: saadeghi/theme-change

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# generate and local test
$ yarn enerate && yarn star yarn generate && yarn start
```

For a detailed explanation of how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
