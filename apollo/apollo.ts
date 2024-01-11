import process from 'node:process'
import type { ModuleOptions } from '@nuxtjs/apollo'

export const apollo: ModuleOptions = {
  clients: {
    default: {
      httpEndpoint: process.env.SHOPIFY_STOREFRONT_URL as string,
      httpLinkOptions: {
        headers: {
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_TOKEN as string,
        },
      },
    },
  },
}

export default apollo
