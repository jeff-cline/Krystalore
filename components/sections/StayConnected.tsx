import { ArrowRight } from 'lucide-react'

// Mirrors the "Stay Connected" social section on the home page — exact icons & links.
const socials = [
  { platform: 'Instagram', handle: '@thecrewscoach', url: 'https://www.instagram.com/thecrewscoach/', desc: 'Daily motivation, BTS, and community moments',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { platform: 'Facebook', handle: 'Krystalore Crews', url: 'https://www.facebook.com/krystalore/', desc: 'LIVE sessions, events, and community groups',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0D9488"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { platform: 'TikTok', handle: '@thecrewscoach', url: 'https://www.tiktok.com/@thecrewscoach', desc: 'Quick tips, motivation, and real talk',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0D9488"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.19 8.19 0 0 0 4.76 1.52V6.79a4.84 4.84 0 0 1-1-.1z"/></svg> },
  { platform: 'YouTube', handle: 'Krystalore', url: 'https://www.youtube.com/user/krystalore', desc: 'Full workouts, interviews, and keynotes',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0D9488"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { platform: 'LinkedIn', handle: 'Krystalore Crews', url: 'https://www.linkedin.com/in/krystalore-crews/', desc: 'Corporate insights and leadership content',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0D9488"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { platform: 'Pinterest', handle: 'krystalorecrews', url: 'https://www.pinterest.com/krystalorecrews/', desc: 'Inspiration boards, wellness tips, and retreat vibes',
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0D9488"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg> },
]

export default function StayConnected() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#F97316] font-semibold uppercase tracking-wider text-sm mb-2">Follow Along</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Stay <span className="text-[#F97316]">Connected</span></h2>
          <p className="text-gray-600">Follow Krystalore across platforms for daily motivation, behind-the-scenes, and community updates.</p>
        </div>
        <div className="space-y-4">
          {socials.map(({ platform, handle, url, desc, icon }, i) => (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#F4F1EC] rounded-xl p-4 hover:shadow-lg transition-all group hover:bg-white border border-transparent hover:border-[#0D9488]/20">
              <div className="w-14 h-14 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 relative group-hover:bg-[#0D9488]/15 transition-colors">
                {icon}
                {/* Crystal accent */}
                <svg className="absolute -top-1 -right-1 w-5 h-5 drop-shadow-sm" viewBox="0 0 24 24"><polygon points="12,1 21,9 12,23 3,9" fill="#14B8A6" opacity="0.9"/><polygon points="12,1 16.5,9 12,17 7.5,9" fill="#0D9488" opacity="0.7"/><line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth="0.5" opacity="0.6"/></svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-sm group-hover:text-[#0D9488] transition-colors">{platform}</p>
                <p className="text-gray-500 text-xs">{handle} — {desc}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#0D9488] transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
