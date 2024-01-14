<script setup lang="ts">
import getProductByIdQuery from '~/apollo/queries/getProductById'
import type { Product } from '~/types/product'

const productData = ref<Product | null>(null)

const query = getProductByIdQuery
const variables = { id: 'gid://shopify/Product/8039988101344' }

const { result, error } = useQuery(query, variables)
const product = result.value?.product as Product

if (error.value)
  throw new Error(error.value.message, error.value)

productData.value = product
</script>

<template>
  <div>Product Page</div>
</template>
