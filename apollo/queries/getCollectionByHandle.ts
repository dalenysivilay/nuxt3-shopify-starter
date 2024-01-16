export const getCollectionByHandleQuery = gql`
  getCollectionByHandleQuery($handle: String!, $sortKey: String!) {
    collection(handle: $handle) {
      description
      handle
      id
      image {
        url
      }
      products(sortKey: $sortKey) {
        edges {
          node {
            availableForSale
          }
        }
      }
      title
      seo {
        description
        title
      }
    }
  }
`
export default getCollectionByHandleQuery
