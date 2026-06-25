export interface MenuItem {
  id: string
  name: string
  price: number
  priceFormatted: string
  category: string
  categorySlug: string
  images: string[]
  description: string
  rating: number
  tag?: string
  ingredients: string[]
  sweetnessLevel: 'Classic' | 'Sweet' | 'Extra Sweet' | 'Rich' | 'Decadent'
  isAvailable: boolean
  prepTime: string
  calories: number
}

export interface FoodCategory {
  slug: string
  title: string
  subtitle: string
  image: string
}

export const categories: FoodCategory[] = [
  {
    slug: 'scoops',
    title: 'Scoops',
    subtitle: 'Creamy Perfection',
    image: '/images/category-scoops.png',
  },
  {
    slug: 'sundaes',
    title: 'Sundaes',
    subtitle: 'Indulgent Delights',
    image: '/images/category-sundaes.png',
  },
  {
    slug: 'cones',
    title: 'Cones',
    subtitle: 'Crunchy & Sweet',
    image: '/images/category-cones.png',
  },
  {
    slug: 'shakes',
    title: 'Shakes',
    subtitle: 'Thick & Dreamy',
    image: '/images/category-shakes.png',
  },
]

export const menuItems: MenuItem[] = [
  {
    id: 'vanilla-bean-classic',
    name: 'Vanilla Bean Classic',
    price: 350,
    priceFormatted: 'Rs. 350',
    category: 'Scoops',
    categorySlug: 'scoops',
    images: ['/images/product-vanilla-bean.png'],
    description: 'Our signature vanilla bean ice cream made with real Madagascar vanilla pods and fresh cream. Silky smooth with tiny black specks of pure vanilla — the timeless classic done right.',
    rating: 4.9,
    tag: "Best Seller",
    ingredients: ['Madagascar Vanilla', 'Fresh Cream', 'Cane Sugar', 'Egg Yolks', 'Vanilla Pod'],
    sweetnessLevel: 'Classic',
    isAvailable: true,
    prepTime: '5 min',
    calories: 210,
  },
  {
    id: 'strawberry-dream',
    name: 'Strawberry Dream',
    price: 420,
    priceFormatted: 'Rs. 420',
    category: 'Scoops',
    categorySlug: 'scoops',
    images: ['/images/product-strawberry-dream.png'],
    description: 'Real strawberry ice cream loaded with chunks of fresh, sun-ripened strawberries. Made with hand-picked berries and a swirl of strawberry compote for an irresistible fruity treat.',
    rating: 4.8,
    tag: 'Popular',
    ingredients: ['Fresh Strawberries', 'Cream', 'Strawberry Compote', 'Cane Sugar', 'Lemon Juice'],
    sweetnessLevel: 'Sweet',
    isAvailable: true,
    prepTime: '5 min',
    calories: 240,
  },
  {
    id: 'chocolate-fudge-brownie',
    name: 'Chocolate Fudge Brownie',
    price: 480,
    priceFormatted: 'Rs. 480',
    category: 'Scoops',
    categorySlug: 'scoops',
    images: ['/images/product-chocolate-brownie.png'],
    description: 'Deep, dark Belgian chocolate ice cream swirled with rich fudge and loaded with chewy brownie chunks. A chocolate lover\'s paradise in every scoop.',
    rating: 4.9,
    tag: "Customer Favorite",
    ingredients: ['Belgian Chocolate', 'Fudge Swirl', 'Brownie Chunks', 'Cocoa', 'Cream'],
    sweetnessLevel: 'Rich',
    isAvailable: true,
    prepTime: '5 min',
    calories: 320,
  },
  {
    id: 'mint-chocolate-chip',
    name: 'Mint Chocolate Chip',
    price: 450,
    priceFormatted: 'Rs. 450',
    category: 'Scoops',
    categorySlug: 'scoops',
    images: ['/images/product-mint-chip.png'],
    description: 'Refreshing peppermint ice cream with generous shards of dark chocolate throughout. Cool, crisp, and wonderfully minty — the perfect refreshing treat.',
    rating: 4.7,
    tag: 'Refreshing',
    ingredients: ['Peppermint', 'Dark Chocolate Chips', 'Cream', 'Cane Sugar', 'Mint Extract'],
    sweetnessLevel: 'Sweet',
    isAvailable: true,
    prepTime: '5 min',
    calories: 280,
  },
  {
    id: 'caramel-swirl-sundae',
    name: 'Caramel Swirl Sundae',
    price: 850,
    priceFormatted: 'Rs. 850',
    category: 'Sundaes',
    categorySlug: 'sundaes',
    images: ['/images/product-caramel-sundae.png'],
    description: 'Velvety vanilla ice cream draped in warm salted caramel, topped with whipped cream, caramelized pecans, and a cherry. Our most indulgent sundae creation.',
    rating: 4.9,
    tag: "Chef's Special",
    ingredients: ['Vanilla Ice Cream', 'Salted Caramel', 'Whipped Cream', 'Caramelized Pecans', 'Cherry', 'Sea Salt'],
    sweetnessLevel: 'Decadent',
    isAvailable: true,
    prepTime: '8 min',
    calories: 540,
  },
  {
    id: 'berry-bliss-waffle-cone',
    name: 'Berry Bliss Waffle Cone',
    price: 650,
    priceFormatted: 'Rs. 650',
    category: 'Cones',
    categorySlug: 'cones',
    images: ['/images/product-berry-cone.png'],
    description: 'Freshly baked waffle cone filled with strawberry and blueberry ice cream, topped with mixed berry compote and white chocolate drizzle. A berry lover\'s dream come true.',
    rating: 4.8,
    tag: 'New',
    ingredients: ['Waffle Cone', 'Strawberry Ice Cream', 'Blueberry Ice Cream', 'Berry Compote', 'White Chocolate'],
    sweetnessLevel: 'Extra Sweet',
    isAvailable: true,
    prepTime: '6 min',
    calories: 420,
  },
  {
    id: 'cookies-cream-shake',
    name: 'Cookies & Cream Shake',
    price: 600,
    priceFormatted: 'Rs. 600',
    category: 'Shakes',
    categorySlug: 'shakes',
    images: ['/images/product-cookies-shake.png'],
    description: 'Thick and creamy milkshake blended with vanilla ice cream and crushed chocolate cookies, topped with whipped cream, cookie crumbles, and a whole cookie on top.',
    rating: 4.8,
    tag: 'Popular',
    ingredients: ['Vanilla Ice Cream', 'Chocolate Cookies', 'Whole Milk', 'Whipped Cream', 'Cookie Crumbles'],
    sweetnessLevel: 'Extra Sweet',
    isAvailable: true,
    prepTime: '5 min',
    calories: 480,
  },
  {
    id: 'mango-sorbet',
    name: 'Mango Sorbet',
    price: 380,
    priceFormatted: 'Rs. 380',
    category: 'Scoops',
    categorySlug: 'scoops',
    images: ['/images/product-mango-sorbet.png'],
    description: 'Dairy-free mango sorbet bursting with the tropical sweetness of Alphonso mangoes. Light, refreshing, and intensely fruity — perfect for a hot day.',
    rating: 4.6,
    ingredients: ['Alphonso Mango', 'Cane Sugar', 'Lime Juice', 'Water', 'Natural Pectin'],
    sweetnessLevel: 'Classic',
    isAvailable: true,
    prepTime: '3 min',
    calories: 150,
  },
  {
    id: 'double-scoop-delight',
    name: 'Double Scoop Delight',
    price: 750,
    priceFormatted: 'Rs. 750',
    category: 'Cones',
    categorySlug: 'cones',
    images: ['/images/product-double-scoop.png'],
    description: 'Two generous scoops of your favorite flavors in a golden waffle cone, drizzled with chocolate sauce and topped with sprinkles. The ultimate ice cream cone experience.',
    rating: 4.9,
    tag: "Best Value",
    ingredients: ['Two Scoops', 'Waffle Cone', 'Chocolate Sauce', 'Rainbow Sprinkles', 'Cherry'],
    sweetnessLevel: 'Rich',
    isAvailable: true,
    prepTime: '5 min',
    calories: 390,
  },
]

export const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under Rs. 450', min: 0, max: 450 },
  { label: 'Rs. 450 - 650', min: 450, max: 650 },
  { label: 'Rs. 650 - 900', min: 650, max: 900 },
  { label: 'Over Rs. 900', min: 900, max: Infinity },
]

export function getMenuItemsByCategory(slug: string): MenuItem[] {
  if (!slug || slug === 'all') return menuItems
  return menuItems.filter((item) => item.categorySlug === slug)
}

export function getMenuItemById(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id)
}

export function getRelatedItems(itemId: string): MenuItem[] {
  const item = getMenuItemById(itemId)
  if (!item) return []
  return menuItems.filter((i) => i.categorySlug === item.categorySlug && i.id !== item.id)
}

export function searchMenuItems(query: string): MenuItem[] {
  const q = query.toLowerCase()
  return menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.ingredients.some((ing) => ing.toLowerCase().includes(q)) ||
      item.description.toLowerCase().includes(q)
  )
}
