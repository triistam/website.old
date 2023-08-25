import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import "../components/app.css";
import "../components/markdown.css";
import "../components/ngprogress.css";

NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  window.scrollTo(0, 0);
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

export default class GenoWebsiteApp extends App {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props;
    return (
      <div className="h-screen">
        <Head>
          <meta
            property="og:image"
            content="https://old.genemator.uz/preview.png"
          />
          <meta property="og:site_name" content="Genemator's" />
          <title>Genemator's Portfolio Website</title>
        </Head>

        <div className="notification-area">
          <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-black">
                <span className="block sm:ml-2 sm:inline-block font-bold">
                  <Link
                    href="https://uwussi.moe"
                    className="text-black underline select-none"
                  >
                    Hey, now I'm UwUssimo Robinson &rarr;
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>

        <Component {...pageProps} />
      </div>
    );
  }
}
