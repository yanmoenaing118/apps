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
              <Link href="/swr-todos">
                <a>SWR Todo App</a>
              </Link>
            </li>
            <li>
              <Link href="/recoil-todos">
                <a>Recoil Todo App</a>
              </Link>
            </li>
            <li>
              <Link href="/learn-recoi">
                <a>Learning Recoil</a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a>About us</a>
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
