import '../styles/globals.scss'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'

import Layout from '../components/layout/Layout'


function MyApp({ Component, pageProps }) {
    return (
    <Provider store={store}>
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />    
            </Layout>
        </ThemeProvider>
    </Provider>
    )
}

export default MyApp
