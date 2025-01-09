import Head from "next/head";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/logos/favicon.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/lineicons.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/tiny-slider.css" />
        <link rel="stylesheet" href="/assets/css/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/css/space.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/ud-styles.css" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
