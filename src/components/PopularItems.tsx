'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Eye, Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { useToast } from '@/hooks/use-toast'
import { menuItems } from '@/data/menu'

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  tag?: string
  description: string
  slug: string
}

const products: Product[] = [
  {
    id: 1,
    slug: 'vanilla-bean-classic',
    name: 'Vanilla Bean Classic',
    price: 350,
    image: '/images/product-vanilla-bean.png',
    rating: 4.9,
    tag: 'Best Seller',
    description: 'Real Madagascar vanilla bean ice cream with tiny black specks of pure vanilla. Silky smooth and timeless.',
  },
  {
    id: 2,
    slug: 'strawberry-dream',
    name: 'Strawberry Dream',
    price: 420,
    image: '/images/product-strawberry-dream.png',
    rating: 4.8,
    tag: 'Popular',
    description: 'Real strawberry ice cream loaded with chunks of fresh, sun-ripened strawberries and strawberry compote.',
  },
  {
    id: 3,
    slug: 'chocolate-fudge-brownie',
    name: 'Chocolate Fudge Brownie',
    price: 480,
    image: '/images/product-chocolate-brownie.png',
    rating: 4.9,
    tag: 'Customer Favorite',
    description: 'Deep Belgian chocolate ice cream swirled with rich fudge and loaded with chewy brownie chunks.',
  },
  {
    id: 4,
    slug: 'caramel-swirl-sundae',
    name: 'Caramel Swirl Sundae',
    price: 850,
    image: '/images/product-caramel-sundae.png',
    rating: 4.9,
    tag: "Chef's Special",
    description: 'Velvety vanilla ice cream draped in warm salted caramel, topped with whipped cream and caramelized pecans.',
  },
  {
    id: 5,
    slug: 'mint-chocolate-chip',
    name: 'Mint Chocolate Chip',
    price: 450,
    image: '/images/product-mint-chip.png',
    rating: 4.7,
    tag: 'Refreshing',
    description: 'Refreshing peppermint ice cream with generous shards of dark chocolate throughout. Cool and crisp.',
  },
  {
    id: 6,
    slug: 'cookies-cream-shake',
    name: 'Cookies & Cream Shake',
    price: 600,
    image: '/images/product-cookies-shake.png',
    rating: 4.8,
    description: 'Thick and creamy milkshake blended with vanilla ice cream and crushed chocolate cookies, topped with whipped cream.',
  },
]

interface PopularItemsProps {
  onViewProduct: (product: Product) => void
}

export default function PopularItems({ onViewProduct }: PopularItemsProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation()
    e.preventDefault()
    const menuItem = menuItems.find((m) => m.id === product.slug)
    addItem({
      id: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: 'Added to Order! 🍦',
      description: `${product.name} has been added to your order.`,
    })
  }

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black">
            Most Popular{' '}
            <span className="text-fire-gradient">Items</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Our customers&apos; favorites — tried, tested, and absolutely loved.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/menu/${product.slug}`}>
                <div className="card-glow rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover overlay with View in 3D and Quick Add */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <Button
                        className="bg-fire-gradient text-primary-foreground font-semibold btn-fire-glow"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          onViewProduct(product)
                        }}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View in 3D
                      </Button>
                      <Button
                        className="bg-card/90 text-foreground border border-border font-semibold hover:bg-card"
                        onClick={(e) => handleQuickAdd(e, product)}
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                    {/* Tag */}
                    {product.tag && (
                      <Badge className="absolute top-3 left-3 bg-fire-gradient text-primary-foreground border-0 font-semibold">
                        {product.tag}
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </span>
                      <span className="text-fire-gradient font-black text-lg">
                        Rs. {product.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-4 h-4 ${
                              idx < Math.floor(product.rating)
                                ? 'text-accent fill-accent'
                                : 'text-muted-foreground/30'
                            }`}
                          />
                        ))}
                        <span className="text-muted-foreground text-sm ml-1">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-primary text-sm font-medium group-hover:underline underline-offset-2">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/menu">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8"
            >
              View Full Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
