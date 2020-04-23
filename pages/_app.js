import "../styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import App from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Movie Search App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
