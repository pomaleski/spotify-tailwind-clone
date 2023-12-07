import type { Metadata } from 'next'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Listen to music.',
}

const circular = localFont({
  src: [
    {
      path: './fonts/Circular/CircularStd-Light.otf',
      weight: '300',
    },
    {
      path: './fonts/Circular/CircularStd-Book.otf',
      weight: '400',
    },
    {
      path: './fonts/Circular/CircularStd-Medium.otf',
      weight: '500',
    },
    {
      path: './fonts/Circular/CircularStd-Bold.otf',
      weight: '700',
    },
    {
      path: './fonts/Circular/CircularStd-Black.otf',
      weight: '900',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          circular.className,
          'bg-black text-zinc-50 overflow-hidden'
        )}
      >
        {children}
      </body>
    </html>
  )
}
