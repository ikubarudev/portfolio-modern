<script setup>
  import whiteRadial from "./assets/images/background/Ellipse 1.svg"
  import profilePic from "./assets/images/pp.jpg"
  import linkedinIcon from "./assets/images/icons/linkedin.svg"
  import instagramIcon from "./assets/images/icons/instagram.svg"
  import githubIcon from "./assets/images/icons/github.svg"

  import NavbarMain from "./components/NavbarMain.vue"
  import Introduction from "./components/Introduction.vue"
  import Contacts from "./views/Contacts.vue"
  import TechStacks from "./views/TechStacks.vue"
  import { techStacks } from "./data/techStacks.ts"
</script>

<template>
  <main
  class="bg-darkTheme text-darkTheme h-[100vh] w-[100vw]">
    <div class="px-[5vw] flex flex-col justify-between h-full w-full">
      <header class="mt-10 font-judson text-md md:text-xl">
        <p>ikubaru</p>
      </header>
      <div class="flex flex-col md:flex-row">
        <Introduction />
          <router-view class="w-full md:w-half"
          :profilePic="profilePic" :instagramIcon="instagramIcon" :linkedinIcon="linkedinIcon" :githubIcon="githubIcon"
          :techStacks="techStacks"
          v-slot="{ Component }"
          >
          <transition  name="fade" mode="out-in">
            <Component :is="Component" />
          </transition>
        </router-view>
      </div>
      <NavbarMain />
    </div>
    <img :src="whiteRadial" alt="radial background image" class="absolute w-[40vw] h-[40vw] bottom-0 z-[-1]"/>
    <img :src="whiteRadial" alt="radial background image" class="absolute w-[40vw] h-[40vw] top-0 right-0 transform rotate-180 z-[-1]"/>
  </main>
  
</template>