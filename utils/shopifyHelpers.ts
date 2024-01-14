export function isValidProductId(productId: string): void {
  const pattern = /^gid:\/\/shopify\/Product\/[a-zA-Z0-9_-]+$/

  if (!productId)
    throw new Error('Product ID is required. Please provide a valid product ID.')

  if (!pattern.test(productId)) {
    throw new Error(
      'Invalid product ID format. Please use the format "gid://shopify/Product/example".',
    )
  }
}
