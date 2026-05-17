import React from 'react'
import { Camera, Globe, Send, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Monty Alberto</h3>
            <p className="text-background/60 max-w-sm mb-8 leading-relaxed">
              Le rendez-vous incontournable des gourmets à Abidjan. Pizzeria et Glacier authentique pour des moments de convivialité inoubliables.
            </p>
            <div className="flex gap-4">
              {[Camera, Globe, Send, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <Icon className="w-5 h-5 text-background group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Liens Rapides</h4>
            <ul className="space-y-4">
              {['Menu', 'Avis', 'Galerie', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-background/60 hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-background/60">
              <li>8VJW+7GG, T 27, Abidjan</li>
              <li>+225 48 11 10 11</li>
              <li>contact@montyalberto.ci</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>© {new Date().getFullYear()} Monty Alberto Restaurant. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Mentions Légales</a>
            <a href="#" className="hover:text-primary">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
