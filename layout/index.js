import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Navs from "./navs";
import PageProgressbar from "./PageProgressbar";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Image Gallery</title>
      </Head>
      <PageProgressbar />
      {/* <Navs list={categories} /> */}
      {children}
    </>
  );
}
