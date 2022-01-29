import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
import useNavs from "../lib/useNavs";
import Navs from "./navs";
import PageProgressbar from "./PageProgressbar";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Layout({ children }) {
  // const { data: navs, loading } = useNavs();

  // useEffect(() => {
  //   console.log(navs);
  // }, [navs]);

  return (
    <>
      <Head>
        <title>Image Gallery</title>
      </Head>
      <PageProgressbar />

      {/* <Navs list={navs} loading={loading} /> */}

      <main className="max-w-xl mx-auto my-4">{children}</main>
      <footer className="p-3 max-w-xl mx-auto shadow mt-6">
        <nav>
          <ul className="flex">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/ssg">
                <a>SSG (Static Generation)</a>
              </Link>
            </li>
            <li>
              <Link href="/ssg_with_external_data">
                <a>SSG with Data</a>
              </Link>
            </li>

            <li>
              <Link href="/products">
                <a>Products</a>
              </Link>
            </li>
          </ul>
        </nav>

        <style jsx>{`
          li {
            margin-right: 1rem;
            color: green;
            border: 1px solid #eee;
            padding: 0.3em;
            font-size: 0.9rem;
          }
        `}</style>
      </footer>
    </>
  );
}
