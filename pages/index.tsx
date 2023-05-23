import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Login from './Login';
import Welcome from '@/Components/welcome';
import About from '@/Components/about';
import Container from './Main';
import Menu from '@/Components/menu';






const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resturant App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
       
        <Login />
        
        
        
        
    </div>
  )
}
