<script setup lang="ts">
import getProductByHandleQuery from '~/apollo/queries/getProductByHandle'
import type { Product } from '~/types/product'

const route = useRoute()
const productData = ref<Product | null>(null)

// Get the product ID from the route params
const productId = route?.params?.product as string

if (!productId)
  console.error('No product ID provided')

const query = getProductByHandleQuery
const variables = { id: productId }

const { result, error } = useQuery(query, variables)
const product = result.value?.product as Product

if (error.value)
  console.error(error.value.message, error.value)

productData.value = product
</script>

<template>
  <div>Product Page</div>
</template>
