// src/pages/_app.tsx
import "../app/globals.css"; // reuse the app router global stylesheet
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

