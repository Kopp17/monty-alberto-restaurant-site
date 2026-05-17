import React from 'react'
import { Card, Avatar } from '@blinkdotnew/ui'
import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    name: 'larose noir',
    role: 'Local Guide',
    content: 'Les pizzas sont exceptionnelles toujours aussi bonnes. Le cadre a été rénové et est encore plus accueillant. Le patron toujours égal à lui-même a toujours un mot sympathique.',
    rating: 5,
    avatar: 'L'
  },
  {
    name: 'Joseph Elogne',
    role: 'Local Guide',
    content: 'Monty Alberto est un restaurant glacier qui propose un menu assez varié. Le cadre est plaisant, calme et propre, le personnel est accueillant et chaleureux. Ça vaut bien le détour.',
    rating: 5,
    avatar: 'J'
  },
  {
    name: 'Alida Barbara Dilo Lou',
    role: 'Cliente',
    content: "J'aime son service très accueillant. Les pizzas sont délicieuses, particulièrement la 4 saisons !",
    rating: 5,
    avatar: 'A'
  }
]

export function ReviewsSection() {
  return (
    <section id="avis" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-muted-foreground text-lg">
              La satisfaction de nos convives est au cœur de notre passion culinaire.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-bold">
            <Star className="w-5 h-5 fill-current" />
            <span>4.2 / 5 (19 avis Google)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <Card key={i} className="p-8 border-none shadow-elegant relative bg-background hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/5 -z-0" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed italic">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 bg-primary text-white font-bold">
                  {review.avatar}
                </Avatar>
                <div>
                  <h4 className="font-bold text-foreground">{review.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
