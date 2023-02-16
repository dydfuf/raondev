import { AppProps } from "next/app";
import "../styles/globals.css";

export default function index({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
