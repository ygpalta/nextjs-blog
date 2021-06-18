import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

export default function AboutUs() {
    return (
        <>
        <Layout>
        <Head>
            <title>About Us</title>
        </Head>
          <h1>About Us</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
          <Image
                src="/profile.jpg" // Route of the image file
                height={560} // Desired size with correct aspect ratio
                width={560} // Desired size with correct aspect ratio
                alt="Your Name"
            />
            </Layout>
        </>
      )
  }