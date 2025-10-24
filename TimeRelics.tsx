import { motion } from 'motion/react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, Sparkles } from 'lucide-react';

interface Relic {
  id: number;
  name: string;
  era: string;
  price: string;
  image: string;
  description: string;
  condition: string;
}

const relics: Relic[] = [
  {
    id: 1,
    name: 'Leather Travel Trunk',
    era: '1920s',
    price: '$285',
    image: 'https://images.unsplash.com/photo-1700223797363-eac22c5a10ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwc3VpdGNhc2UlMjBsZWF0aGVyfGVufDF8fHx8MTc2MDk0MjEyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Well-worn companion of countless journeys',
    condition: 'Excellent',
  },
  {
    id: 2,
    name: 'Underwood Typewriter',
    era: '1940s',
    price: '$420',
    image: 'https://images.unsplash.com/photo-1622132403916-d4786bf0e7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdHlwZXdyaXRlciUyMGFudGlxdWV8ZW58MXx8fHwxNzYwOTQyMTI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Stories waiting to be typed into existence',
    condition: 'Good',
  },
  {
    id: 3,
    name: 'Rangefinder Camera',
    era: '1960s',
    price: '$195',
    image: 'https://images.unsplash.com/photo-1706010536431-08475efa51ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FtZXJhJTIwcmV0cm98ZW58MXx8fHwxNzYwOTQyMTI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Captured memories frozen in silver halide',
    condition: 'Excellent',
  },
  {
    id: 4,
    name: 'Tube Radio',
    era: '1950s',
    price: '$340',
    image: 'https://images.unsplash.com/photo-1683189400209-a076d6c375b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcmFkaW8lMjBvbGR8ZW58MXx8fHwxNzYwOTQyMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Echoes of broadcasts from another era',
    condition: 'Restored',
  },
  {
    id: 5,
    name: 'Mantel Clock',
    era: '1930s',
    price: '$525',
    image: 'https://images.unsplash.com/photo-1604151967142-db7ed696081f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvY2slMjBhbnRpcXVlfGVufDF8fHx8MTc2MDg2NTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The heartbeat of countless yesterdays',
    condition: 'Excellent',
  },
  {
    id: 6,
    name: 'Brass Globe',
    era: '1970s',
    price: '$165',
    image: 'https://images.unsplash.com/photo-1550608948-b3f8acbd9f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZ2xvYmUlMjBicmFzc3xlbnwxfHx8fDE3NjA5NDIxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A world as it once was, mapped in copper',
    condition: 'Very Good',
  },
];

export function TimeRelics() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--copper)]" />
              <h2 className="text-4xl text-[var(--copper)]">Time Relics</h2>
              <Sparkles className="w-6 h-6 text-[var(--copper)]" />
            </div>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Curated artifacts from across the decades, each with its own tale to tell.
              <br />
              Every piece is authenticated and ready for its next adventure.
            </p>
          </motion.div>
          
          {/* Decorative line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[var(--copper)] to-transparent opacity-50" />
        </div>

        {/* Relics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relics.map((relic, index) => (
            <motion.div
              key={relic.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="paper-texture border-[var(--copper)]/20 hover:border-[var(--copper)]/40 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={relic.image}
                    alt={relic.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Holographic overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--copper)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Era badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[var(--copper)] text-[var(--primary-foreground)] border-none">
                      <Clock className="w-3 h-3 mr-1" />
                      {relic.era}
                    </Badge>
                  </div>
                </div>

                <CardContent className="pt-6">
                  <h3 className="text-xl mb-2 text-[var(--foreground)]">{relic.name}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mb-3">
                    {relic.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--muted-foreground)]">
                      Condition: {relic.condition}
                    </span>
                    <span className="text-[var(--copper)]">
                      {relic.price}
                    </span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full bg-[var(--copper)] hover:bg-[var(--copper-light)] text-[var(--primary-foreground)]"
                  >
                    Acquire Relic
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
