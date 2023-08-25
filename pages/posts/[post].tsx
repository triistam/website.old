/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Head from "next/head";
import React from "react";

import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { join } from "path";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Markdown from "../../components/Markdown";

interface Props {
  markdown: string;
  meta: {
    id: string;
    title: string;
    author: string;
    publish_date: string;
    images: Array<{
      image: string;
      width: number;
      height: number;
      className: string;
      preview: boolean;
    }>;
    snippet: string;
  };
}

const NewsPostPage = (props: Props): React.ReactElement => {
  const date = new Date(props.meta.publish_date);
  const format = new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <>
      <Head>
        <title>{props.meta.title} | Genemator's</title>
        <meta property="og:title" content={props.meta.title} />
        <meta property="og:description" content={props.meta.snippet} />
        <meta property="telegram" />
      </Head>
      <Header subtitle={props.meta.title} />
      <div className="w-full" style={{ backgroundColor: "#2f2e2c" }}>
        <div className="max-w-screen-lg mx-auto">
          {props.meta.images.map((image, i) => (
            <Image
              key={i}
              src={image.image}
              alt=""
              className={`w-full h-auto ${image.className}`}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-8 mb-16">
        <Link href="/posts" className="link">
          &lt;- Back to overview
        </Link>

        <h1 className="telegram-title tracking-tight font-bold text-5xl leading-10 mt-4 py-8">
          {props.meta.title}
        </h1>
        <p className="telegram-date text-gray-200 mt-3 leading-tight">
          {format.format(date)}
        </p>
        <p className="telegram-author text-gray-200 mt-3 leading-tight">
          {props.meta.author}
        </p>
        <div className="telegram-post mt-8">
          <Markdown
            source={props.markdown}
            displayURL={`https://genemators.me/posts/${props.meta.id}`}
            sourceURL={`https://genemators.me/posts/${props.meta.id}.md`}
            baseURL={props.markdown}
          />
        </div>
        <Link href="tg://resolve?domain=genemators">
          <div className="mt-4 text-center border rounded hover:text-black hover:bg-white">
            Channel
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = await fs.readdir("./public/posts");
  const postIds = dir.filter((name) => name.endsWith(".json"));
  const paths = postIds.map((id) => ({
    params: { post: id.replace(/\.json$/, "") },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const post = ctx.params!.post;
  const markdown = await fs.readFile(join("./public/posts", post + ".md"), {
    encoding: "utf8",
  });
  const meta = await fs.readFile(join("./public/posts", post + ".json"), {
    encoding: "utf8",
  });
  return {
    props: {
      markdown,
      meta: { ...JSON.parse(meta), id: post },
    },
  };
};

export default NewsPostPage;
