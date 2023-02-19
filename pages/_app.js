import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router';

export const progress = new ProgressBar({
  // The size (height) of the progress bar.
  // Numeric values get converted to px.
  size: 4,

  // Color of the progress bar.
  // Also used for the glow around the bar.
  color: "#FD5861",

  // Class name used for the progress bar element.
  className: "z-50",

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp
