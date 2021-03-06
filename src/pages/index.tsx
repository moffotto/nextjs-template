import type { NextPage } from 'next';
import Head from 'next/head';

import { ExampleComponent } from '@/atoms';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next.js Project Template</title>
        <meta content={'Generated by create next app'} name={'description'} />
        <link href={'/favicon.ico'} rel={'icon'} />
      </Head>
      <main>
        <h1>
          Welcome to <a href={'https://nextjs.org'}>Next.js!</a>
        </h1>
        <ExampleComponent>
          Get started by editing <code>pages/index.tsx</code>
        </ExampleComponent>
      </main>
    </div>
  );
};

export default Home;
