import Head from "next/head";
import PageProgressbar from "./PageProgressbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Image Gallery</title>
      </Head>
      <PageProgressbar />
      {children}
    </>
  );
}
