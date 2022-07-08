import type { NextPage } from 'next';
import Head from 'next/head';

import { Button, Text, ThemeToggle } from '@components';
import { Main } from '@styles/pages';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS x Stitches</title>
        <meta name="description" content="NextJS theming using Stitches" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Text as="h1">NextJS x Stitches</Text>
        <Text css={{ color: 'green', margin: '24px 0' }}>Overriding color and applying margin</Text>
        <ThemeToggle />
        <Button>Normal</Button>
        <Button css={{ marginTop: '12px' }} size="large">
          Large
        </Button>
      </Main>
    </>
  );
};

export default Home;
