import { useEffect } from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import { site } from '../data/site';

export default function Home() {
  useEffect(() => {
    document.title = `${site.name} — Designer & Developer`;
  }, []);

  return (
    <>
      <Hero />
      <Portfolio />
      <Blog />
    </>
  );
}
