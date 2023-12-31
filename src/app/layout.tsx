import { NextAuthProvider } from '@/providers/auth';
import './globals.css'
import { Poppins } from 'next/font/google'

const popins = Poppins({ subsets: ['latin'], weight:[  "400",  "500",  "600",  "700",  "800", "900"]})

export const metadata = {
  title: 'FSW Trips',
  description: 'Sistema de Reservas de Viagens TOP!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
