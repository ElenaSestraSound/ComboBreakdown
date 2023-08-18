import './globals.css';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Header from "./header/header";

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Combo Breakdown',
  description: 'The Street Fighter 6 Companion App',
};

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className} data-testid="cbd">
        <div className="h-full grid grid-rows-[auto_1fr] absolute">
          <Header />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
