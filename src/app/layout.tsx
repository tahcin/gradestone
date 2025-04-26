import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Gradestone - Your grades set in stone',
  description: 'Transform your academic performance with Gradestones intelligent learning platform. Access personalized study tools, interactive courses, and expert guidance to achieve better grades.',
  keywords: 'grade improvement, smart learning, academic performance, study tools, personalized learning, online tutoring, educational platform, student success, interactive learning, exam preparation',
  authors: [{ name: 'Tahcin Sarwar' }],
  creator: 'Gradestone Team',
  publisher: 'Gradestone',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gradestone.in',
    siteName: 'Gradestone',
    title: 'Gradestone - Your grades set in stone',
    description: 'Transform your academic performance with Gradestones intelligent learning platform. Access personalized content and boost your grades.',
    images: [{
      url: '/images/Logo/banner.png',
      width: 1200,
      height: 630,
      alt: 'Gradestone Logo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gradestone - Your grades set in stone',
    description: 'Transform your academic performance with Gradestones intelligent learning platform.',
    images: ['/images/Logo/banner.png']
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Gradestone'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: 'yes',
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
        <link rel="icon" href="/images/Logo/favicon.ico" type="image/x-icon" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T76TLEB8KH"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T76TLEB8KH');
          `}
        </script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "Gradestone",
                  "description": "Transform your academic performance with Gradestone's intelligent learning platform.",
                  "url": "https://gradestone.in",
                  "logo": "https://gradestone.in/images/Logo/favicon.ico",
                  "sameAs": [
                    "https://www.linkedin.com/company/gradestone-in/"
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://gradestone.in/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Courses",
                      "item": "https://gradestone.in/courses"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "GraDex",
                      "item": "https://gradestone.in/gradex"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "About",
                      "item": "https://gradestone.in/about"
                    }
                  ]
                }
              ]
            })
          }}
        />
        
        

      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pb-safe`} itemScope itemType="https://schema.org/WebPage">
        
        <ThemeProvider>
          <header>
            <Navbar />
          </header>
          <main className="flex-grow w-full" itemProp="mainContentOfPage">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}