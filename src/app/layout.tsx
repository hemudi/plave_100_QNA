import '@styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '플레이브 100문 100답 | PLAVE 100 QNA',
  description: '플레이브 멤버들이 도전했던 100문에 플리들만의 100답을 채워보세요!',
  keywords: ['플레이브', 'Plave', '플레이브 100문 100답', '플레이브 100 QNA', 'Plave 100 QNA'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
