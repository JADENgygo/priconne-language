import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="プリコネRのアストルム文字生成ツール" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@JADENgygo" />
        <meta property="og:url" content="https://priconne-transpiler.vercel.app" />
        <meta property="og:title" content="プリコネパイラー" />
        <meta property="og:description" content="プリコネRのアストルム文字生成ツール" />
        <meta property="og:image" content="https://priconne-transpiler.vercel.app/peko.png" />
        <link rel="icon" href="/peko.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
