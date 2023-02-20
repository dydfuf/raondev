import Layout from "@/components/Layout";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/github-markdown.css";

export default function index({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
