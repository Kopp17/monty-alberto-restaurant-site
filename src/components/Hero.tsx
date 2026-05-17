import React from 'react'
import { Button } from '@blinkdotnew/ui'
import { ChevronRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 animate-fade-in">
            <Star className="w-3 h-3 fill-current" />
            <span>Restaurant & Glacier Authentique à Abidjan</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 tracking-tight text-foreground">
            L'Art de la Pizza & <br /> 
            <span className="text-primary italic">Douceurs Artisanales</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Découvrez Monty Alberto : une expérience culinaire élégante au cœur d'Abidjan. 
            Des pizzas exceptionnelles cuites à la perfection et des glaces artisanales 
            pour un moment de pur délice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8 text-lg" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
              Découvrir le Menu
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg" onClick={() => window.open('https://glovoapp.com', '_blank')}>
              Commander Maintenant
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10" />
          <img 
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1080&auto=format&fit=crop" 
            alt="Authentic Italian Pizza" 
            className="w-full h-full object-cover rounded-l-[100px]"
          />
        </div>
      </div>
    </section>
  )
}
