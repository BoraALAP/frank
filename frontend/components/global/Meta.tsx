import { Helmet } from "react-helmet";

const Meta = ({ title = "We make Windows and Doors" }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Frank - {title} </title>
      <link rel="canonical" href="http://frankwd.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="theme-color" content="#000000" />

      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="Frank windows are custom made-to-order and designed to make a statement in your home. Contact us today to order the perfect windows and doors for your home."
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Frank | We make Windows and Doors." />
      <meta
        property="og:description"
        content="Frank windows are custom made-to-order and designed to make a statement in your home. Contact us today to order the perfect windows and doors for your home."
      />
      <meta property="og:url" content="http://frankwd.com/" />
      <meta property="og:site_name" content="Frank" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:description"
        content="Frank windows are custom made-to-order and designed to make a statement in your home. Contact us today to order the perfect windows and doors for your home."
      />
      <meta name="twitter:title" content="Frank | We make Windows and Doors." />

      <meta
        name="google-site-verification"
        content="C-AALCLWttkjaNEk2fJx2bn1hy4ksPtGZ4YWW22m3n4"
      />
    </Helmet>
  );
};

export default Meta;
