import Head from 'next/head';
import {Button} from '../components/common/ui/';

export default function Home() {
  return (
    <>
      <Head>
        <title>Streaming Lab</title>
      </Head>

      <div className='containter mx-auto px-6'>
        <Button></Button>
      </div>
    </>
  );
}
