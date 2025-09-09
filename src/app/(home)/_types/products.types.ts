//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }


interface rating {
    rate: number
    count: number
}

export interface products {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: rating
}