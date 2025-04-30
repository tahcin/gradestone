// Enable static page generation with ISR
export const revalidate = 2592000; // 30 days in seconds

// Configure cache headers
export async function generateMetadata() {
  return {
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, s-maxage=2592000, stale-while-revalidate=86400'
      }
    ]
  };
}

// Import the client component
import FAQClient from '@/components/FAQClient';

export default function FAQPage() {
  return <FAQClient />;
}