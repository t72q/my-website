import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { BookOpen, Calendar } from 'lucide-react';

interface JournalEntry {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  author: string;
}

const entries: JournalEntry[] = [
  {
    id: 1,
    date: 'October 15, 2025',
    title: 'The Story Behind the Victorian Pocket Watch',
    excerpt:
      'In the dusty corner of an estate sale, I discovered a brass pocket watch engraved with initials "J.H.M." — a timepiece that once belonged to a railway conductor who never missed a departure...',
    author: 'Curator\'s Notes',
  },
  {
    id: 2,
    date: 'October 8, 2025',
    title: 'When Typewriters Sang',
    excerpt:
      'There\'s a peculiar music to vintage typewriters—the percussive rhythm of keys striking paper, the bell announcing the line\'s end. Each one has its own voice, its own song of stories told and letters composed...',
    author: 'Time Traveler\'s Log',
  },
  {
    id: 3,
    date: 'September 29, 2025',
    title: 'The Golden Age of Travel Trunks',
    excerpt:
      'Before wheels and lightweight synthetic materials, there were steamer trunks—sturdy leather and brass companions that crossed oceans and continents. Each scuff and sticker tells a tale of grand adventures...',
    author: 'Vintage Voyages',
  },
];

export function JournalBlog() {
  return (
    <section className="py-20 px-4 bg-[var(--warm-beige)]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-7 h-7 text-[var(--copper)]" />
              <h2 className="text-4xl text-[var(--copper)]">Traveler's Journal</h2>
            </div>
            <p className="text-[var(--muted-foreground)]">
              Chronicles from our expeditions through time
            </p>
          </motion.div>
        </div>

        {/* Journal Entries */}
        <div className="space-y-8">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="paper-texture border-[var(--copper)]/30 hover:border-[var(--copper)]/50 transition-all duration-300 relative overflow-hidden group">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[var(--copper)]/20" />
                <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-[var(--copper)]/20" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-[var(--copper)]/20" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[var(--copper)]/20" />

                <CardContent className="pt-8 pb-8 px-8">
                  {/* Date */}
                  <div className="flex items-center gap-2 mb-4 text-[var(--muted-foreground)] text-sm">
                    <Calendar className="w-4 h-4" />
                    <time>{entry.date}</time>
                    <span className="mx-2">•</span>
                    <span className="italic">{entry.author}</span>
                  </div>

                  {/* Title with handwritten style */}
                  <h3 className="text-2xl mb-4 text-[var(--foreground)] relative inline-block">
                    {entry.title}
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--copper)]/30" />
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[var(--foreground)] leading-relaxed opacity-90">
                    {entry.excerpt}
                  </p>

                  {/* Read more link */}
                  <button className="mt-4 text-[var(--copper)] hover:text-[var(--copper-light)] transition-colors duration-200 flex items-center gap-2 group-hover:gap-3">
                    Continue reading
                    <span className="transition-all duration-200">→</span>
                  </button>
                </CardContent>

                {/* Subtle neon glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-pink)]/30 to-transparent" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button className="px-8 py-3 border-2 border-[var(--copper)] text-[var(--copper)] hover:bg-[var(--copper)] hover:text-[var(--primary-foreground)] transition-all duration-300 rounded-sm">
            View All Entries
          </button>
        </motion.div>
      </div>
    </section>
  );
}
