import type { HookResult, NuxtPage } from 'nuxt/schema'

export default function (pages: NuxtPage[]): HookResult | undefined {
  const pagesToRemove: NuxtPage[] = []
  pages.forEach((page) => {
    if (page.path.includes('component'))
      pagesToRemove.push(page)
  })

  pagesToRemove.forEach((page: NuxtPage) => {
    pages.splice(pages.indexOf(page), 1)
  })
}
