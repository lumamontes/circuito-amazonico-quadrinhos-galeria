import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Registros do Circuito Amazônico de Quadrinhos em Macapá."
          />
          <meta property="og:site_name" content="circuito-amazonico-quadrinhos-amapa-galeria.vercel.app" />
          <meta
            property="og:description"
            content="Registros do Circuito Amazônico de Quadrinhos em Macapá."
          />
          <meta property="og:title" content="Next.js Conf 2022 Pictures" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Next.js Conf 2022 Pictures" />
          <meta
            name="twitter:description"
            content="Registros do Circuito Amazônico de Quadrinhos em Macapá."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
