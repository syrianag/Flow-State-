import './globals.css'
import './layout.css'
import Link from 'next/link'

export const metadata = {
  title: 'Flowstate',
  description: 'Burnout-aware planning'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <body className="min-h-screen bg-charcoal text-soft-white">
        <header className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-sage/20">
          <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-sage">Flow State</Link>
            <nav>
              <ul className="flex gap-6">
                <li><Link href="/about" className="text-gray hover:text-sage transition-colors font-medium">About</Link></li>
                <li><Link href="/why" className="text-gray hover:text-sage transition-colors font-medium">Why Flow State</Link></li>
                <li><Link href="/features" className="text-gray hover:text-sage transition-colors font-medium">Features</Link></li>
                <li><Link href="/product" className="text-gray hover:text-sage transition-colors font-medium">Product</Link></li>
                <li><Link href="/rubric" className="text-gray hover:text-sage transition-colors font-medium">Rubric</Link></li>
                <li><Link href="/reflection" className="text-gray hover:text-sage transition-colors font-medium">Reflection</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-6">{children}</main>

        <footer className="border-t border-gray/10 py-6 mt-12">
          <div className="max-w-4xl mx-auto text-sm text-gray">
            Built with Next.js · Flowstate
          </div>
        </footer>
      </body>
    </html>
  )
}
