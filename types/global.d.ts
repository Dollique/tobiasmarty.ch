declare global {
  type NavigationArray = Array<Object>

  interface HeaderNav {
    navigationArray: NavigationArray
    nameSchema: string
    linkSchema: string
    subcategoriesSchema: string
  }

  // meta data from storyblok

  interface SBMetaData {
    title: string
    slug: string
  }
}

export { HeaderNav }
