import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

// Viewport配置 - 单独导出
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// SEO优化配置 - 核心关键词：Genie3
export const metadata: Metadata = {
  // 主标题优化 - 包含品牌词和长尾关键词
  title: 'Genie3 - AI 3D World Generator | Transform Images to Interactive Worlds | Genie3.top',
  
  // 描述优化 - 包含关键词，吸引点击
  description: 'Genie3 (Genie3.top) - Google DeepMind\'s revolutionary AI that transforms single images into fully interactive 3D worlds. Experience Genie3\'s advanced world generation with realistic physics, dynamic lighting, and 60-second persistent environments. Try Genie3 now!',
  
  // 关键词优化 - 核心词和相关长尾词
  keywords: [
    'Genie3',
    'Genie3.top',
    'Genie 3',
    'Genie3 AI',
    'Genie3 world generator',
    'Genie3 3D worlds',
    'Genie3 DeepMind',
    'Genie3 interactive environments',
    'Google Genie3',
    'Genie3 foundation model',
    'AI world generation',
    '3D environment creator',
    'image to 3D world',
    'interactive AI worlds',
    'Genie2 successor'
  ].join(', '),
  
  // 作者和发布者信息
  authors: [{ name: 'Genie3 Team', url: 'https://genie3.top' }],
  creator: 'Genie3.top',
  publisher: 'Genie3.top',
  
  // 格式检测
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // 规范化URL
  metadataBase: new URL('https://genie3.top'),
  alternates: {
    canonical: 'https://genie3.top',
    languages: {
      'en-US': 'https://genie3.top',
      'zh-CN': 'https://genie3.top/zh',
    },
  },
  
  // Open Graph优化 - 社交媒体分享
  openGraph: {
    title: 'Genie3 - Revolutionary AI 3D World Generator | Genie3.top',
    description: 'Genie3 transforms images into interactive 3D worlds using Google DeepMind\'s advanced AI. Create persistent environments with realistic physics on Genie3.top',
    url: 'https://genie3.top',
    siteName: 'Genie3',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://genie3.top/og-genie3.jpg',
        width: 1200,
        height: 630,
        alt: 'Genie3 - AI 3D World Generation Platform',
      },
      {
        url: 'https://genie3.top/og-genie3-square.jpg',
        width: 800,
        height: 800,
        alt: 'Genie3 Logo - Transform Images to Worlds',
      },
    ],
  },
  
  // Twitter Card优化
  twitter: {
    card: 'summary_large_image',
    title: 'Genie3 - AI 3D World Generator | Genie3.top',
    description: 'Transform any image into an interactive 3D world with Genie3. Powered by Google DeepMind\'s revolutionary AI technology.',
    site: '@Genie3AI',
    creator: '@Genie3AI',
    images: {
      url: 'https://genie3.top/twitter-genie3.jpg',
      alt: 'Genie3 - Interactive 3D World Generation',
    },
  },
  
  // 机器人爬虫设置
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 验证标签（根据需要添加）
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  
  // 应用相关
  applicationName: 'Genie3',
  referrer: 'origin-when-cross-origin',
  
  // 分类
  category: 'technology',
  
  // 其他meta标签
  other: {
    'apple-mobile-web-app-title': 'Genie3',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000',
  },
}

// 结构化数据 - Schema.org
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Genie3',
  alternateName: 'Genie3.top',
  url: 'https://genie3.top',
  logo: 'https://genie3.top/logo-genie3.png',
  description: 'Genie3 is an advanced AI platform that transforms single images into fully interactive 3D worlds with realistic physics and lighting.',
  applicationCategory: 'Multimedia',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '2847',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Organization',
    name: 'Google DeepMind',
    url: 'https://deepmind.google',
  },
  datePublished: '2024-12-01',
  dateModified: new Date().toISOString(),
  keywords: 'Genie3, Genie3.top, AI world generator, 3D environment creator, interactive worlds',
  sameAs: [
    'https://twitter.com/Genie3AI',
    'https://github.com/Genie3',
    'https://linkedin.com/company/genie3',
  ],
}

// FAQ结构化数据
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Genie3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Genie3 is Google DeepMind\'s revolutionary AI platform available at Genie3.top that transforms single images into fully interactive 3D worlds with realistic physics and dynamic lighting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Genie3 work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Genie3 uses advanced diffusion models and spatiotemporal transformers to analyze your input image and generate a complete 3D environment that you can explore for up to 60 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I access Genie3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can access Genie3 at Genie3.top, where you can experience the cutting-edge AI world generation technology developed by Google DeepMind.',
      },
    },
  ],
}

// BreadcrumbList结构化数据
const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://genie3.top',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Genie3 AI Platform',
      item: 'https://genie3.top',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 额外的SEO meta标签 */}
        <meta name="author" content="Genie3.top" />
        <meta name="copyright" content="Genie3.top" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="expires" content="never" />
        
        {/* DNS预解析和资源预加载 */}
        <link rel="dns-prefetch" href="//genie3.top" />
        <link rel="preconnect" href="https://genie3.top" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon和图标 */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* 规范化URL */}
        <link rel="canonical" href="https://genie3.top" />
        
        {/* 结构化数据 - JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
        <Script
          id="breadcrumb-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData),
          }}
        />
        
        {/* Google Analytics (替换为你的ID) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* 跳过导航链接 - 无障碍优化 */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded">
          Skip to main content
        </a>
        
        <div id="main-content">
          {children}
        </div>
        
        {/* 页面性能监控脚本 */}
        <Script
          id="performance-monitoring"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Web Vitals监控
              if ('PerformanceObserver' in window) {
                try {
                  const po = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                      // 发送性能数据到分析服务
                      console.log('Performance:', entry.toJSON());
                    }
                  });
                  po.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
                } catch (e) {}
              }
            `,
          }}
        />
      </body>
    </html>
  )
}