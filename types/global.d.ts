declare global {
  type NavigationArray = Array<Object>

  interface HeaderNav {
    navigationArray: NavigationArray
    nameSchema: string
    linkSchema: string
    subcategoriesSchema: string
  }
}

export { HeaderNav }
