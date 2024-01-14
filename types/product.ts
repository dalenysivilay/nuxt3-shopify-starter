export interface Product {
  availableForSale: boolean
  compareAtPriceRange: CompareAtPriceRange
  description: string
  featuredImage: FeaturedImage
  handle: string
  id: string
  images: Images
  isGiftCard: boolean
  priceRange: CompareAtPriceRange
  seo?: Seo
  title: string
  variants?: Variants
}

interface Variants {
  edges: Edge2[]
}

interface Edge2 {
  __typename: string
  node: Node2
}

interface Node2 {
  __typename: string
  availableForSale: boolean
  price: MaxVariantPrice
  image: Node
  compareAtPrice?: any
  weight: number
  weightUnit: string
}

interface Seo {
  __typename: string
  description: string
  title: string
}

interface Images {
  __typename: string
  edges: Edge[]
}

interface Edge {
  __typename: string
  node: Node
}

interface Node {
  __typename: string
  url: string
}

interface FeaturedImage {
  __typename: string
  altText?: any
  url: string
}

interface CompareAtPriceRange {
  __typename: string
  maxVariantPrice: MaxVariantPrice
  minVariantPrice: MaxVariantPrice
}

interface MaxVariantPrice {
  __typename: string
  amount: string
}
