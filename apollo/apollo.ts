import process from 'node:process'
import type { ModuleOptions } from '@nuxtjs/apollo'

function shopifyConfig() {
  const {
    SHOPIFY_STOREFRONT_URL,
    SHOPIFY_API_VERSION,
    SHOPIFY_STOREFRONT_TOKEN,
  } = process.env

  if (!SHOPIFY_STOREFRONT_URL || !SHOPIFY_API_VERSION || !SHOPIFY_STOREFRONT_TOKEN)
    throw new Error('Missing Shopify environment variables.')

  const url = `https://${SHOPIFY_STOREFRONT_URL}/api/${SHOPIFY_API_VERSION}/graphql.json`
  const headers = {
    'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
  }

  return { url, headers }
}

const { url, headers } = shopifyConfig()

export const apollo: ModuleOptions = {
  clients: {
    default: {
      httpEndpoint: url,
      httpLinkOptions: {
        headers,
      },
    },
  },
}

export default apollo
