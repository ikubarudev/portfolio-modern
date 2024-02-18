<script setup>
    import {defineProps} from "vue";

    const props = defineProps({
        techStacks: String,
    })
</script>

<template>
    <div class="flex flex-wrap h-[50%]">
        <img v-for="(stack, index) in techStacks" :key="index" :src="stack.src" :title="stack.name"
        class="w-9 md:w-14 h-14 mx-2 opacity-hover" :class="{invert : stack.invert}">
    </div>
</template>