/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Custom404(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Oops, 404! | Genemator's</title>
        <meta property="og:title" content="404 Whoopie!" />
        <meta
          property="og:description"
          content="This page's preview is not available as this page doesn't exist"
        />
      </Head>
      <Header subtitle="404" />
      <div className="h-auto">
        <div className="flex mb-4 justify-center mt-64">
          <div className="text-white text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-white hover:text-black">
            404
          </div>
        </div>
        <div className="flex mb-4 justify-center">
          <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl">
            I'm so sorry, this page might be unavailable or underconstruction!
            Stay stunned for new updates...
          </div>
        </div>
        <div className="flex justify-center mb-64">
          <Link
            onClick={() => Router.back()}
            href=""
            className="text-white text-center xl:text-3xl lg:text-2xl text-1xl hover:underline cursor-pointer"
          >
            {"<-"} Go back to hell 🖤
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
