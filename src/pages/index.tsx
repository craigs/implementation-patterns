import {NextPage} from 'next'
import Head from 'next/head'
import {Heading, Layout} from '~components'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Implementation patterns</title>
    </Head>

    <Layout>
      <div>
        <Heading>Implementation patterns</Heading>

        <p>
          This project is associated with the article{' '}
          <a href="https://craigs.io/articles/implementation-patterns-nextjs-react-typescript">
            Implementation patterns
          </a>{' '}
          originally published on <a href="https://craigs.io">craigs.io</a>.
        </p>

        <p>
          You can view this site at{' '}
          <a href="https://implementation-patterns.vercel.app/">
            implementation-patterns.vercel.app
          </a>
        </p>
      </div>
    </Layout>
  </>
)

export default Home
