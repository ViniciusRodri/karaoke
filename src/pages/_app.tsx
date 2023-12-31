import { Global, css } from '@emotion/react';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { CSSReset } from '@chakra-ui/react';
import Head from 'next/head';
import AppProvider from '../hooks';

import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }: AppProps) {
  const title = '';
  const description = '';
  const logo = '/images/logo.png';

  return (
    <AppProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#000" />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="google" content="notranslate" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="description" content={description} />
        <meta name="author" content="Chamer Soluções em Tecnologia" />
        <meta name="robots" content="index, follow" />

        <link
          href="https://fonts.googleapis.com/css2?family=New+Year&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href={logo} type="image/png" />
      </Head>

      <CSSReset />

      <Global
        styles={css`
          body {
            font-family: 'New Year', sans-serif;
          }
        `}
      />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default App;
