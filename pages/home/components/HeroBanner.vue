<script setup lang="ts">
export interface Props {
  title?: string
  subtitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Welcome to the home page',
  subtitle: 'This is the home page of the website',
})
</script>

<template>
  <div>
    <div class="flex flex-row items-center">
      <div class="flex flex-col">
        <h1 class="text-4xl font-bold">
          {{ props.title }}
        </h1>
        <p class="text-lg">
          {{ props.subtitle }}
        </p>
        <UButton>
          View Products
        </UButton>
      </div>
      <div class="flex flex-col">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Hero Banner">
      </div>
    </div>
  </div>
</template>
