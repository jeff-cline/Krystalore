import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery | Krystalore Crews - Speaking, Coaching, Retreats & More',
  description: 'Browse the complete photo gallery of Krystalore Crews showcasing her work as an executive coach, keynote speaker, fitness instructor, author, and retreat leader. From corporate boardrooms to luxury retreats, see the journey behind the transformation.',
  keywords: ['Krystalore Crews photos', 'executive coaching gallery', 'keynote speaker images', 'wellness retreats photos', 'leadership training pictures', 'fitness coaching gallery'],
  openGraph: {
    title: 'Photo Gallery | Krystalore Crews - Speaking, Coaching, Retreats & More',
    description: 'Browse the complete photo gallery of Krystalore Crews showcasing her work as an executive coach, keynote speaker, fitness instructor, author, and retreat leader.',
    images: ['/images/scraped/krystalore-profile-opt.jpg'],
  },
};

export default function ImagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}