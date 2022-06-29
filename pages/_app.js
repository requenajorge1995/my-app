import "../styles/globals.css";
import useBrowserNavigation from "../useBrowserNavigation";

function MyApp({ Component, pageProps }) {
  useBrowserNavigation({
    onGoingForward: () => console.log("going forward"),
    onGoingBackward: () => console.log("going backward"),
  });

  return <Component {...pageProps} />;
}

export default MyApp;
