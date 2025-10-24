import { motion } from 'motion/react';
import { Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Time Relics', href: '#relics' },
    { label: 'Journal', href: '#journal' },
    { label: 'Find Your Era', href: '#quiz' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 paper-texture border-b border-[var(--copper)]/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative">
              <Clock className="w-8 h-8 text-[var(--copper)]" />
              <div className="absolute inset-0 animate-ping opacity-20">
                <Clock className="w-8 h-8 text-[var(--copper)]" />
              </div>
            </div>
            <span className="text-xl text-[var(--copper)]" style={{ fontFamily: 'Cinzel, serif' }}>
              Timeless Voyage
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-[var(--foreground)] hover:text-[var(--copper)] transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--copper)] transition-all duration-200 group-hover:w-full" />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--copper)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-[var(--foreground)] hover:text-[var(--copper)] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>

      {/* Decorative holographic line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)]/30 to-transparent" />
    </nav>
  );
}
