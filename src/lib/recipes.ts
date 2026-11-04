// Recipe data extracted from the original Pocket Pantry source.
export type Ingredient = { key: string; text: string };

export type Recipe = {
  id: string;
  name: string;
  origin: string;
  minutes: number;
  serves: number;
  image: string;
  ingredients: Ingredient[];
  cupboard: string[];
  steps: string[];
};

export const GROUPS: { name: string; items: string[] }[] = [
  {
    "name": "Protein",
    "items": [
      "chicken",
      "beef",
      "egg",
      "bacon",
      "sausage",
      "tuna",
      "shrimp",
      "salmon"
    ]
  },
  {
    "name": "Grains and dough",
    "items": [
      "rice",
      "pasta",
      "noodles",
      "bread",
      "tortilla",
      "flour",
      "oats",
      "potato"
    ]
  },
  {
    "name": "Dairy",
    "items": [
      "milk",
      "butter",
      "cheese",
      "mozzarella",
      "feta",
      "yogurt",
      "cream cheese",
      "cream"
    ]
  },
  {
    "name": "Vegetables and aromatics",
    "items": [
      "onion",
      "garlic",
      "tomato",
      "cucumber",
      "avocado",
      "bell pepper",
      "carrot",
      "cabbage",
      "lettuce",
      "ginger",
      "chili",
      "lemon"
    ]
  },
  {
    "name": "Sweet and baking",
    "items": [
      "sugar",
      "honey",
      "chocolate",
      "cocoa",
      "banana",
      "strawberries",
      "baking powder",
      "coffee"
    ]
  },
  {
    "name": "Sauces and extras",
    "items": [
      "soy sauce",
      "mayo",
      "ketchup",
      "peanut butter",
      "kimchi",
      "nori",
      "lentils"
    ]
  }
];

export const RECIPES: Recipe[] = [
  {
    "id": "birria",
    "name": "Birria Tacos",
    "origin": "Mexico · FoodTok classic",
    "minutes": 105,
    "serves": 4,
    "ingredients": [
      {
        "key": "beef",
        "text": "700 g beef chuck, cubed"
      },
      {
        "key": "tortilla",
        "text": "8 small corn tortillas"
      },
      {
        "key": "cheese",
        "text": "200 g mozzarella or Oaxaca cheese, grated"
      },
      {
        "key": "onion",
        "text": "1 large onion, half chopped, half finely diced"
      },
      {
        "key": "chili",
        "text": "3 dried guajillo chilies or 2 fresh red chilies"
      },
      {
        "key": "garlic",
        "text": "4 cloves garlic"
      }
    ],
    "cupboard": [
      "1 tsp cumin",
      "1 tsp dried oregano",
      "1 bay leaf",
      "2 tbsp vinegar",
      "500 ml water",
      "Salt"
    ],
    "steps": [
      "Toast the chilies in a dry pan for 30 seconds, then soak them in hot water for 10 minutes. Blend with the garlic, chopped onion, cumin, oregano, vinegar and a pinch of salt into a smooth paste.",
      "Season the beef with salt and brown it in a large pot with a little oil, 3 to 4 minutes per side. Pour the chili paste over the beef.",
      "Add the water and bay leaf. Cover and simmer on low for 75 to 90 minutes, until the beef shreds easily with a fork.",
      "Shred the beef. Skim the red fat from the top of the broth into a small bowl and keep the broth warm for dipping.",
      "Dip each tortilla in the fat, lay it on a hot pan, add cheese and beef, fold, and cook 2 minutes per side until crisp.",
      "Serve with the diced onion and a cup of warm broth for dunking."
    ],
    "image": "/images/recipes/birria.jpg"
  },
  {
    "id": "smash",
    "name": "Smash Burger",
    "origin": "USA · diner style",
    "minutes": 15,
    "serves": 2,
    "ingredients": [
      {
        "key": "beef",
        "text": "300 g beef mince, 20% fat"
      },
      {
        "key": "bread",
        "text": "2 burger buns"
      },
      {
        "key": "cheese",
        "text": "4 slices cheddar or American cheese"
      },
      {
        "key": "onion",
        "text": "1 small onion, sliced paper thin"
      },
      {
        "key": "ketchup",
        "text": "2 tbsp ketchup"
      }
    ],
    "cupboard": [
      "1 tbsp butter",
      "Salt and pepper",
      "1 tbsp mayo (optional)"
    ],
    "steps": [
      "Divide the mince into 4 loose balls. Do not pack them tight. Slice the onion as thin as you can.",
      "Toast the buns cut side down in butter for 1 minute, then set aside.",
      "Heat a heavy pan until it is smoking hot. Add a ball of mince and press it flat with a spatula for 10 seconds. Season with salt and pepper.",
      "Cook about 2 minutes until the edges are dark and crisp. Scrape it up, flip, and lay a cheese slice on top for 30 seconds.",
      "Stack two patties on each bun with onion and ketchup, and eat right away."
    ],
    "image": "/images/recipes/smash.jpg"
  },
  {
    "id": "dalgona",
    "name": "Dalgona Coffee",
    "origin": "South Korea · lockdown hit",
    "minutes": 5,
    "serves": 1,
    "ingredients": [
      {
        "key": "coffee",
        "text": "2 tbsp instant coffee"
      },
      {
        "key": "sugar",
        "text": "2 tbsp sugar"
      },
      {
        "key": "milk",
        "text": "250 ml cold milk"
      }
    ],
    "cupboard": [
      "2 tbsp hot water",
      "Ice"
    ],
    "steps": [
      "Put the coffee, sugar and hot water in a bowl.",
      "Whisk hard for 3 to 5 minutes until the mix turns thick, pale and fluffy. An electric whisk is faster.",
      "Fill a tall glass with ice and pour in the cold milk.",
      "Spoon the whipped coffee on top and stir it through before drinking."
    ],
    "image": "/images/recipes/dalgona.jpg"
  },
  {
    "id": "fetapasta",
    "name": "Baked Feta Pasta",
    "origin": "Finland · 2021 TikTok",
    "minutes": 35,
    "serves": 3,
    "ingredients": [
      {
        "key": "pasta",
        "text": "250 g short pasta"
      },
      {
        "key": "tomato",
        "text": "500 g cherry tomatoes"
      },
      {
        "key": "feta",
        "text": "200 g block of feta"
      },
      {
        "key": "garlic",
        "text": "3 cloves garlic, sliced"
      }
    ],
    "cupboard": [
      "3 tbsp olive oil",
      "Black pepper",
      "Chili flakes",
      "Fresh basil (optional)"
    ],
    "steps": [
      "Heat the oven to 200°C. Put the tomatoes and garlic in a baking dish, set the feta in the middle, and drizzle with olive oil and pepper.",
      "Bake for 25 to 30 minutes, until the tomatoes burst and the feta is golden.",
      "Meanwhile boil the pasta in salted water until just tender. Save a mug of the pasta water, then drain.",
      "Mash the feta and tomatoes together into a sauce. Loosen with a splash of pasta water.",
      "Stir in the pasta, top with basil and chili flakes, and serve."
    ],
    "image": "/images/recipes/fetapasta.jpg"
  },
  {
    "id": "kdog",
    "name": "Korean Cheese Corn Dog",
    "origin": "South Korea · street food",
    "minutes": 30,
    "serves": 4,
    "ingredients": [
      {
        "key": "sausage",
        "text": "4 hot dogs or sausages"
      },
      {
        "key": "mozzarella",
        "text": "120 g mozzarella, cut into 4 sticks"
      },
      {
        "key": "flour",
        "text": "150 g plain flour"
      },
      {
        "key": "egg",
        "text": "1 egg"
      },
      {
        "key": "milk",
        "text": "120 ml milk"
      },
      {
        "key": "sugar",
        "text": "1 tbsp for the batter, plus extra for rolling"
      },
      {
        "key": "baking powder",
        "text": "1 tsp baking powder"
      }
    ],
    "cupboard": [
      "1/2 tsp salt",
      "Oil for frying",
      "Ketchup to serve"
    ],
    "steps": [
      "Thread a sausage and a mozzarella stick onto each skewer.",
      "Whisk the flour, milk, egg, 1 tbsp sugar, baking powder and salt into a thick, smooth batter. Pour it into a tall glass.",
      "Heat 5 cm of oil to 170°C. Dip each skewer into the batter and turn to coat it fully.",
      "Fry 3 to 4 minutes, turning, until deep golden. Drain on paper towels.",
      "Roll in sugar while hot and drizzle with ketchup."
    ],
    "image": "/images/recipes/kdog.jpg"
  },
  {
    "id": "sushibake",
    "name": "Salmon Sushi Bake",
    "origin": "USA · potluck favorite",
    "minutes": 40,
    "serves": 4,
    "ingredients": [
      {
        "key": "rice",
        "text": "300 g cooked sushi rice"
      },
      {
        "key": "salmon",
        "text": "250 g salmon fillet"
      },
      {
        "key": "cream cheese",
        "text": "100 g cream cheese"
      },
      {
        "key": "mayo",
        "text": "3 tbsp mayo"
      },
      {
        "key": "nori",
        "text": "4 sheets nori"
      }
    ],
    "cupboard": [
      "1 tbsp rice vinegar",
      "1 tbsp sriracha",
      "Sesame seeds"
    ],
    "steps": [
      "Heat the oven to 200°C. Bake the salmon for 12 minutes, then flake it with a fork.",
      "Mix the rice with the rice vinegar and press it into the base of a small baking dish.",
      "Stir the flaked salmon with the cream cheese, 2 tbsp mayo and the sriracha. Spread it over the rice.",
      "Drizzle the last of the mayo on top and bake 10 to 12 minutes, until browned in spots.",
      "Cut the nori into squares. Scoop the bake onto the nori and eat like a taco. Add sesame seeds."
    ],
    "image": "/images/recipes/sushibake.jpg"
  },
  {
    "id": "kimbap",
    "name": "Kimbap",
    "origin": "South Korea · picnic roll",
    "minutes": 40,
    "serves": 3,
    "ingredients": [
      {
        "key": "rice",
        "text": "400 g cooked short-grain rice, warm"
      },
      {
        "key": "nori",
        "text": "3 sheets nori"
      },
      {
        "key": "egg",
        "text": "3 eggs"
      },
      {
        "key": "carrot",
        "text": "1 carrot, cut into sticks"
      },
      {
        "key": "cucumber",
        "text": "1 cucumber, cut into sticks"
      },
      {
        "key": "sausage",
        "text": "3 sausages or slices of ham, cut into strips"
      }
    ],
    "cupboard": [
      "1 tbsp sesame oil",
      "1/2 tsp salt",
      "Sesame seeds"
    ],
    "steps": [
      "Mix the warm rice with the sesame oil, salt and sesame seeds.",
      "Beat the eggs and cook a thin omelet, then slice into strips. Fry the carrot and sausage for 2 minutes each.",
      "Lay a nori sheet shiny side down. Spread rice over it in a thin layer, leaving 3 cm bare at the top edge.",
      "Place the egg, carrot, cucumber and sausage in a line near the bottom edge. Roll tightly, pressing as you go, and seal with a dab of water.",
      "Brush with sesame oil and slice into rounds with a sharp, wet knife."
    ],
    "image": "/images/recipes/kimbap.jpg"
  },
  {
    "id": "buldak",
    "name": "Spicy Carbonara Noodles",
    "origin": "South Korea · ramen hack",
    "minutes": 12,
    "serves": 1,
    "ingredients": [
      {
        "key": "noodles",
        "text": "1 pack (100 g) ramen noodles"
      },
      {
        "key": "egg",
        "text": "1 egg yolk"
      },
      {
        "key": "cheese",
        "text": "30 g grated cheese or 1 slice"
      },
      {
        "key": "chili",
        "text": "1 tsp chili flakes or chili paste"
      }
    ],
    "cupboard": [
      "1 tbsp soy sauce",
      "1 tsp sugar",
      "Sesame seeds"
    ],
    "steps": [
      "Boil the noodles for 3 minutes. Keep 3 tbsp of the cooking water, then drain.",
      "In the hot pan, stir the chili, soy sauce, sugar and reserved water into a quick sauce for 30 seconds.",
      "Add the noodles and toss. Take the pan off the heat.",
      "Stir in the egg yolk and cheese until the sauce turns glossy and creamy. Top with sesame seeds."
    ],
    "image": "/images/recipes/buldak.jpg"
  },
  {
    "id": "marry",
    "name": "Marry Me Chicken",
    "origin": "USA · Instagram favorite",
    "minutes": 35,
    "serves": 4,
    "ingredients": [
      {
        "key": "chicken",
        "text": "600 g chicken breast, sliced into thin cutlets"
      },
      {
        "key": "cream",
        "text": "200 ml double cream"
      },
      {
        "key": "tomato",
        "text": "4 chopped tomatoes or 100 g sun-dried tomatoes"
      },
      {
        "key": "garlic",
        "text": "4 cloves garlic, minced"
      },
      {
        "key": "cheese",
        "text": "40 g grated parmesan"
      }
    ],
    "cupboard": [
      "2 tbsp olive oil",
      "1 tsp Italian herbs",
      "150 ml chicken stock",
      "2 tbsp flour",
      "Salt and pepper"
    ],
    "steps": [
      "Season the chicken with salt and pepper and dust with flour.",
      "Sear in olive oil for 4 minutes per side until golden. Move to a plate.",
      "In the same pan, soften the garlic for 30 seconds. Add the tomatoes, stock and herbs and simmer for 5 minutes.",
      "Stir in the cream and parmesan until the sauce thickens, about 3 minutes.",
      "Return the chicken to the pan and simmer 5 minutes, until cooked through. Serve with pasta or rice."
    ],
    "image": "/images/recipes/marry.jpg"
  },
  {
    "id": "cucumber",
    "name": "Smashed Cucumber Salad",
    "origin": "China · TikTok staple",
    "minutes": 10,
    "serves": 2,
    "ingredients": [
      {
        "key": "cucumber",
        "text": "2 small cucumbers"
      },
      {
        "key": "garlic",
        "text": "3 cloves garlic, minced"
      },
      {
        "key": "soy sauce",
        "text": "2 tbsp soy sauce"
      },
      {
        "key": "chili",
        "text": "1 tsp chili oil or flakes"
      }
    ],
    "cupboard": [
      "1 tbsp rice vinegar",
      "1 tsp sugar",
      "1/2 tsp salt",
      "Sesame seeds"
    ],
    "steps": [
      "Lay each cucumber flat and whack it with the side of a knife until it cracks. Tear or cut into bite-size chunks.",
      "Toss with the salt and leave for 5 minutes, then drain off the water.",
      "Stir together the garlic, soy sauce, vinegar, sugar and chili oil.",
      "Pour over the cucumber, toss well, and finish with sesame seeds."
    ],
    "image": "/images/recipes/cucumber.jpg"
  },
  {
    "id": "salmonbowl",
    "name": "Salmon Rice Bowl",
    "origin": "USA · the Emily bowl",
    "minutes": 15,
    "serves": 2,
    "ingredients": [
      {
        "key": "salmon",
        "text": "2 salmon fillets, about 150 g each"
      },
      {
        "key": "rice",
        "text": "2 cups warm cooked rice"
      },
      {
        "key": "mayo",
        "text": "2 tbsp mayo"
      },
      {
        "key": "soy sauce",
        "text": "1 tbsp soy sauce"
      },
      {
        "key": "nori",
        "text": "2 sheets nori"
      },
      {
        "key": "avocado",
        "text": "1 ripe avocado"
      }
    ],
    "cupboard": [
      "1 tbsp oil",
      "1 tbsp sriracha",
      "Sesame seeds"
    ],
    "steps": [
      "Pan-fry the salmon in oil for 4 minutes per side until cooked through.",
      "Put the warm rice in a bowl and flake the hot salmon over it. Let the heat soften the rice.",
      "Add the soy sauce, mayo and sriracha, and stir until creamy.",
      "Slice the avocado and add it with sesame seeds.",
      "Tear off pieces of nori and use them to scoop up bites."
    ],
    "image": "/images/recipes/salmonbowl.jpg"
  },
  {
    "id": "avotoast",
    "name": "Avocado Egg Toast",
    "origin": "Brunch icon",
    "minutes": 10,
    "serves": 2,
    "ingredients": [
      {
        "key": "bread",
        "text": "2 thick slices bread"
      },
      {
        "key": "avocado",
        "text": "1 ripe avocado"
      },
      {
        "key": "egg",
        "text": "2 eggs"
      },
      {
        "key": "lemon",
        "text": "1/2 lemon"
      }
    ],
    "cupboard": [
      "1 tsp oil or butter",
      "Salt and pepper",
      "Chili flakes"
    ],
    "steps": [
      "Toast the bread until crisp and golden.",
      "Mash the avocado with a squeeze of lemon, salt and pepper.",
      "Fry the eggs in a little oil or butter for 2 to 3 minutes until the whites are set and the yolk is still runny.",
      "Spread the avocado on the toast, top with the eggs, and finish with chili flakes."
    ],
    "image": "/images/recipes/avotoast.jpg"
  },
  {
    "id": "jpancake",
    "name": "Fluffy Japanese Pancakes",
    "origin": "Japan · cafe craze",
    "minutes": 30,
    "serves": 2,
    "ingredients": [
      {
        "key": "egg",
        "text": "2 eggs, yolks and whites separated"
      },
      {
        "key": "flour",
        "text": "60 g plain flour"
      },
      {
        "key": "milk",
        "text": "50 ml milk"
      },
      {
        "key": "sugar",
        "text": "2 tbsp sugar"
      },
      {
        "key": "butter",
        "text": "1 tbsp butter, melted, plus more for serving"
      },
      {
        "key": "baking powder",
        "text": "1/2 tsp baking powder"
      }
    ],
    "cupboard": [
      "1/2 tsp vanilla",
      "1 tbsp water",
      "Oil for the pan",
      "Maple syrup"
    ],
    "steps": [
      "Whisk the yolks, milk, melted butter and vanilla. Stir in the flour and baking powder until smooth.",
      "Whip the egg whites with the sugar until they hold stiff, glossy peaks.",
      "Fold a third of the whites into the batter to loosen it, then gently fold in the rest.",
      "Heat a lightly oiled pan on the lowest heat. Spoon in three tall mounds, add a splash of water around them and cover. Cook 5 to 6 minutes.",
      "Flip gently, cover again, and cook 4 more minutes. Serve stacked with butter and syrup."
    ],
    "image": "/images/recipes/jpancake.jpg"
  },
  {
    "id": "mac",
    "name": "Mac and Cheese",
    "origin": "Comfort classic",
    "minutes": 30,
    "serves": 4,
    "ingredients": [
      {
        "key": "pasta",
        "text": "250 g macaroni"
      },
      {
        "key": "cheese",
        "text": "250 g sharp cheddar, grated"
      },
      {
        "key": "milk",
        "text": "500 ml milk"
      },
      {
        "key": "butter",
        "text": "40 g butter"
      },
      {
        "key": "flour",
        "text": "40 g plain flour"
      }
    ],
    "cupboard": [
      "1/2 tsp mustard powder",
      "Salt and pepper"
    ],
    "steps": [
      "Boil the macaroni in salted water until just tender, then drain.",
      "Melt the butter in a pot, whisk in the flour, and cook for 1 minute.",
      "Add the milk a little at a time, whisking, and simmer 5 minutes until it coats a spoon.",
      "Take off the heat. Stir in the cheese, mustard, salt and pepper until smooth.",
      "Fold in the macaroni and serve hot."
    ],
    "image": "/images/recipes/mac.jpg"
  },
  {
    "id": "butterchicken",
    "name": "Butter Chicken",
    "origin": "India · global favorite",
    "minutes": 50,
    "serves": 4,
    "ingredients": [
      {
        "key": "chicken",
        "text": "600 g boneless chicken thigh, cubed"
      },
      {
        "key": "yogurt",
        "text": "100 g yogurt"
      },
      {
        "key": "ginger",
        "text": "1 tbsp grated ginger"
      },
      {
        "key": "garlic",
        "text": "4 cloves garlic, minced"
      },
      {
        "key": "butter",
        "text": "50 g butter"
      },
      {
        "key": "tomato",
        "text": "400 g crushed tomatoes"
      },
      {
        "key": "cream",
        "text": "100 ml cream"
      }
    ],
    "cupboard": [
      "1 tbsp garam masala",
      "1 tsp chili powder",
      "1 tsp dried fenugreek leaves",
      "1 tsp sugar",
      "Salt"
    ],
    "steps": [
      "Mix the chicken with the yogurt, half the ginger and garlic, half the spices and a pinch of salt. Marinate 20 minutes or longer.",
      "Cook the chicken in a hot pan in batches until browned. Set aside.",
      "Melt the butter in the same pan. Fry the remaining ginger and garlic for 1 minute, then add the tomatoes, remaining spices and sugar. Simmer 10 minutes.",
      "Blend the sauce until smooth, then return it to the pan.",
      "Add the chicken and cream and simmer 10 minutes. Crush the fenugreek leaves over the top and serve with rice or naan."
    ],
    "image": "/images/recipes/butterchicken.jpg"
  },
  {
    "id": "biryani",
    "name": "Kacchi Biryani",
    "origin": "Bangladesh · Dhaka pride",
    "minutes": 120,
    "serves": 6,
    "ingredients": [
      {
        "key": "chicken",
        "text": "800 g bone-in chicken or mutton pieces"
      },
      {
        "key": "yogurt",
        "text": "200 g yogurt"
      },
      {
        "key": "ginger",
        "text": "2 tbsp ginger paste"
      },
      {
        "key": "garlic",
        "text": "2 tbsp garlic paste"
      },
      {
        "key": "chili",
        "text": "4 green chilies"
      },
      {
        "key": "onion",
        "text": "3 large onions, thinly sliced"
      },
      {
        "key": "rice",
        "text": "500 g basmati rice, soaked 30 minutes"
      }
    ],
    "cupboard": [
      "2 tbsp biryani masala",
      "4 cardamom pods, 2 cinnamon sticks, 4 cloves",
      "1 tsp turmeric",
      "100 ml oil or ghee",
      "Salt",
      "Saffron in warm milk (optional)"
    ],
    "steps": [
      "Fry the onions in the oil slowly until deep golden and crisp. Lift them out and keep the oil.",
      "Marinate the chicken with the yogurt, ginger, garlic, chilies, biryani masala, turmeric, half the fried onion and salt for at least 1 hour.",
      "Boil the rice with the whole spices and salt until 70% cooked, then drain.",
      "Spread the marinated chicken in a heavy pot. Layer the rice on top, then the remaining fried onion, saffron milk and a few spoons of the onion oil.",
      "Seal the pot with foil and a tight lid. Cook on the lowest heat for 45 to 50 minutes.",
      "Rest for 10 minutes, then gently mix from the bottom and serve."
    ],
    "image": "/images/recipes/biryani.jpg"
  },
  {
    "id": "khichuri",
    "name": "Bhuna Khichuri",
    "origin": "Bangladesh · rainy-day classic",
    "minutes": 45,
    "serves": 4,
    "ingredients": [
      {
        "key": "rice",
        "text": "1 cup rice"
      },
      {
        "key": "lentils",
        "text": "1/2 cup moong dal"
      },
      {
        "key": "potato",
        "text": "1 potato, diced"
      },
      {
        "key": "onion",
        "text": "1 onion, thinly sliced"
      },
      {
        "key": "egg",
        "text": "4 eggs, hard boiled"
      }
    ],
    "cupboard": [
      "2 tbsp ghee or oil",
      "1 tsp turmeric",
      "1 tsp cumin",
      "2 bay leaves",
      "2 green chilies",
      "5 cups water",
      "Salt"
    ],
    "steps": [
      "Wash the rice and dal together. Dry-roast the dal in a pan for 2 minutes first for extra flavor.",
      "Heat the ghee and fry the onion until golden. Add the bay leaves, cumin and turmeric for 30 seconds.",
      "Add the potato, rice and dal. Stir for 2 minutes, then add the water, chilies and salt.",
      "Cover and simmer for 25 to 30 minutes, stirring now and then, until soft and porridge-like.",
      "Serve hot with the halved boiled eggs on top."
    ],
    "image": "/images/recipes/khichuri.jpg"
  },
  {
    "id": "beefbhuna",
    "name": "Beef Bhuna",
    "origin": "Bangladesh · Eid table",
    "minutes": 130,
    "serves": 5,
    "ingredients": [
      {
        "key": "beef",
        "text": "1 kg beef, cut into pieces"
      },
      {
        "key": "onion",
        "text": "4 onions, thinly sliced"
      },
      {
        "key": "garlic",
        "text": "1.5 tbsp garlic paste"
      },
      {
        "key": "ginger",
        "text": "1.5 tbsp ginger paste"
      },
      {
        "key": "chili",
        "text": "3 green chilies and 1 tsp red chili powder"
      }
    ],
    "cupboard": [
      "100 ml oil",
      "1 tsp turmeric",
      "1 tbsp coriander powder",
      "1 tsp cumin powder",
      "3 cardamom pods, 2 cinnamon sticks",
      "Salt"
    ],
    "steps": [
      "Heat the oil and fry the onions until deep brown. Add the whole spices.",
      "Add the ginger and garlic pastes, turmeric, coriander, cumin and chili powder. Fry 3 minutes, sprinkling water if it sticks.",
      "Add the beef and salt. Stir on high heat for 10 minutes until the meat is coated and browned.",
      "Cover and cook on low for 90 minutes, stirring every 15 minutes and adding a splash of water if needed.",
      "Uncover, add the green chilies, and reduce until the oil separates and the gravy is thick and dark. Serve with rice or paratha."
    ],
    "image": "/images/recipes/beefbhuna.jpg"
  },
  {
    "id": "margherita",
    "name": "Margherita Pizza",
    "origin": "Italy · always trending",
    "minutes": 80,
    "serves": 2,
    "ingredients": [
      {
        "key": "flour",
        "text": "300 g plain flour"
      },
      {
        "key": "tomato",
        "text": "400 g canned crushed tomatoes"
      },
      {
        "key": "mozzarella",
        "text": "200 g mozzarella"
      },
      {
        "key": "garlic",
        "text": "2 cloves garlic, grated"
      }
    ],
    "cupboard": [
      "1 tsp dry yeast",
      "1 tsp salt",
      "200 ml warm water",
      "1 tbsp olive oil",
      "Fresh basil"
    ],
    "steps": [
      "Mix the flour, yeast, salt, warm water and oil into a dough. Knead 8 minutes until smooth, then cover and rest for 1 hour.",
      "Heat the oven to its highest setting, with a baking tray inside.",
      "Stir the garlic and a pinch of salt into the crushed tomatoes.",
      "Divide the dough in two and stretch each piece into a round on floured parchment.",
      "Spread the sauce, add torn mozzarella, slide onto the hot tray, and bake 8 to 10 minutes. Top with basil."
    ],
    "image": "/images/recipes/margherita.jpg"
  },
  {
    "id": "carbonara",
    "name": "Spaghetti Carbonara",
    "origin": "Italy · endless reels",
    "minutes": 20,
    "serves": 2,
    "ingredients": [
      {
        "key": "pasta",
        "text": "200 g spaghetti"
      },
      {
        "key": "egg",
        "text": "2 whole eggs plus 1 yolk"
      },
      {
        "key": "cheese",
        "text": "50 g pecorino or parmesan, finely grated"
      },
      {
        "key": "bacon",
        "text": "100 g bacon or pancetta, diced"
      }
    ],
    "cupboard": [
      "Black pepper",
      "Salt"
    ],
    "steps": [
      "Boil the spaghetti in well-salted water. Save a mug of the water before draining.",
      "Fry the bacon in a dry pan until crisp. Turn off the heat.",
      "Whisk the eggs, yolk, cheese and plenty of pepper in a bowl.",
      "Add the hot pasta to the bacon pan. Pour in the egg mix off the heat and toss, adding splashes of pasta water until creamy.",
      "Serve immediately with extra cheese and pepper."
    ],
    "image": "/images/recipes/carbonara.jpg"
  },
  {
    "id": "padthai",
    "name": "Pad Thai",
    "origin": "Thailand · street classic",
    "minutes": 25,
    "serves": 2,
    "ingredients": [
      {
        "key": "noodles",
        "text": "150 g flat rice noodles"
      },
      {
        "key": "shrimp",
        "text": "150 g shrimp, peeled"
      },
      {
        "key": "egg",
        "text": "2 eggs"
      },
      {
        "key": "garlic",
        "text": "2 cloves garlic, minced"
      },
      {
        "key": "peanut butter",
        "text": "1 tbsp peanut butter"
      },
      {
        "key": "soy sauce",
        "text": "2 tbsp soy sauce"
      },
      {
        "key": "lemon",
        "text": "juice of 1 lemon"
      }
    ],
    "cupboard": [
      "1 tbsp sugar",
      "1 tbsp fish sauce",
      "2 tbsp oil",
      "Bean sprouts and spring onion"
    ],
    "steps": [
      "Soak the noodles in warm water for 20 minutes until bendy, then drain.",
      "Stir the soy sauce, lemon juice, sugar, fish sauce and peanut butter into a sauce.",
      "Heat the oil in a wok. Fry the garlic for 15 seconds, then the shrimp for 2 minutes.",
      "Push everything aside, scramble the eggs, then add the noodles and sauce. Toss on high heat for 2 to 3 minutes.",
      "Add the sprouts and spring onion, toss once, and serve with extra lemon."
    ],
    "image": "/images/recipes/padthai.jpg"
  },
  {
    "id": "ramenegg",
    "name": "Soy Egg Ramen",
    "origin": "Japan · noodle shop",
    "minutes": 25,
    "serves": 2,
    "ingredients": [
      {
        "key": "noodles",
        "text": "2 packs ramen noodles"
      },
      {
        "key": "egg",
        "text": "2 eggs"
      },
      {
        "key": "soy sauce",
        "text": "3 tbsp soy sauce"
      },
      {
        "key": "ginger",
        "text": "1 thumb of ginger, sliced"
      },
      {
        "key": "onion",
        "text": "2 spring onions, sliced"
      }
    ],
    "cupboard": [
      "700 ml water or stock",
      "1 tsp sesame oil",
      "1 tsp sugar"
    ],
    "steps": [
      "Lower the eggs into boiling water for exactly 6 and a half minutes. Move to ice water, then peel.",
      "Simmer the water or stock with the ginger, soy sauce and sugar for 10 minutes.",
      "Cook the noodles separately in plain boiling water for 3 minutes and drain.",
      "Divide the noodles between bowls and ladle the hot broth over them.",
      "Halve the eggs and add them with the spring onion and a few drops of sesame oil."
    ],
    "image": "/images/recipes/ramenegg.jpg"
  },
  {
    "id": "wrap",
    "name": "Folded Tortilla Wrap",
    "origin": "TikTok wrap hack",
    "minutes": 10,
    "serves": 1,
    "ingredients": [
      {
        "key": "tortilla",
        "text": "1 large tortilla"
      },
      {
        "key": "cheese",
        "text": "40 g grated cheese"
      },
      {
        "key": "chicken",
        "text": "80 g cooked chicken, shredded"
      },
      {
        "key": "lettuce",
        "text": "2 lettuce leaves"
      }
    ],
    "cupboard": [
      "1 tbsp sauce of your choice"
    ],
    "steps": [
      "Lay the tortilla flat and cut a slit from the center to one edge.",
      "Place the cheese, chicken, lettuce and sauce, one in each quarter of the tortilla.",
      "Fold quarter by quarter around the center until you have a triangle.",
      "Toast in a dry pan for 2 minutes per side until crisp and the cheese melts."
    ],
    "image": "/images/recipes/wrap.jpg"
  },
  {
    "id": "smashpotato",
    "name": "Crispy Smashed Potatoes",
    "origin": "Everywhere on FoodTok",
    "minutes": 55,
    "serves": 3,
    "ingredients": [
      {
        "key": "potato",
        "text": "600 g baby potatoes"
      },
      {
        "key": "butter",
        "text": "40 g butter, melted"
      },
      {
        "key": "garlic",
        "text": "3 cloves garlic, grated"
      },
      {
        "key": "cheese",
        "text": "40 g parmesan, grated"
      }
    ],
    "cupboard": [
      "2 tbsp olive oil",
      "Salt and pepper",
      "Chopped parsley"
    ],
    "steps": [
      "Boil the potatoes in salted water for 15 to 20 minutes until completely tender. Drain and let them steam dry for 5 minutes.",
      "Heat the oven to 220°C and oil a baking tray.",
      "Place the potatoes on the tray and press each one flat with the bottom of a glass.",
      "Mix the butter, garlic, salt and pepper and brush it over each potato. Roast 25 minutes.",
      "Sprinkle with the parmesan and roast 5 more minutes until deep golden. Top with parsley."
    ],
    "image": "/images/recipes/smashpotato.jpg"
  },
  {
    "id": "gyoza",
    "name": "Pan-Fried Dumplings",
    "origin": "East Asia",
    "minutes": 60,
    "serves": 4,
    "ingredients": [
      {
        "key": "flour",
        "text": "200 g plain flour"
      },
      {
        "key": "chicken",
        "text": "200 g minced chicken"
      },
      {
        "key": "cabbage",
        "text": "150 g cabbage, finely chopped"
      },
      {
        "key": "ginger",
        "text": "1 tsp grated ginger"
      },
      {
        "key": "garlic",
        "text": "2 cloves garlic, minced"
      },
      {
        "key": "soy sauce",
        "text": "1 tbsp soy sauce"
      }
    ],
    "cupboard": [
      "100 ml hot water for the dough",
      "1 tsp sesame oil",
      "100 ml water for steaming",
      "Oil for frying"
    ],
    "steps": [
      "Mix the flour with the hot water, knead 5 minutes, cover and rest for 30 minutes.",
      "Salt the cabbage for 5 minutes and squeeze out the water. Mix it with the chicken, ginger, garlic, soy sauce and sesame oil.",
      "Roll the dough thin and cut into 24 rounds, about 8 cm wide.",
      "Put a spoon of filling in each round, fold over and pleat the edge to seal.",
      "Fry the bottoms in oil for 2 minutes until golden. Add the steaming water, cover, and cook 5 minutes. Serve with soy sauce."
    ],
    "image": "/images/recipes/gyoza.jpg"
  },
  {
    "id": "bananabread",
    "name": "Banana Bread",
    "origin": "2020 baking boom",
    "minutes": 75,
    "serves": 8,
    "ingredients": [
      {
        "key": "banana",
        "text": "3 very ripe bananas"
      },
      {
        "key": "flour",
        "text": "190 g plain flour"
      },
      {
        "key": "sugar",
        "text": "100 g sugar"
      },
      {
        "key": "egg",
        "text": "1 egg"
      },
      {
        "key": "butter",
        "text": "75 g butter, melted"
      },
      {
        "key": "baking powder",
        "text": "2 tsp baking powder"
      }
    ],
    "cupboard": [
      "1/4 tsp salt",
      "1 tsp vanilla"
    ],
    "steps": [
      "Heat the oven to 175°C and line a loaf tin with parchment.",
      "Mash the bananas in a large bowl. Stir in the melted butter, sugar, egg and vanilla.",
      "Fold in the flour, baking powder and salt until just combined. Do not overmix.",
      "Pour into the tin and bake for 50 to 60 minutes, until a skewer comes out clean.",
      "Cool in the tin for 10 minutes, then lift out and slice."
    ],
    "image": "/images/recipes/bananabread.jpg"
  },
  {
    "id": "tanghulu",
    "name": "Strawberry Tanghulu",
    "origin": "China · candied fruit",
    "minutes": 20,
    "serves": 2,
    "ingredients": [
      {
        "key": "strawberries",
        "text": "8 firm strawberries, washed and fully dry"
      },
      {
        "key": "sugar",
        "text": "200 g sugar"
      }
    ],
    "cupboard": [
      "100 ml water",
      "Skewers",
      "A bowl of ice water"
    ],
    "steps": [
      "Dry the strawberries completely and thread 2 or 3 onto each skewer. Line a tray with parchment.",
      "Heat the sugar and water in a small pan over medium heat without stirring, for 8 to 10 minutes, until it is lightly golden. A drop in ice water should turn hard and snap.",
      "Work fast and carefully, because the syrup is extremely hot. Tilt the pan and roll each skewer through the syrup.",
      "Lay the skewers on the parchment and let them set for 2 minutes. Eat the same day, before the candy softens."
    ],
    "image": "/images/recipes/tanghulu.jpg"
  },
  {
    "id": "lava",
    "name": "Chocolate Lava Cake",
    "origin": "Restaurant dessert at home",
    "minutes": 25,
    "serves": 2,
    "ingredients": [
      {
        "key": "chocolate",
        "text": "100 g dark chocolate"
      },
      {
        "key": "butter",
        "text": "100 g butter, plus extra for the molds"
      },
      {
        "key": "egg",
        "text": "2 eggs plus 2 yolks"
      },
      {
        "key": "sugar",
        "text": "50 g sugar"
      },
      {
        "key": "flour",
        "text": "2 tbsp plain flour"
      }
    ],
    "cupboard": [
      "Pinch of salt",
      "Cocoa to dust the molds"
    ],
    "steps": [
      "Heat the oven to 200°C. Butter two ramekins and dust with cocoa.",
      "Melt the chocolate and butter together over a pan of gently simmering water. Cool for 5 minutes.",
      "Whisk the eggs, yolks and sugar until pale and thick, about 3 minutes.",
      "Fold the chocolate mix into the eggs, then the flour and salt. Divide between the ramekins.",
      "Bake 10 to 12 minutes, until the edges are set and the middle still wobbles. Rest 1 minute, then turn out onto plates."
    ],
    "image": "/images/recipes/lava.jpg"
  },
  {
    "id": "chocostraw",
    "name": "Chocolate-Dipped Strawberries",
    "origin": "Valentine staple",
    "minutes": 25,
    "serves": 4,
    "ingredients": [
      {
        "key": "strawberries",
        "text": "250 g strawberries, washed and fully dry"
      },
      {
        "key": "chocolate",
        "text": "150 g chocolate, chopped"
      }
    ],
    "cupboard": [
      "1 tsp oil",
      "Sprinkles or crushed nuts (optional)"
    ],
    "steps": [
      "Line a tray with parchment. Make sure the strawberries are completely dry.",
      "Melt the chocolate with the oil in short 20-second bursts in the microwave, stirring each time, until smooth.",
      "Hold each berry by the stem, dip it in the chocolate, and let the excess drip off.",
      "Place on the tray, add sprinkles if you like, and chill for 15 minutes until set."
    ],
    "image": "/images/recipes/chocostraw.jpg"
  },
  {
    "id": "overnight",
    "name": "Overnight Oats",
    "origin": "Meal-prep breakfast",
    "minutes": 5,
    "serves": 1,
    "ingredients": [
      {
        "key": "oats",
        "text": "50 g rolled oats"
      },
      {
        "key": "milk",
        "text": "100 ml milk"
      },
      {
        "key": "yogurt",
        "text": "80 g yogurt"
      },
      {
        "key": "honey",
        "text": "1 tbsp honey"
      },
      {
        "key": "banana",
        "text": "1/2 banana, sliced"
      }
    ],
    "cupboard": [
      "Pinch of salt",
      "1 tsp chia seeds (optional)"
    ],
    "steps": [
      "Stir the oats, milk, yogurt, honey and salt together in a jar.",
      "Cover and chill for at least 6 hours or overnight.",
      "Stir, loosen with a splash of milk if it is thick, and top with the sliced banana."
    ],
    "image": "/images/recipes/overnight.jpg"
  },
  {
    "id": "bakedoats",
    "name": "Chocolate Baked Oats",
    "origin": "UK · TikTok breakfast",
    "minutes": 25,
    "serves": 1,
    "ingredients": [
      {
        "key": "oats",
        "text": "50 g rolled oats"
      },
      {
        "key": "banana",
        "text": "1 ripe banana"
      },
      {
        "key": "egg",
        "text": "1 egg"
      },
      {
        "key": "milk",
        "text": "60 ml milk"
      },
      {
        "key": "cocoa",
        "text": "1 tbsp cocoa powder"
      },
      {
        "key": "baking powder",
        "text": "1/2 tsp baking powder"
      }
    ],
    "cupboard": [
      "Honey or sugar to taste",
      "Pinch of salt"
    ],
    "steps": [
      "Heat the oven to 180°C and grease a ramekin.",
      "Blend the oats, banana, egg, milk, cocoa, baking powder and salt into a thick batter. Sweeten to taste.",
      "Pour into the ramekin and bake 18 to 20 minutes, until set but still soft in the middle.",
      "Cool for 3 minutes and eat from the dish."
    ],
    "image": "/images/recipes/bakedoats.jpg"
  },
  {
    "id": "shakshuka",
    "name": "Shakshuka",
    "origin": "North Africa · brunch hit",
    "minutes": 30,
    "serves": 3,
    "ingredients": [
      {
        "key": "tomato",
        "text": "400 g canned or 4 fresh tomatoes, chopped"
      },
      {
        "key": "onion",
        "text": "1 onion, diced"
      },
      {
        "key": "bell pepper",
        "text": "1 bell pepper, diced"
      },
      {
        "key": "garlic",
        "text": "3 cloves garlic, minced"
      },
      {
        "key": "chili",
        "text": "1 fresh chili, sliced"
      },
      {
        "key": "egg",
        "text": "4 eggs"
      }
    ],
    "cupboard": [
      "2 tbsp oil",
      "1 tsp cumin",
      "1 tsp paprika",
      "Salt",
      "Parsley"
    ],
    "steps": [
      "Fry the onion and pepper in oil for 6 minutes until soft.",
      "Add the garlic, chili, cumin and paprika and cook for 1 minute.",
      "Add the tomatoes and salt. Simmer for 10 minutes until thick.",
      "Make four wells in the sauce and crack an egg into each. Cover and cook 5 to 7 minutes, until the whites are set.",
      "Top with parsley and serve from the pan with bread."
    ],
    "image": "/images/recipes/shakshuka.jpg"
  },
  {
    "id": "honeychicken",
    "name": "Honey Garlic Chicken",
    "origin": "FoodTok regular",
    "minutes": 25,
    "serves": 3,
    "ingredients": [
      {
        "key": "chicken",
        "text": "500 g boneless chicken thighs, cubed"
      },
      {
        "key": "honey",
        "text": "3 tbsp honey"
      },
      {
        "key": "garlic",
        "text": "4 cloves garlic, minced"
      },
      {
        "key": "soy sauce",
        "text": "3 tbsp soy sauce"
      }
    ],
    "cupboard": [
      "1 tbsp oil",
      "1 tbsp vinegar",
      "1 tsp cornstarch mixed with 1 tbsp water",
      "Chili flakes"
    ],
    "steps": [
      "Brown the chicken in the oil for 6 to 7 minutes until cooked through.",
      "Add the garlic and cook for 30 seconds.",
      "Stir the honey, soy sauce and vinegar together and pour into the pan.",
      "Simmer for 3 minutes, add the cornstarch mix, and stir until the sauce is sticky and glossy.",
      "Serve over rice with chili flakes."
    ],
    "image": "/images/recipes/honeychicken.jpg"
  },
  {
    "id": "friedrice",
    "name": "Egg Fried Rice",
    "origin": "Takeout staple",
    "minutes": 15,
    "serves": 2,
    "ingredients": [
      {
        "key": "rice",
        "text": "3 cups cold cooked rice"
      },
      {
        "key": "egg",
        "text": "2 eggs, beaten"
      },
      {
        "key": "chicken",
        "text": "150 g cooked chicken, diced"
      },
      {
        "key": "carrot",
        "text": "1 small carrot, diced"
      },
      {
        "key": "onion",
        "text": "1 small onion, diced"
      },
      {
        "key": "soy sauce",
        "text": "2 tbsp soy sauce"
      }
    ],
    "cupboard": [
      "2 tbsp oil",
      "Pepper",
      "Spring onion"
    ],
    "steps": [
      "Heat the oil in a wok on high heat. Fry the onion and carrot for 2 minutes.",
      "Push them aside, pour in the eggs, and scramble until just set.",
      "Add the chicken and cold rice. Break up the clumps and fry for 3 minutes.",
      "Add the soy sauce and pepper, toss well, and finish with spring onion."
    ],
    "image": "/images/recipes/friedrice.jpg"
  },
  {
    "id": "eggsand",
    "name": "Korean Egg Sandwich",
    "origin": "Seoul street toast",
    "minutes": 15,
    "serves": 2,
    "ingredients": [
      {
        "key": "bread",
        "text": "4 slices soft bread"
      },
      {
        "key": "egg",
        "text": "3 eggs"
      },
      {
        "key": "cabbage",
        "text": "1 cup finely shredded cabbage"
      },
      {
        "key": "butter",
        "text": "2 tbsp butter"
      },
      {
        "key": "ketchup",
        "text": "2 tbsp ketchup"
      }
    ],
    "cupboard": [
      "1 tbsp sugar",
      "Salt",
      "1 tbsp mayo (optional)"
    ],
    "steps": [
      "Mix the eggs with the cabbage, a pinch of salt and half the sugar.",
      "Melt a little butter in a pan and pour in the egg mix. Shape it into a square, cook 2 minutes per side.",
      "Toast the bread in the rest of the butter until golden.",
      "Place the egg on one slice, add ketchup, sprinkle with the rest of the sugar and top with the second slice."
    ],
    "image": "/images/recipes/eggsand.jpg"
  },
  {
    "id": "frenchtoast",
    "name": "French Toast",
    "origin": "Brunch standard",
    "minutes": 15,
    "serves": 2,
    "ingredients": [
      {
        "key": "bread",
        "text": "4 thick slices bread"
      },
      {
        "key": "egg",
        "text": "2 eggs"
      },
      {
        "key": "milk",
        "text": "120 ml milk"
      },
      {
        "key": "sugar",
        "text": "1 tbsp sugar"
      },
      {
        "key": "butter",
        "text": "2 tbsp butter"
      }
    ],
    "cupboard": [
      "1/2 tsp cinnamon",
      "1/2 tsp vanilla",
      "Maple syrup"
    ],
    "steps": [
      "Whisk the eggs, milk, sugar, cinnamon and vanilla in a shallow dish.",
      "Soak each bread slice for 20 seconds per side.",
      "Melt the butter in a pan over medium heat and fry the bread 2 to 3 minutes per side until golden.",
      "Serve hot with syrup."
    ],
    "image": "/images/recipes/frenchtoast.jpg"
  },
  {
    "id": "tunamelt",
    "name": "Tuna Melt",
    "origin": "Diner classic",
    "minutes": 10,
    "serves": 2,
    "ingredients": [
      {
        "key": "tuna",
        "text": "1 can tuna (150 g), drained"
      },
      {
        "key": "bread",
        "text": "4 slices bread"
      },
      {
        "key": "cheese",
        "text": "4 slices cheddar"
      },
      {
        "key": "mayo",
        "text": "2 tbsp mayo"
      }
    ],
    "cupboard": [
      "1 tbsp butter",
      "Black pepper"
    ],
    "steps": [
      "Mix the tuna with the mayo and pepper.",
      "Butter one side of each slice of bread.",
      "Pile the tuna on the unbuttered side of two slices, top with cheese, and close the sandwiches with the buttered side out.",
      "Grill in a pan on medium heat for 3 minutes per side until crisp and the cheese melts."
    ],
    "image": "/images/recipes/tunamelt.jpg"
  },
  {
    "id": "tomatosoup",
    "name": "Tomato Soup and Grilled Cheese",
    "origin": "Cold-day combo",
    "minutes": 30,
    "serves": 2,
    "ingredients": [
      {
        "key": "tomato",
        "text": "600 g ripe tomatoes, chopped"
      },
      {
        "key": "onion",
        "text": "1 onion, diced"
      },
      {
        "key": "butter",
        "text": "2 tbsp butter, plus extra for the bread"
      },
      {
        "key": "bread",
        "text": "4 slices bread"
      },
      {
        "key": "cheese",
        "text": "4 slices cheese"
      }
    ],
    "cupboard": [
      "250 ml stock or water",
      "Pinch of sugar",
      "Salt and pepper"
    ],
    "steps": [
      "Melt the butter in a pot and soften the onion for 5 minutes.",
      "Add the tomatoes, stock, sugar and salt. Simmer 15 minutes until soft.",
      "Blend until smooth and season to taste.",
      "Butter the bread, fill with cheese, and grill in a pan for 3 minutes per side until golden.",
      "Serve the sandwiches cut into strips for dunking."
    ],
    "image": "/images/recipes/tomatosoup.jpg"
  },
  {
    "id": "peanutnoodles",
    "name": "Peanut Noodles",
    "origin": "Takeout at home",
    "minutes": 15,
    "serves": 2,
    "ingredients": [
      {
        "key": "noodles",
        "text": "200 g noodles"
      },
      {
        "key": "peanut butter",
        "text": "3 tbsp peanut butter"
      },
      {
        "key": "soy sauce",
        "text": "2 tbsp soy sauce"
      },
      {
        "key": "garlic",
        "text": "2 cloves garlic, grated"
      },
      {
        "key": "chili",
        "text": "1 tsp chili flakes or chili oil"
      }
    ],
    "cupboard": [
      "1 tbsp vinegar",
      "1 tsp sugar",
      "3 tbsp warm water",
      "1 tsp sesame oil"
    ],
    "steps": [
      "Cook the noodles as the pack says, then drain and rinse briefly.",
      "Whisk the peanut butter, soy sauce, garlic, chili, vinegar, sugar, sesame oil and warm water until smooth.",
      "Toss the noodles in the sauce until every strand is coated.",
      "Serve warm or cold, topped with spring onion or sesame seeds."
    ],
    "image": "/images/recipes/peanutnoodles.jpg"
  },
  {
    "id": "kimchifr",
    "name": "Kimchi Fried Rice",
    "origin": "South Korea",
    "minutes": 15,
    "serves": 1,
    "ingredients": [
      {
        "key": "kimchi",
        "text": "1 cup kimchi, chopped"
      },
      {
        "key": "rice",
        "text": "1.5 cups cold cooked rice"
      },
      {
        "key": "egg",
        "text": "1 egg"
      },
      {
        "key": "soy sauce",
        "text": "1 tsp soy sauce"
      }
    ],
    "cupboard": [
      "1 tbsp oil",
      "1 tbsp kimchi juice",
      "1 tsp sesame oil",
      "Spring onion"
    ],
    "steps": [
      "Fry the kimchi in the oil for 3 minutes until it starts to caramelize.",
      "Add the rice, soy sauce and kimchi juice and stir-fry for 3 minutes.",
      "Fry the egg in another pan until the white is crisp at the edges.",
      "Serve the rice topped with the egg, sesame oil and spring onion."
    ],
    "image": "/images/recipes/kimchifr.jpg"
  },
  {
    "id": "nuggets",
    "name": "Crispy Chicken Nuggets",
    "origin": "Fast-food copycat",
    "minutes": 30,
    "serves": 3,
    "ingredients": [
      {
        "key": "chicken",
        "text": "500 g chicken breast, cut into bite-size pieces"
      },
      {
        "key": "flour",
        "text": "80 g plain flour"
      },
      {
        "key": "egg",
        "text": "2 eggs, beaten"
      }
    ],
    "cupboard": [
      "1 tsp paprika",
      "1 tsp garlic powder",
      "1 tsp salt",
      "80 g breadcrumbs (optional, for extra crunch)",
      "Oil for frying"
    ],
    "steps": [
      "Mix the flour with the paprika, garlic powder and salt.",
      "Dip each chicken piece in the flour, then the egg, then the flour again (or breadcrumbs for extra crunch).",
      "Heat 3 cm of oil to 170 to 180°C.",
      "Fry in batches for 3 to 4 minutes until golden and cooked through, with no pink inside.",
      "Drain on paper towels and serve with your favorite dip."
    ],
    "image": "/images/recipes/nuggets.jpg"
  },
  {
    "id": "froyo",
    "name": "Frozen Yogurt Bark",
    "origin": "Snack hack",
    "minutes": 10,
    "serves": 4,
    "ingredients": [
      {
        "key": "yogurt",
        "text": "400 g thick yogurt"
      },
      {
        "key": "honey",
        "text": "2 tbsp honey"
      },
      {
        "key": "strawberries",
        "text": "100 g strawberries, chopped"
      },
      {
        "key": "chocolate",
        "text": "50 g chocolate, chopped"
      }
    ],
    "cupboard": [
      "Parchment paper",
      "A baking tray"
    ],
    "steps": [
      "Stir the honey into the yogurt.",
      "Spread it about 1 cm thick over parchment on a tray.",
      "Scatter the strawberries and chocolate on top and press them in lightly.",
      "Freeze for at least 2 hours, then snap into pieces and keep them frozen."
    ],
    "image": "/images/recipes/froyo.jpg"
  },
  {
    "id": "nicecream",
    "name": "Banana Nice Cream",
    "origin": "Soft-serve hack",
    "minutes": 5,
    "serves": 1,
    "ingredients": [
      {
        "key": "banana",
        "text": "2 ripe bananas, sliced and frozen"
      },
      {
        "key": "milk",
        "text": "2 tbsp milk"
      },
      {
        "key": "peanut butter",
        "text": "1 tbsp peanut butter"
      }
    ],
    "cupboard": [
      "Chopped nuts or chocolate (optional)"
    ],
    "steps": [
      "Put the frozen banana slices, milk and peanut butter in a blender or food processor.",
      "Blend, scraping down the sides, for 2 to 3 minutes until it turns smooth like soft serve.",
      "Eat right away, or freeze for 20 minutes for a firmer scoop."
    ],
    "image": "/images/recipes/nicecream.jpg"
  },
  {
    "id": "garlicbread",
    "name": "Cheesy Garlic Bread",
    "origin": "Pizzeria side · always shared",
    "minutes": 20,
    "serves": 4,
    "ingredients": [
      {
        "key": "bread",
        "text": "1 baguette or 4 thick slices bread"
      },
      {
        "key": "butter",
        "text": "60 g soft butter"
      },
      {
        "key": "garlic",
        "text": "4 cloves garlic, grated"
      },
      {
        "key": "mozzarella",
        "text": "120 g mozzarella, grated"
      }
    ],
    "cupboard": [
      "2 tbsp chopped parsley",
      "Pinch of salt"
    ],
    "steps": [
      "Heat the oven to 200°C. Mash the butter with the garlic, parsley and salt.",
      "Slice the bread open lengthways and spread the garlic butter over both halves.",
      "Bake for 8 minutes until the edges start to crisp.",
      "Top with the mozzarella and bake 5 more minutes until bubbling and golden. Slice and serve hot."
    ],
    "image": "/images/recipes/garlicbread.jpg"
  },
  {
    "id": "aglio",
    "name": "Spaghetti Aglio e Olio",
    "origin": "Italy · midnight pasta",
    "minutes": 20,
    "serves": 2,
    "ingredients": [
      {
        "key": "pasta",
        "text": "200 g spaghetti"
      },
      {
        "key": "garlic",
        "text": "6 cloves garlic, thinly sliced"
      },
      {
        "key": "chili",
        "text": "1 tsp chili flakes or 1 fresh chili, sliced"
      }
    ],
    "cupboard": [
      "4 tbsp olive oil",
      "Chopped parsley",
      "Salt"
    ],
    "steps": [
      "Boil the spaghetti in well-salted water. Save a mug of the pasta water before draining.",
      "Warm the olive oil in a wide pan on low heat. Add the garlic and cook gently for 2 to 3 minutes until pale gold. Do not let it brown.",
      "Add the chili, then the drained pasta and a splash of pasta water.",
      "Toss over the heat for 1 minute until glossy. Finish with parsley."
    ],
    "image": "/images/recipes/aglio.jpg"
  },
  {
    "id": "alfredo",
    "name": "Chicken Alfredo",
    "origin": "USA · creamy pasta",
    "minutes": 30,
    "serves": 3,
    "ingredients": [
      {
        "key": "pasta",
        "text": "250 g fettuccine"
      },
      {
        "key": "chicken",
        "text": "2 chicken breasts, sliced"
      },
      {
        "key": "cream",
        "text": "200 ml cream"
      },
      {
        "key": "butter",
        "text": "30 g butter"
      },
      {
        "key": "garlic",
        "text": "3 cloves garlic, minced"
      },
      {
        "key": "cheese",
        "text": "60 g parmesan, grated"
      }
    ],
    "cupboard": [
      "1 tbsp oil",
      "Salt and pepper"
    ],
    "steps": [
      "Boil the pasta in salted water until just tender, then drain, keeping a little water.",
      "Season the chicken and fry in the oil for 5 to 6 minutes until cooked through. Set aside.",
      "Melt the butter in the same pan, add the garlic for 30 seconds, then pour in the cream and simmer 3 minutes.",
      "Stir in the parmesan until smooth. Add the pasta and chicken and loosen with pasta water.",
      "Serve with black pepper and extra parmesan."
    ],
    "image": "/images/recipes/alfredo.jpg"
  },
  {
    "id": "garlicshrimp",
    "name": "Garlic Butter Shrimp",
    "origin": "FoodTok 10-minute dinner",
    "minutes": 10,
    "serves": 2,
    "ingredients": [
      {
        "key": "shrimp",
        "text": "300 g shrimp, peeled"
      },
      {
        "key": "butter",
        "text": "50 g butter"
      },
      {
        "key": "garlic",
        "text": "5 cloves garlic, minced"
      },
      {
        "key": "lemon",
        "text": "1/2 lemon"
      }
    ],
    "cupboard": [
      "1 tbsp oil",
      "Chili flakes",
      "Chopped parsley",
      "Salt"
    ],
    "steps": [
      "Pat the shrimp dry and season with salt.",
      "Heat the oil in a pan until hot and sear the shrimp for 1 to 2 minutes per side until pink. Move to a plate.",
      "Lower the heat, melt the butter, and cook the garlic and chili for 30 seconds.",
      "Return the shrimp, squeeze in the lemon, and toss. Serve with rice or bread and parsley."
    ],
    "image": "/images/recipes/garlicshrimp.jpg"
  },
  {
    "id": "tamagoyaki",
    "name": "Tamagoyaki",
    "origin": "Japan · rolled omelet",
    "minutes": 10,
    "serves": 2,
    "ingredients": [
      {
        "key": "egg",
        "text": "4 eggs"
      },
      {
        "key": "soy sauce",
        "text": "1 tsp soy sauce"
      },
      {
        "key": "sugar",
        "text": "1 tbsp sugar"
      }
    ],
    "cupboard": [
      "1 tbsp water or dashi",
      "Oil for the pan",
      "Pinch of salt"
    ],
    "steps": [
      "Whisk the eggs with the soy sauce, sugar, water and salt until smooth.",
      "Heat a small non-stick pan on low and wipe it with oiled paper towel. Pour in a thin layer of egg.",
      "When it is just set but still glossy, roll it up from one side to the other.",
      "Slide the roll back to the start, oil the pan, pour in more egg, and lift the roll so egg runs underneath. Roll again. Repeat until the egg is used.",
      "Rest for 2 minutes, then slice into thick pieces."
    ],
    "image": "/images/recipes/tamagoyaki.jpg"
  },
  {
    "id": "loadedpotato",
    "name": "Loaded Baked Potatoes",
    "origin": "Game-day favorite",
    "minutes": 75,
    "serves": 2,
    "ingredients": [
      {
        "key": "potato",
        "text": "2 large potatoes"
      },
      {
        "key": "bacon",
        "text": "4 rashers bacon"
      },
      {
        "key": "cheese",
        "text": "80 g cheddar, grated"
      },
      {
        "key": "onion",
        "text": "2 spring onions or 1 small onion, chopped"
      }
    ],
    "cupboard": [
      "1 tbsp olive oil",
      "Salt",
      "Sour cream (optional)"
    ],
    "steps": [
      "Heat the oven to 220°C. Prick the potatoes, rub with oil and salt, and bake for 55 to 65 minutes until soft inside.",
      "Fry the bacon until crisp and crumble it.",
      "Cut the potatoes open and fluff the insides with a fork.",
      "Fill with cheese and bacon and return to the oven for 5 minutes until melted.",
      "Top with onion and sour cream."
    ],
    "image": "/images/recipes/loadedpotato.jpg"
  },
  {
    "id": "lassi",
    "name": "Banana Lassi",
    "origin": "South Asia · cooling drink",
    "minutes": 5,
    "serves": 2,
    "ingredients": [
      {
        "key": "banana",
        "text": "1 ripe banana"
      },
      {
        "key": "yogurt",
        "text": "250 g yogurt"
      },
      {
        "key": "milk",
        "text": "100 ml cold milk"
      },
      {
        "key": "honey",
        "text": "1 tbsp honey"
      }
    ],
    "cupboard": [
      "A handful of ice",
      "Pinch of cardamom (optional)"
    ],
    "steps": [
      "Put the banana, yogurt, milk, honey and ice in a blender.",
      "Blend for 40 seconds until completely smooth.",
      "Pour into glasses and add a pinch of cardamom if you like."
    ],
    "image": "/images/recipes/lassi.jpg"
  },
  {
    "id": "mugcake",
    "name": "Chocolate Mug Cake",
    "origin": "Late-night microwave dessert",
    "minutes": 5,
    "serves": 1,
    "ingredients": [
      {
        "key": "flour",
        "text": "4 tbsp plain flour"
      },
      {
        "key": "sugar",
        "text": "3 tbsp sugar"
      },
      {
        "key": "cocoa",
        "text": "2 tbsp cocoa powder"
      },
      {
        "key": "milk",
        "text": "3 tbsp milk"
      },
      {
        "key": "butter",
        "text": "2 tbsp butter, melted"
      },
      {
        "key": "baking powder",
        "text": "1/4 tsp baking powder"
      }
    ],
    "cupboard": [
      "Pinch of salt",
      "A few chocolate chips (optional)"
    ],
    "steps": [
      "In a large mug, stir the flour, sugar, cocoa, baking powder and salt.",
      "Add the milk and melted butter and stir until no dry patches remain.",
      "Microwave on high for 70 to 90 seconds until risen and just set.",
      "Let it rest for 1 minute, because the mug will be hot."
    ],
    "image": "/images/recipes/mugcake.jpg"
  },
  {
    "id": "eggcurry",
    "name": "Dim Bhuna (Egg Curry)",
    "origin": "Bangladesh · everyday comfort",
    "minutes": 40,
    "serves": 3,
    "ingredients": [
      {
        "key": "egg",
        "text": "6 eggs, hard boiled and peeled"
      },
      {
        "key": "onion",
        "text": "2 onions, thinly sliced"
      },
      {
        "key": "tomato",
        "text": "2 tomatoes, chopped"
      },
      {
        "key": "garlic",
        "text": "1 tbsp garlic paste"
      },
      {
        "key": "ginger",
        "text": "1 tbsp ginger paste"
      },
      {
        "key": "chili",
        "text": "2 green chilies"
      },
      {
        "key": "potato",
        "text": "1 potato, cubed (optional)"
      }
    ],
    "cupboard": [
      "3 tbsp oil",
      "1 tsp turmeric",
      "1 tsp chili powder",
      "1 tsp cumin powder",
      "200 ml water",
      "Salt"
    ],
    "steps": [
      "Heat the oil and lightly fry the boiled eggs until golden spots appear. Set them aside.",
      "In the same oil, fry the onions until golden brown. Add the garlic and ginger pastes and cook 2 minutes.",
      "Add the turmeric, chili powder, cumin and salt with a splash of water, and fry until the oil separates.",
      "Add the tomatoes and potato and cook for 5 minutes, then pour in the water and simmer 10 minutes until the potato is tender.",
      "Return the eggs and green chilies and simmer 5 minutes. Serve with rice or paratha."
    ],
    "image": "/images/recipes/eggcurry.jpg"
  },
  {
    "id": "shawarma",
    "name": "Chicken Shawarma Wrap",
    "origin": "Middle East · street food",
    "minutes": 40,
    "serves": 3,
    "ingredients": [
      {
        "key": "chicken",
        "text": "500 g chicken thigh, cut into strips"
      },
      {
        "key": "yogurt",
        "text": "120 g yogurt"
      },
      {
        "key": "garlic",
        "text": "4 cloves garlic, minced"
      },
      {
        "key": "lemon",
        "text": "1 lemon, juiced"
      },
      {
        "key": "tortilla",
        "text": "4 flatbreads or tortillas"
      },
      {
        "key": "cucumber",
        "text": "1 cucumber, sliced"
      }
    ],
    "cupboard": [
      "2 tsp paprika",
      "1 tsp cumin",
      "1 tsp turmeric",
      "2 tbsp oil",
      "Salt"
    ],
    "steps": [
      "Mix the chicken with half the yogurt, the garlic, lemon juice, spices, oil and salt. Marinate 30 minutes or overnight.",
      "Cook the chicken in a hot pan for 8 to 10 minutes until charred at the edges and cooked through.",
      "Stir the remaining yogurt with a pinch of salt and a little garlic for a quick sauce.",
      "Warm the flatbreads, spread with the sauce, add chicken and cucumber, and roll tightly."
    ],
    "image": "/images/recipes/shawarma.jpg"
  },
  {
    "id": "tunabowl",
    "name": "Spicy Tuna Rice Bowl",
    "origin": "Instagram lunch",
    "minutes": 10,
    "serves": 1,
    "ingredients": [
      {
        "key": "tuna",
        "text": "1 can tuna, drained"
      },
      {
        "key": "rice",
        "text": "1 cup warm cooked rice"
      },
      {
        "key": "mayo",
        "text": "1 tbsp mayo"
      },
      {
        "key": "chili",
        "text": "1 tsp chili sauce or flakes"
      },
      {
        "key": "cucumber",
        "text": "1/2 cucumber, sliced"
      },
      {
        "key": "nori",
        "text": "1 sheet nori"
      },
      {
        "key": "soy sauce",
        "text": "1 tsp soy sauce"
      }
    ],
    "cupboard": [
      "Sesame seeds"
    ],
    "steps": [
      "Mix the tuna with the mayo, chili sauce and soy sauce.",
      "Put the rice in a bowl and top with the tuna mix and cucumber.",
      "Tear the nori over the top and sprinkle with sesame seeds."
    ],
    "image": "/images/recipes/tunabowl.jpg"
  }
];

export const fmtTime = (m: number) =>
  m >= 60 ? `${(m / 60).toFixed(m % 60 ? 1 : 0).replace(".0", "")} hr` : `${m} min`;

export const getRecipe = (id: string) => RECIPES.find((r) => r.id === id);
