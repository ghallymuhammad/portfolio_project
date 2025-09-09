import { ThemeProvider } from '@/hooks/use-theme';
import '@/styles/app.scss';
import type { AppProps } from 'next/app';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
