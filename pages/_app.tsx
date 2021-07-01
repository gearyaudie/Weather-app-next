import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeadComponent from "../components/HeadComponent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadComponent />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
