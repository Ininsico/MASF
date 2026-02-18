import { Metadata } from 'next';
import HomeView from '@/components/views/HomeView';

export const metadata: Metadata = {
  title: "MASF - Medical & Social Family | Serving Humanity",
  description: "MASF is a non-profit dedicated to healthcare, education, and social welfare in Pakistan. Join our mission to serve humanity.",
  openGraph: {
    title: "MASF - Medical & Social Family",
    description: "Join MASF in our mission to provide healthcare, education, and social support to those in need across Pakistan.",
    images: ["/bgmasf.png"],
  },
};

export default function Home() {
  return <HomeView />;
}
