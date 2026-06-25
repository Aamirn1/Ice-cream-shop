export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string[]
  category: string
  date: string
  readTime: string
  keywords: string[]
  relatedItems: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'perfect-ice-cream-guide',
    title: 'The Art of Perfect Ice Cream: A Maker\'s Guide',
    excerpt: 'Discover the secrets behind crafting the ultimate ice cream — from cream ratios to churning techniques.',
    content: [
      'At Ice Cream Shop, we believe great ice cream starts with great ingredients. Our base is made from fresh, locally-sourced cream with a butterfat content of 16%, giving every scoop that luxuriously smooth, creamy mouthfeel that sets artisan ice cream apart.',
      'The secret to silky texture is in the churning. We use a slow-churn method that incorporates just the right amount of air — what ice cream makers call "overrun." Too much air and it\'s fluffy and cheap; too little and it\'s dense and heavy. Our 20% overrun creates the perfect balance.',
      'Temperature matters more than most people think. We store our ice cream at -14°C, slightly warmer than commercial freezers, because it preserves flavor and creates that perfect scoopable consistency. Each batch is temperature-checked before it ever reaches a customer.',
      'Our vanilla base is what sets us apart. Made from real Madagascar vanilla pods, steeped in warm cream for 30 minutes, it creates a depth of flavor that artificial extracts simply cannot match. It\'s the foundation of everything we create.',
    ],
    category: 'Behind the Counter',
    date: 'May 15, 2026',
    readTime: '4 min read',
    keywords: ['ice cream', 'making', 'artisan', 'cream'],
    relatedItems: ['vanilla-bean-classic', 'chocolate-fudge-brownie'],
  },
  {
    slug: 'waffle-cone-secrets',
    title: 'Why Fresh Waffle Cones Make All the Difference',
    excerpt: 'The science and soul behind our freshly-baked waffle cones that elevate every scoop.',
    content: [
      'There\'s something magical about a freshly baked waffle cone that you simply can\'t replicate with store-bought. The aroma of warm vanilla and butter wafting through our shop is the first thing customers notice when they walk in.',
      'We bake every cone to order on cast-iron waffle presses. The batter — a simple blend of flour, butter, sugar, eggs, and vanilla — is poured onto the hot iron and pressed thin. The result is a cone that\'s crispy on the outside and slightly chewy inside.',
      'The shape matters too. Our cones have a slightly wider opening than standard cones, which means more ice cream per scoop and more surface area for toppings. It\'s a small detail that makes a big difference in the eating experience.',
      'Our secret ingredient? A pinch of cinnamon in the batter that adds warmth and complexity without overpowering the ice cream. It pairs beautifully with every flavor, from vanilla to chocolate to fruit sorbets.',
    ],
    category: 'Behind the Counter',
    date: 'May 10, 2026',
    readTime: '5 min read',
    keywords: ['waffle cone', 'fresh', 'baking', 'technique'],
    relatedItems: ['berry-bliss-waffle-cone', 'double-scoop-delight'],
  },
  {
    slug: 'sweetness-level-guide',
    title: 'Finding Your Perfect Sweetness Level',
    excerpt: 'From Classic to Decadent — a guide to navigating our sweetness spectrum and finding your sweet spot.',
    content: [
      'Sweetness is subjective, and at Ice Cream Shop, we respect that. Our menu offers five sweetness levels: Classic, Sweet, Extra Sweet, Rich, and Decadent. Each level is carefully calibrated to suit different preferences.',
      'Our Classic level uses a balanced sugar ratio that lets the natural flavors shine — perfect for those who want authentic taste without overwhelming sweetness. It\'s the level most of our fruit sorbets and pure-flavored ice creams use.',
      'Sweet is where most of our customer favorites sit. The sugar is a bit more pronounced, enhancing flavors like strawberry and mint. This is our most popular sweetness level and works beautifully with chocolate and fruit-based flavors.',
      'For those who choose Decadent, our richest sundaes deliver an intense, indulgent experience that builds with every bite. We always recommend having a glass of cold water nearby to cleanse your palate between spoonfuls.',
    ],
    category: 'Flavor Guide',
    date: 'May 5, 2026',
    readTime: '3 min read',
    keywords: ['sweetness', 'sugar', 'flavor guide', 'taste'],
    relatedItems: ['caramel-swirl-sundae', 'cookies-cream-shake'],
  },
  {
    slug: 'strawberry-origins',
    title: 'The Story Behind Our Strawberry Dream',
    excerpt: 'How a local farm partnership led to our most beloved fruit ice cream.',
    content: [
      'Strawberry Dream was born from a partnership with a local family farm. One spring, the owner brought us a crate of freshly picked Alphonso strawberries that were so fragrant, so intensely flavored, that we knew we had to make something special.',
      'That first batch of strawberry ice cream, made with those incredible berries, was a revelation. The natural sweetness, the bright acidity, the way the fruit chunks froze into little jewels of flavor — it created an ice cream experience that none of us could stop thinking about.',
      'After weeks of refinement — adjusting the cream-to-fruit ratio, developing our signature strawberry compote swirl, and perfecting the chunk size — Strawberry Dream was born. It quickly became our #1 fruit-flavored ice cream.',
      'Today, we still source our strawberries from that same family farm. Every spring, when the first harvest arrives, our entire team gets excited because it means a new batch of Strawberry Dream is on the way. Some partnerships are just meant to be.',
    ],
    category: 'Our Story',
    date: 'April 28, 2026',
    readTime: '4 min read',
    keywords: ['strawberry', 'fruit', 'story', 'local'],
    relatedItems: ['strawberry-dream'],
  },
  {
    slug: 'sundae-championship',
    title: 'How Our Caramel Sundae Won the City Dessert Award',
    excerpt: 'The proud story of how Ice Cream Shop\'s Caramel Swirl Sundae took home the gold at the Annual Dessert Festival.',
    content: [
      'In 2024, our Caramel Swirl Sundae competed against 52 desserts at the Annual City Dessert Festival. The competition was fierce, with established bakeries and dessert houses bringing their A-game. But our sundae had something special.',
      'Our secret? A salted caramel sauce made in-house from scratch, cooked slowly in copper pots until it reaches the perfect amber color. The caramel is warm when poured over the cold ice cream, creating a beautiful temperature contrast that elevates every bite.',
      'Our caramelized pecans are another carefully guarded element. We toast them in small batches with a touch of butter and sea salt, creating a crunchy, nutty topping that complements the sweet caramel and creamy vanilla perfectly.',
      'When the judges announced Ice Cream Shop as the champion, our team was overwhelmed. That trophy sits proudly in our shop, and every Caramel Swirl Sundae we serve carries that same award-winning standard.',
    ],
    category: 'Our Story',
    date: 'April 20, 2026',
    readTime: '5 min read',
    keywords: ['sundae', 'award', 'championship', 'caramel'],
    relatedItems: ['caramel-swirl-sundae'],
  },
  {
    slug: 'sustainable-sourcing',
    title: 'Our Commitment to Sustainable Sourcing',
    excerpt: 'How we partner with local farms and dairies to bring you the freshest ingredients responsibly.',
    content: [
      'At Ice Cream Shop, great ice cream starts with great ingredients. We\'ve spent years building relationships with local farms and dairies who share our commitment to quality and sustainability.',
      'Our cream comes from grass-fed cows raised on family farms within 50 miles of our shop. This not only ensures the freshest possible dairy but also reduces our carbon footprint and supports local agriculture.',
      'All our fruit is sourced from farms that practice sustainable agriculture. From the strawberries in our Strawberry Dream to the mangoes in our sorbet, every fruit is fresh, seasonal, and grown with care for the environment.',
      'We\'re proud to say that over 85% of our ingredients are locally sourced. It costs a little more, but the difference in taste — and the positive impact on our community — makes it absolutely worth it.',
    ],
    category: 'Flavor Guide',
    date: 'April 15, 2026',
    readTime: '4 min read',
    keywords: ['sustainability', 'local', 'farming', 'ingredients'],
    relatedItems: ['vanilla-bean-classic', 'strawberry-dream'],
  },
]

export const blogCategories = [
  'All',
  'Behind the Counter',
  'Flavor Guide',
  'Our Story',
]

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
