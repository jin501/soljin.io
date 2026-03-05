import { motion } from 'framer-motion';
import { heroPhoto, mosaicPhotos } from '@/data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative h-[88vh] w-full overflow-hidden">
        {/* Hero image */}
        <div className="absolute inset-0">
          <img
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay — heavier at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 text-center px-8">
          <motion.h1
            {...fadeUp(0.2)}
            className="text-display text-[clamp(5rem,12vw,10rem)] font-light text-white leading-none tracking-tight"
          >
            Sol
          </motion.h1>
          <motion.p
            {...fadeUp(0.4)}
            className="text-mono text-sm tracking-[0.3em] uppercase text-white mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Full stack Software Engineer
          </motion.p>
          <motion.p
            {...fadeUp(0.55)}
            className="text-mono text-xs tracking-[0.25em] uppercase text-white/70 mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            I{' '}
  <a href="/projects" className="hover:underline underline-offset-4 decoration-white/40">
    build things
  </a>
  {' '}and{' '}
  <a href="https://climblog.soljin.io/" className="hover:underline underline-offset-4 decoration-white/40" target='_blank'>
    climb mountains
  </a>
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 right-8 z-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-mono text-[10px] tracking-widest text-white/40 uppercase rotate-90 origin-right"
          >
            scroll
          </motion.div>
        </motion.div>
      </section>

      {/* ── Mosaic ───────────────────────────────────── */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] mb-8"
        >
          lately
        </motion.p>

        {/* Mosaic grid — intentionally asymmetric */}
        <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[520px]">
          {/* Large left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-5 row-span-2 overflow-hidden rounded-sm"
          >
            <img src={mosaicPhotos[0].src} alt={mosaicPhotos[0].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>

          {/* Top middle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-4 row-span-1 overflow-hidden rounded-sm"
          >
            <img src={mosaicPhotos[1].src} alt={mosaicPhotos[1].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>

          {/* Top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-3 row-span-1 overflow-hidden rounded-sm"
          >
            <img src={mosaicPhotos[2].src} alt={mosaicPhotos[2].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>

          {/* Bottom middle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="col-span-3 row-span-1 overflow-hidden rounded-sm"
          >
            <img src={mosaicPhotos[3].src} alt={mosaicPhotos[3].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>

          {/* Bottom right tall */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-4 row-span-1 overflow-hidden rounded-sm"
          >
            <img src={mosaicPhotos[4].src} alt={mosaicPhotos[4].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* ── Brief intro ──────────────────────────────── */}
      <section className="px-8 pb-24 max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-display text-2xl font-light text-[var(--text)] leading-relaxed"
        >
          Software engineer obsessed with complex systems — from nature to distributed software.
          I build scalable, resilient systems grounded in mathematical principles.
        </motion.p>
      </section>
    </main>
  );
}
