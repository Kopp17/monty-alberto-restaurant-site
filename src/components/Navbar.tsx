import React from 'react'
import { Button } from '@blinkdotnew/ui'
import { ShoppingCart, Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Avis', href: '#avis' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'À propos', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold tracking-tight text-primary">Monty Alberto</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="rounded-full px-6"
            onClick={() => window.open('https://glovoapp.com', '_blank')}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Commander
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full rounded-full"
            onClick={() => window.open('https://glovoapp.com', '_blank')}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Commander sur Glovo
          </Button>
        </div>
      )}
    </nav>
  )
}
