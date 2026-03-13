import MainHeader from '@/components/Header';
import '../globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <Script id="remove-ext-attrs" strategy="beforeInteractive">
          {`(function(){try{var attrs=['data-new-gr-c-s-check-loaded','data-gr-ext-installed'];attrs.forEach(function(a){if(document.documentElement&&document.documentElement.hasAttribute(a)){document.documentElement.removeAttribute(a)}if(document.body&&document.body.hasAttribute(a)){document.body.removeAttribute(a)}})}catch(e){} })();`}
        </Script>
      </head>
      <body>
        <div id='page'>
          <MainHeader/>
          {children}
        </div>
      </body>
    </html>
  )
}
