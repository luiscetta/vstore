import '../../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import { makeServer } from '../server/mirage';


makeServer({ environment: "development" })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
