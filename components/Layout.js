import Head from 'next/head';
import Link from 'next/link';

function Layout({ children }) {
  return (
    <div
      style={{
        margin: '3rem',
      }}
    >
      <Head>
        <title>Tina App</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' | '}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
