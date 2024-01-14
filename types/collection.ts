import type { Product } from './product'

export interface Collection {
  __typename: string
  description: string
  handle: string
  id: string
  image: Image
  products: CollectionProducts
  title: string
  seo?: Seo
}

interface CollectionProducts {
  __typename: string
  edges: {
    node: Product[]
  }
}

interface Image {
  __typename: string
  url: URL
}

interface Seo {
  __typename: string
  description: string
  title: string
}
