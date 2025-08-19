'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import css from './Home.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page not found | NoteHub',
  description: 'The page you are looking for does not exist.',
  openGraph: {
    title: '404 — Page not found | NoteHub',
    description: 'The page you are looking for does not exist.',
    url: 'http://localhost:3001/not-found',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
