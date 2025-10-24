export interface Product {
  id: number
  name: string
  brand: string
  price: number
  image: string
  category: string
  gender: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Air Max 270",
    brand: "Nike",
    price: 1,
    image: "/nike-air-max-270-running-shoes.jpg",
    category: "Running",
    gender: "hombre",
  },
  {
    id: 2,
    name: "Ultraboost 22",
    brand: "Adidas",
    price: 1,
    image: "/adidas-ultraboost-running-shoes.jpg",
    category: "Running",
    gender: "mujer",
  },
  {
    id: 3,
    name: "RS-X",
    brand: "Puma",
    price: 1,
    image: "/puma-rs-x-casual-sneakers.jpg",
    category: "Casual",
    gender: "hombre",
  },
  {
    id: 4,
    name: "LeBron 20",
    brand: "Nike",
    price: 1,
    image: "/nike-lebron-basketball-shoes.jpg",
    category: "Basketball",
    gender: "hombre",
  },
  {
    id: 5,
    name: "Dame 8",
    brand: "Adidas",
    price: 1,
    image: "/adidas-dame-basketball-shoes.jpg",
    category: "Basketball",
    gender: "hombre",
  },
  {
    id: 6,
    name: "Clyde All-Pro",
    brand: "Puma",
    price: 1,
    image: "/puma-clyde-basketball-shoes.jpg",
    category: "Basketball",
    gender: "mujer",
  },
  {
    id: 7,
    name: "Chuck Taylor All Star",
    brand: "Converse",
    price: 1,
    image: "/converse-chuck-taylor-casual-shoes.jpg",
    category: "Casual",
    gender: "niños",
  },
  {
    id: 8,
    name: "574 Core",
    brand: "New Balance",
    price: 1,
    image: "/new-balance-574-casual-sneakers.jpg",
    category: "Casual",
    gender: "hombre",
  },
  {
    id: 9,
    name: "Fresh Foam 1080",
    brand: "New Balance",
    price: 1,
    image: "/new-balance-fresh-foam-running-shoes.jpg",
    category: "Running",
    gender: "mujer",
  },
  {
    id: 10,
    name: "Suede Classic",
    brand: "Puma",
    price: 1,
    image: "/puma-suede-classic-casual-shoes.jpg",
    category: "Casual",
    gender: "mujer",
  },
  {
    id: 11,
    name: "Pegasus 40",
    brand: "Nike",
    price: 1,
    image: "/nike-pegasus-running-shoes.jpg",
    category: "Running",
    gender: "hombre",
  },
  {
    id: 12,
    name: "Stan Smith",
    brand: "Adidas",
    price: 1,
    image: "/adidas-stan-smith-casual-sneakers.jpg",
    category: "Casual",
    gender: "niños",
  },
  {
    id: 13,
    name: "Performance Crew Socks 3-Pack",
    brand: "Nike",
    price: 1,
    image: "/nike-socks-3pack.jpg",
    category: "Socks",
    gender: "accesorios",
  },
  {
    id: 14,
    name: "Cushioned Ankle Socks 6-Pack",
    brand: "Adidas",
    price: 1,
    image: "/adidas-ankle-socks.jpg",
    category: "Socks",
    gender: "accesorios",
  },
  {
    id: 15,
    name: "Athletic Performance Socks",
    brand: "Puma",
    price: 1,
    image: "/puma-athletic-socks.jpg",
    category: "Socks",
    gender: "accesorios",
  },
]

export const brands = ["Nike", "Adidas", "Puma", "Converse", "New Balance"]
export const categories = ["Running", "Basketball", "Casual"]
export const genders = ["Hombre", "Mujer", "Niños", "Accesorios"]