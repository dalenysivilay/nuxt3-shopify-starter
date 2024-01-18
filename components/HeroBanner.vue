<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  buttonLabel?: string
  bgImageSrc?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Welcome to the home page',
  subtitle: 'This is the home page of the website',
  buttonLabel: 'View Products',
  bgImageSrc: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
})
</script>

<template>
  <div>
    <div class="flex flex-row items-center rounded-lg">
      <div class="flex flex-col">
        <h1 class="text-4xl font-bold">
          {{ props.title }}
        </h1>
        <p class="text-lg">
          {{ props.subtitle }}
        </p>
        <BaseButton class="mt-4">
          {{ props.buttonLabel }}
        </BaseButton>
      </div>
      <div class="flex flex-col">
        <img :src="props.bgImageSrc" alt="Hero Banner">
      </div>
    </div>
  </div>
</template>
