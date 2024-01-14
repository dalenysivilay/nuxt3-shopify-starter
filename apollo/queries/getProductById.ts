export const getProductByIdQuery = gql`
  query getProductById($id: ID!) {
    product(id: $id) {
      availableForSale
      compareAtPriceRange {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      description
      featuredImage {
        altText
        url
      }
      handle
      id
      images(first: 10) {
        edges {
          node {
            url
          }
        }
      }
      isGiftCard
      priceRange {
        minVariantPrice {
          amount
        }
        maxVariantPrice {
          amount
        }
      }
      seo {
        description
        title
      }
      variants(first: 100) {
        edges {
          node {
            availableForSale
            price {
              amount
            }
            image {
              url
            }
            compareAtPrice {
              amount
            }
            weight
            weightUnit
          }
        }
      }
    }
  }
`

export default getProductByIdQuery
