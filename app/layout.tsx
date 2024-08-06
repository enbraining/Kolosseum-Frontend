import type { Metadata } from 'next';
import LocalFont from 'next/font/local';
import { headers } from 'next/headers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Footer from './components/Footer';
import './globals.css';

const inter = LocalFont({
  src: '../public/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: '역사 기록 프로젝트',
  description: '처음과 끝을 기록할 콜로세움',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const language = headers().get("Accept-Language")?.split(/,/).at(0)

  return (
    <html lang={language}>
        <body className={inter.className + " mx-10 "}>
            {children}
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </body>
    </html>
  );
}
