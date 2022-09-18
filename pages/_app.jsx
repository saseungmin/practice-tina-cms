/* eslint-disable react/jsx-props-no-spreading */
import TinaProvider from '../.tina/components/TinaDynamicProvider';

function App({ Component, pageProps }) {
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  );
}

export default App;
