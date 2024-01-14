<script setup lang="ts">
import getProductByIdQuery from '~/apollo/queries/getProductById'
import { isValidProductId } from '~/utils/shopifyHelpers'
import type { Product } from '~/types/product'

const route = useRoute()
const productData = ref<Product | null>(null)

// Get the product ID from the route params
const productId = route?.params?.product as string

// Validate the product ID
try {
  isValidProductId(productId)
}
catch (error) {
  console.error('Invalid product ID:', (error as Error).message)
}

const query = getProductByIdQuery
const variables = { id: productId }

const { result, error } = useQuery(query, variables)
const product = result.value?.product as Product

if (error.value)
  throw new Error(error.value.message, error.value)

productData.value = product
</script>

<template>
  <div>Product Page</div>
</template>
