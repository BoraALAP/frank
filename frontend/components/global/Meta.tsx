import Head from "next/head";
import ReactGA from "react-ga4";

import { useEffect, useState } from "react";

interface HeadPros {
  title?: string;
}
const Meta = ({ title = "" }: HeadPros) => {
  const [metatitle, setMetatitle] = useState("");

  ReactGA.initialize("G-7ZSM0CLG3H");
  ReactGA.send("pageview");
  // ReactGA.send({
  //   hitType: "pageview",
  //   page: `${window.location.pathname} ${window.location.search}`,
  // });

  useEffect(() => {
    setMetatitle(title);
  }, []);

  return (
    <Head>
      <title>{metatitle} - Frank™ </title>
      <link rel="canonical" href="http://frankwd.com" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/fav/favicon.ico" />
      <meta name="theme-color" content="#0e3253" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/fav/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/fav/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/fav/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/fav/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/fav/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/fav/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/fav/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/fav/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/fav/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/fav/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav/favicon-16x16.png"
      />
      <link rel="manifest" href="/fav/manifest.json" />
      <meta name="msapplication-TileColor" content="#0e3253" />
      <meta name="msapplication-TileImage" content="/fav/ms-icon-144x144.png" />
      <meta name="theme-color" content="#0e3253" />
      <meta
        name="description"
        content="Frank™ windows are custom made-to-order and designed to make a statement in your home. Contact us today to order the perfect windows and doors for your home."
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Frank™ | We make Windows and Doors." />
      <meta
        property="og:description"
        content="Frank™ windows are custom made-to-order and designed to make a statement in your home. Contact us today to order the perfect windows and doors for your home."
      />
      <meta property="og:url" content="http://frankwd.com/" />
      <meta property="og:site_name" content="Frank™" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:description"
        content="Frank™ windows are custom made-to-order and designed to make a statement in your home. Contact us today to order the perfect windows and doors for your home."
      />
      <meta
        name="twitter:title"
        content="Frank™ | We make Windows and Doors."
      />
      <meta
        name="google-site-verification"
        content="C-AALCLWttkjaNEk2fJx2bn1hy4ksPtGZ4YWW22m3n4"
      />

      <script
        src="https://product-gallery.cloudinary.com/all.js"
        type="text/javascript"
      ></script>

      {/* Global site tag (gtag.js) - Google Ads */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-10867385608"
      ></script>
      <script
        data-partytown-config
        dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-10867385608');
  `,
        }}
      />
      {/* <script
        type="text/javascript"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&libraries=places,geometry`}
      ></script> */}
    </Head>
  );
};

export default Meta;
