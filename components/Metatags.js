import Head from 'next/head';

export default function Metatags({
  title = 'Nextfire',
  description = 'A test website in Next.js',
  image = 'https://miro.medium.com/max/1000/1*KDMx1YspSrBcFJG-NDZgDg.png',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}