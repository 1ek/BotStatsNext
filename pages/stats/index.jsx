import Head from 'next/head'
import TotalStats from '../../components/totalStats/TotalStats'
import BotTable from '../../components/botTable/BotTable'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stats [by 1ekk]</title>
        <meta name="description" content="1ekk x idolbg bot stats table" />
        <link rel="icon" href="/vercel.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@500&family=Teko:wght@500&display=swap" rel="stylesheet"/>
      </Head>

      <main>
       <TotalStats/>
        <BotTable/>
      </main>

     
      </>
  )
}


