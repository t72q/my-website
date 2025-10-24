import { Clock, MapPin, Mail, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="paper-texture border-t border-[var(--copper)]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[var(--copper)]" />
              <span className="text-xl text-[var(--copper)]" style={{ fontFamily: 'Cinzel, serif' }}>
                Timeless Voyage
              </span>
            </div>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
              Curating extraordinary artifacts from across time. Every piece tells a story,
              every purchase begins an adventure.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="mb-4 text-[var(--copper)]">Visit Us</h4>
            <div className="space-y-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-[var(--copper)]" />
                <span>
                  123 Temporal Lane
                  <br />
                  Nostalgia District, NT 19xx
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--copper)]" />
                <span>hello@timelessvoyage.time</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="mb-4 text-[var(--copper)]">Hours</h4>
            <div className="space-y-2 text-sm text-[var(--muted-foreground)] mb-6">
              <p>Monday - Saturday: 10am - 7pm</p>
              <p>Sunday: 12pm - 5pm</p>
              <p className="italic">Closed on temporal holidays</p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[var(--copper)] flex items-center justify-center text-[var(--copper)] hover:bg-[var(--copper)] hover:text-[var(--primary-foreground)] transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[var(--copper)] flex items-center justify-center text-[var(--copper)] hover:bg-[var(--copper)] hover:text-[var(--primary-foreground)] transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--copper)]/30 to-transparent mb-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-[var(--muted-foreground)]">
          <p>© 2025 Timeless Voyage. All eras reserved.</p>
          <p className="mt-2 italic">
            "Not all who wander in time are lost."
          </p>
        </div>
      </div>
    </footer>
  );
}
