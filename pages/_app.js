import '../src/assets/styles/main.scss'
import { Provider } from 'react-redux'
import store from 'store'
import { useStore } from "react-redux"
import SEO from '@components/global/seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      {/* <PersistGate persistor={store.__persistor} loading={<></>}>
      <Component {...pageProps} />
      </PersistGate> */}
    </>
  )
}

export default MyApp
