import { Food } from "./models/Food";
import { Tag } from "./models/Tag";
export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'Chocolate Cake',
        description: 'Rich and decadent chocolate cake with creamy frosting',
        price: 4.99,
        tags: ['dessert', 'cake', 'chocolate'],
        favorite: true,
        stars: 4.7,
        imageUrl: 'assets/chocolate_cake.png',
        origins: ['France', 'Italy'],
        cookTime: '2 hr 30 min'
    },
    {
        id: '2',
        name: 'Veggie Burger',
        description: 'A juicy burger made  of vegetables instead of meat',
        "tags": ["burger", "vegetarian", "veggie"] ,
        price: 6.49,
        favorite: false,
        stars: 3.9,
        imageUrl: 'assets/veggie_burgers.png',
        origins: ['USA'],
        cookTime: '1 hrs 35 min'
    },
    {
        id: '3',
        name: 'Sushi Platter',
        description: 'Assortment of fresh sushi rolls and nigiri',
        price: 12.99,
        tags: ['japanese', 'sushi', 'seafood'],
        favorite: true,
        stars: 4.8,
        imageUrl: 'assets/sushi_platter.png',
        origins: ['Japan'],
        cookTime: '30 min'
    },
    {
        id: '4',
        name: 'Margherita Pizza',
        description: 'Classic Neapolitan-style pizza with fresh basil',
        price: 9.99,
        tags: ['pizza', 'italian'],
        favorite: false,
        stars: 4.2,
        imageUrl: 'assets/margherita-pizza.png',
        origins: ['Italy'],
        cookTime: '1 hr 15 min'
    },
    {
        id: '5',
        name: 'Pad Thai',
        description: 'Stir-fried rice noodles with shrimp, egg, and bean sprouts',
        price: 10.99,
        tags: ['thai', 'noodles', 'shrimp'],
        favorite: true,
        stars: 4.6,
        imageUrl: 'assets/pad-thai.png',
        origins: ['Thailand'],
        cookTime: '30 min'
    },
    {
        id: '6',
        name: 'Beef Tacos',
        description: 'Soft tortillas filled with seasoned ground beef, lettuce, and cheese',
        price: 7.99,
        tags: ['mexican', 'tacos', 'beef'],
        favorite: false,
        stars: 4.3,
        imageUrl: 'assets/beef-tacos.png',
        origins: ['Mexico'],
        cookTime: '30 min'
    },
    {
        id: '7',
        name: 'Falafel Wrap',
        description: 'Crispy falafel balls wrapped in pita bread with veggies and tahini sauce',
        price: 6.49,
        tags: ['mediterranean', 'vegetarian', 'wrap'],
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/falafel-wrap.png',
        origins: ['Lebanon', 'Syria'],
        cookTime: '40 min'
    },
    {
        id: '8',
        name: 'Chicken Tikka Masala',
        description: 'Boneless chicken in a creamy tomato-based curry sauce',
        price: 11.99,
        tags: ['indian', 'curry', 'chicken'],
        favorite: false,
        stars: 4.7,
        imageUrl: 'assets/chicken-tikka-masala.png',
        origins: ['India'],
        cookTime: '1hr 15 min'
    }
]
export const sample_tags:Tag[]=[
    {name:'All', count:8},
    {name: 'vegetarian',count:2},
    {name: 'meat', count:5},
    {name: 'mediterranean', count:1},
    {name: 'mexican', count:2},
    {name: 'indian', count:1},
    {name: 'breakfast', count:1},
    {name: 'dessert', count:1},
    {name:'pizza', count:1}
]