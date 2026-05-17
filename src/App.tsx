import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { ReviewsSection } from './components/ReviewsSection'
import { LocationSection } from './components/LocationSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <div id="galerie" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Galerie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1554647098-5199748c9138?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1560801619-01d71da0f70c?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1590234229790-b210b3dcd422?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1560801530-34efebfecba8?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1627373717559-17b8b84b2c84?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=800&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl aspect-square">
                  <img 
                    src={img} 
                    alt={`Gallery ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <ReviewsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  )
}
