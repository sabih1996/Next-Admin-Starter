import "@/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import { Header } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SSRProvider>
        <Header />
        <ToastContainer />
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}
