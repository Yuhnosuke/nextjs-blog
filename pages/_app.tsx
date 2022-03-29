import '../styles/global.css'
import { AppProps } from 'next/app'

function App({ Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default App
