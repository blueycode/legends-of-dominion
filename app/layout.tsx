import './globals.css'
import { PT_Serif } from 'next/font/google'

const ptSerif = PT_Serif({
  weight: "400",
  subsets: ['latin']
});

export const metadata = {
  title: "Legends of Dominion - Online MMORPG"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ptSerif.className}>{children}</body>
    </html>
  )
}
