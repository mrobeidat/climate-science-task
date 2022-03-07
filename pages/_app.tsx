import "../styles/globals.css";
import "../styles/scss/styles.scss";

import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";


export default function MyApp({ Component, pageProps }: AppProps) {

  const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100vh;
`;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
    
      {loading ? (
        <HashLoader
        css={override}
        color={"#3650D7"}
        loading={loading}
        size={150} />
      ) : (
        
        <div>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      )}
      
    </>
  );
}
