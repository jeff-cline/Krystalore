import { Gem } from 'lucide-react'

// Falling teal crystals (rain) — used behind login / access-gate screens.
// Parent must be `relative overflow-hidden`; place gate content above with `relative z-10`.
export default function CrystalRain() {
  const crystals = Array.from({ length: 50 }, (_, i) => ({
    i,
    left: (i * 41) % 100,
    size: 8 + ((i * 17) % 40),
    dur: 4 + ((i * 13) % 9),
    delay: ((i * 7) % 60) / 10,
    op: 0.45 + ((i * 23) % 5) / 10,
  }))
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {crystals.map((c) => (
        <Gem key={c.i} className="absolute krys-fall text-[#5eead4]" style={{ left: `${c.left}%`, width: c.size, height: c.size, top: '-50px', opacity: c.op, animationDuration: `${c.dur}s`, animationDelay: `${c.delay}s`, filter: 'drop-shadow(0 0 7px rgba(94,234,212,0.9))' }} />
      ))}
      <style>{`@keyframes krys-fall{0%{transform:translateY(-50px) rotate(0deg)}100%{transform:translateY(110vh) rotate(320deg)}}.krys-fall{animation-name:krys-fall;animation-timing-function:linear;animation-iteration-count:infinite}`}</style>
    </div>
  )
}
