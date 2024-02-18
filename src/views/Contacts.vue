<script setup>
    import {defineProps} from "vue";
    const props  = defineProps({
        profilePic: String,
        instagramIcon: String,
        githubIcon: String,
        linkedinIcon: String,
    })
</script>

<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-row">
          <div class="w-[90px] md:w-[100px] rounded-lg overflow-clip">
            <img :src="props.profilePic">
          </div>
          <div class="h-full flex flex-col justify-between pl-[2vw]">
            <p class="text-2xl md:text-3xl font-bold">Ikubaru Azisu</p>
            <p class="text-md font-thin pb-[0.5vw]">aka Iqbal Abdul Azis</p>
            <div class="flex flex-row pb-[0.5vw]">
              <a href="https://www.instagram.com/ikubaruazisu" target="_blank">
                <img :src="props.instagramIcon" alt="instagram" class="h-6 invert opacity-hover">
              </a>
              <img :src="props.linkedinIcon" alt="linkedin" class="h-6 invert px-[0.6vw] opacity-hover">
              <img :src="props.githubIcon" alt="github" class="h-6 invert opacity-hover">
            </div>
          </div>
        </div>
        <div class="pt-[1.5vw]">
          <p class="text-lg font-semibold">Email</p>
          <p>ikubarudev@gmail.com</p>
        </div>
        <div class="pt-[2vw] flex flex-row">
          <form action="mailto:ikubarudev@gmail.com" method="post" enctype="text/plain">
            <button class="contact-button getintouch-button-hover bg-lightTheme text-lightTheme">Get in Touch</button>
          </form>
          <a :href="props.profilePic" download="Ikubaru Azisu Resume.pdf">
            <button class="contact-button resume-button-hover bg-darkTheme text-darkTheme border ml-1">Get Resume</button>
          </a>
        </div>
      </div>
</template>