import React from 'react'
import { Card, Badge, Button } from '@blinkdotnew/ui'
import { Pizza, IceCream, Coffee, ShoppingCart } from 'lucide-react'

const MENU_CATEGORIES = [
  {
    id: 'pizza',
    name: 'Pizzas Artisanales',
    icon: <Pizza className="w-5 h-5" />,
    items: [
      { name: 'Pizza Calzone', description: 'Chaussons farcis traditionnels', price: '7,500 FCFA', tag: 'Populaire' },
      { name: 'Pizza 4 Saisons', description: 'Légumes frais, jambon, champignons et olives', price: '8,000 FCFA' },
      { name: 'Margherita Royale', description: 'Tomate, mozzarella di bufala et basilic frais', price: '6,500 FCFA' },
      { name: 'Regina', description: 'Jambon, champignons et mozzarella', price: '7,000 FCFA' },
    ],
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 'glacier',
    name: 'Le Glacier',
    icon: <IceCream className="w-5 h-5" />,
    items: [
      { name: 'Gelato Artisanal', description: 'Vanille, Chocolat Noir, Pistache ou Fraise', price: '2,500 FCFA', tag: 'Artisanal' },
      { name: 'Sorbets Exotiques', description: 'Mangue, Fruit de la Passion ou Citron Vert', price: '2,000 FCFA' },
      { name: 'Coupe Monty', description: 'Mix de saveurs avec chantilly maison', price: '4,500 FCFA' },
    ],
    image: "https://images.unsplash.com/photo-1652971553776-8d4c1ffa62b5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 'boissons',
    name: 'Boissons & Jus',
    icon: <Coffee className="w-5 h-5" />,
    items: [
      { name: 'Jus de Fruits Frais', description: 'Pressés minute, fruits de saison', price: '2,500 FCFA', tag: 'Bio' },
      { name: 'Smoothies Maison', description: 'Mélanges créatifs et vitaminés', price: '3,500 FCFA' },
      { name: 'Café Italien', description: 'Expresso, Cappuccino ou Latte Macchiato', price: '1,500 FCFA' },
    ],
    image: "https://images.unsplash.com/photo-1622597467821-df79dcb4f94d?q=80&w=600&auto=format&fit=crop"
  }
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Notre Menu</h2>
          <p className="text-muted-foreground">
            Des ingrédients de qualité supérieure sélectionnés avec soin pour vous offrir le meilleur de l'Italie à Abidjan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MENU_CATEGORIES.map((category) => (
            <div key={category.id} className="flex flex-col">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 group">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="bg-primary/90 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold">{category.name}</h3>
                  </div>
                </div>
              </div>

              <Card className="flex-1 p-6 border-none shadow-elegant bg-background/50 backdrop-blur-sm">
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="group cursor-default">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {item.name}
                          {item.tag && (
                            <Badge variant="secondary" className="ml-2 text-[10px] uppercase tracking-wider py-0 px-2 h-4 bg-accent/10 text-accent border-none">
                              {item.tag}
                            </Badge>
                          )}
                        </h4>
                        <span className="font-serif text-primary font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <Button variant="outline" className="w-full rounded-full group" onClick={() => window.open('https://glovoapp.com', '_blank')}>
                    <ShoppingCart className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                    Commander sur Glovo
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
