## Creating A Nuxt App

``` bash
npx nuxi@latest init recipe-app
```

---

Which package manager would you tike to use?
- npm ✅ 
- pnpm
- yarn
- bun

---

``` bash 
npm run dev
```

## helpfu Resources or Nuxt
- Vue - Official v2.ø.1Ø
- Tailwind CSS IntelliSense

``` bash
npx codemd@latest nuxt/4/file—structure
```

## File Directory Structure
``` json
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPath: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/icon',
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
})
```

## Nuxt Modules (@nuxtjs/tailwindcss)

``` bash 
npx nuxi@latest module add tailwindcss
```

## [Nuxt Google Fonts](https://google-fonts.nuxtjs.org/?utm_source=nuxt.com&utm_medium=aside-module&utm_campaign=nuxt.com)

```bash 
npx nuxi@latest module add google-fonts
```

## [Nuxt Icon](https://nuxt.com/modules/icon)

```bash 
npx nuxi module add icon
```

## [Nuxt Image](https://image.nuxt.com/)

```bash 
npx nuxi@latest module add image
```

## Tailwind.config 
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

### definePageMeta - layouts

## Image Optimization (Nuxt Image)

``` js
  <NuxtImg width="56px" src="/icon-green.png" format="webp" alt="" />
```

## [Data Fetching (useFetch and useAsyncData)](https://dummyjson.com/docs)

## image cdn url config (nuxt.config.ts)

```js
  image: {
    domains: ['cdn.dummyjson.com'],
  },
```

## Handling Errors & Custom Error Page

```bash
app/error.vue
```

```js
<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <section class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="mb-2 text-9xl font-bold">
      {{ error?.statusCode }}
    </h1>
    <p class="mb-10 text-xl sm:text-3xl">{{ error?.statusMessage }}</p>
    <UButton to="/"> Go home </UButton>
  </section>
</template>
```

## [Setting SEO with useSeoMetaO](https://unhead.unjs.io/docs/head/api/composables/use-seo-meta)
