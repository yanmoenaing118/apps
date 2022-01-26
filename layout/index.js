import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";
import useNavs from "../lib/useNavs";
import Navs from "./navs";
import PageProgressbar from "./PageProgressbar";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Layout({ children }) {
  const { data: navs, loading } = useNavs();

  useEffect(() => {
    console.log(navs);
  }, [navs]);

  return (
    <>
      <Head>
        <title>Image Gallery</title>
      </Head>
      <PageProgressbar />
      <header></header>
      <Navs list={navs} loading={loading} />
      {children}
    </>
  );
}
