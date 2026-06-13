export interface MenuItem {
  id: string
  title: string
  description?: string
  price?: string
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export interface MenuConfig {
  categories: MenuCategory[]
}
