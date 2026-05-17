import React from 'react'
import { Card, Button } from '@blinkdotnew/ui'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

export function LocationSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Simplified map representation */}
              <div className="absolute inset-0 bg-[#f8f5f2]">
                <div className="absolute inset-0 opacity-30 grayscale" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstripe-light.png")' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping" />
                    <MapPin className="w-12 h-12 text-primary relative z-10" />
                  </div>
                  <div className="mt-4 bg-background px-4 py-2 rounded-xl shadow-lg border border-border">
                    <p className="font-bold text-sm">Monty Alberto</p>
                    <p className="text-xs text-muted-foreground">8VJW+7GG, T 27, Abidjan</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6">
                <Button className="rounded-full shadow-lg" onClick={() => window.open('https://maps.google.com', '_blank')}>
                  <Navigation className="w-4 h-4 mr-2" />
                  Ouvrir dans Google Maps
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Nous Trouver</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Adresse</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    8VJW+7GG, T 27, Abidjan<br />
                    Côte d'Ivoire
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Téléphone</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    +225 48 11 10 11
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold mt-2" onClick={() => window.location.href = 'tel:+22548111011'}>
                    Appeler maintenant
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Horaires</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Lundi - Dimanche<br />
                    11h00 - 23h00
                  </p>
                  <p className="text-xs text-primary font-semibold mt-2 uppercase tracking-wider">Ouvert 7j/7</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-accent text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-serif font-bold mb-2">Envie d'une pizza ?</h4>
                <p className="text-white/80 mb-6">Commandez vos plats préférés et faites-vous livrer en quelques minutes via Glovo.</p>
                <Button className="bg-white text-accent hover:bg-white/90 rounded-full px-8" onClick={() => window.open('https://glovoapp.com', '_blank')}>
                  Commander en ligne
                </Button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
