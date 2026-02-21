export interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  rating: number
  reviews: number
  description: string
  badge?: string
  badgeColor?: string
  inStock: boolean
  featured?: boolean
}

export function useProducts() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Organic Broccoli',
      category: 'Vegetables',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=360&q=75',
      rating: 4.8,
      reviews: 124,
      description: 'Crisp, dark-green crowns bursting with vitamins. Harvested at peak freshness.',
      badge: 'Organic',
      badgeColor: 'bg-leaf-10 text-leaf',
      inStock: true,
      featured: true,
    },
    {
      id: 2,
      name: 'Heirloom Tomatoes',
      category: 'Fruits',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=360&q=75',
      rating: 4.9,
      reviews: 89,
      description: 'Rainbow of flavors — sweet to tangy. Perfect for salads and sauces.',
      badge: 'Best Seller',
      badgeColor: 'bg-purple-100 text-purple-700',
      inStock: true,
      featured: true,
    },
    {
      id: 3,
      name: 'Baby Spinach',
      category: 'Greens',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=360&q=75',
      rating: 4.7,
      reviews: 67,
      description: 'Tender young leaves, triple-washed and ready to eat. Packed with iron.',
      badge: 'Fresh Cut',
      badgeColor: 'bg-purple-100 text-purple-700',
      inStock: true,
    },
    {
      id: 4,
      name: 'Rainbow Carrots',
      category: 'Root Vegetables',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=360&q=75',
      rating: 4.6,
      reviews: 103,
      badge: 'Organic',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      description: 'Purple, yellow & orange varieties with a satisfying crunch and natural sweetness.',
      inStock: true,
      featured: true,
    },
    {
      id: 5,
      name: 'Purple Cauliflower',
      category: 'Vegetables',
      price: 4.49,
      image: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?w=360&q=75',
      rating: 4.5,
      reviews: 41,
      description: 'Striking purple hue with a slightly nutty flavor. Rich in antioxidants.',
      badge: 'Organic',
      badgeColor: 'bg-purple-100 text-purple-700',
      inStock: true,
    },
    {
      id: 6,
      name: 'English Cucumbers',
      category: 'Vegetables',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=360&q=75',
      rating: 4.4,
      badge: 'Organic',
      badgeColor: 'bg-purple-100 text-purple-700',
      reviews: 88,
      description: 'Long, thin-skinned and seedless. Crisp, refreshingly mild.',
      inStock: true,
    },
    {
      id: 7,
      name: 'Sweet Bell Peppers',
      category: 'Vegetables',
      price: 4.29,
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=360&q=75',
      rating: 4.8,
      reviews: 76,
      description: 'Red, yellow & orange trio. Naturally sweet and high in vitamin C.',
      badge: 'Value Pack',
      badgeColor: 'bg-orange-100 text-orange-700',
      inStock: true,
    },
    {
      id: 8,
      name: 'Zucchini',
      category: 'Vegetables',
      price: 2.49,
      image: 'https://media.istockphoto.com/id/467927934/photo/bottle-gourd.webp?a=1&b=1&s=612x612&w=0&k=20&c=8M35mBR-MMavCSm0K3omojCoq4f4Ox1qgAp4BhrtRtM=',
      rating: 4.3,
      reviews: 55,
      badge: 'Organic',
      badgeColor: 'bg-orange-100 text-orange-700',
      description: 'Versatile summer squash. Great for grilling, spiralizing or baking.',
      inStock: true,
    },
    {
      id: 9,
      name: 'Watermelon',
      category: 'Fruits',
      price: 1.79,
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=360&q=75',
      rating: 4.9,
      reviews: 211,
      description: 'Plump, pungent cloves grown without pesticides. Pure, intense flavor.',
      badge: 'Fan Favorite',
      badgeColor: 'bg-gold-20 text-earth',
      inStock: true,
    },
    {
      id: 10,
      name: 'Sweet Corn',
      category: 'Grains',
      price: 0.99,
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=360&q=75',
      rating: 4.7,
      reviews: 143,
      description: 'Picked at peak sweetness. Best eaten the same day for maximum flavor.',
      badge: 'In Season',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      inStock: true,
      featured: true,
    },
    {
      id: 11,
      name: 'Portobello Mushrooms',
      category: 'Fungi',
      price: 5.49,
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=360&q=75',
      rating: 4.6,
      reviews: 62,
      badge: 'Organic',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      description: 'Meaty caps perfect for grilling or stuffing. Earthy, rich umami flavor.',
      inStock: true,
    },
    {
      id: 12,
      name: 'Red Onions',
      category: 'Aromatics',
      price: 1.49,
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=360&q=75',
      rating: 4.5,
      reviews: 99,
      badge: 'Organic',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      description: 'Mild and slightly sweet raw. Caramelizes beautifully when cooked.',
      inStock: true,
    },
  ]

  const categories = ['All', ...new Set(products.map(p => p.category))]
  const featured = products.filter(p => p.featured)

  return { products, categories, featured }
}