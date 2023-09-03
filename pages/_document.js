import { Html, Head, Main, NextScript } from "next/document";
import { Footer, Navbar } from "@/components";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
