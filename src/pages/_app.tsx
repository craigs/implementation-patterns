import {NextPage} from 'next'
import type {AppProps} from 'next/app'

import '../styles/globals.css'

const MyApp: NextPage<AppProps> = ({Component, pageProps}) => (
  <Component {...pageProps} />
)

export default MyApp
