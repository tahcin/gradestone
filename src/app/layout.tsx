import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'AceLMS - Modern Learning Management System',
  description: 'A sleek and modern LMS portal for online education',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AceLMS'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
  viewportFit: 'cover',
  themeColor: '#4F46E5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pb-safe`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}