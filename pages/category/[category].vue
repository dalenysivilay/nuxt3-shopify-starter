<script setup lang="ts">
import type { Collection } from '~/types/collection'
import getCollectionByHandleQuery from '~/apollo/queries/getCollectionByHandle'

const route = useRoute()
const collectionData = ref<Collection | null>(null)

// Get the collection handle from the route params
const collectionHandle = route?.params?.category as string

if (!collectionHandle)
  console.error('No collection handle provided')

const query = getCollectionByHandleQuery
const variables = { handle: collectionHandle }

const { result, error } = useQuery(query, variables)
const collection = result.value?.collection as Collection

if (error.value)
  console.error(error.value.message, error.value)

collectionData.value = collection
</script>

<template>
  <div>Category Page</div>
</template>
