import type { ModuleOptions } from '@nuxtjs/apollo'
import processEnv from '~/utils/processEnv'

function shopifyConfig() {
  const baseUrl = processEnv('SHOPIFY_BASE_URL')
  const apiVersion = processEnv('SHOPIFY_API_VERSION')
  const storefrontAccessToken = processEnv('SHOPIFY_STOREFRONT_ACCESS_TOKEN')

  const url = `https://${baseUrl}/api/${apiVersion}/graphql.json`
  const headers = { 'X-Shopify-Storefront-Access-Token': storefrontAccessToken }

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
