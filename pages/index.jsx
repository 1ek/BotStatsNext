import s from '../styles/Home.module.scss'
import BotList from '../components/botList/BotList'
import BotFilter from '../components/botFilter/BotFilter'
import { useGetAllStatsQuery } from '../slices/apiSlice';
import SpinnerText from '../components/spinner/SpinnerText';
import Head from 'next/head';



export default function Home() {
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const {data: money, isLoading, isSuccess} = useGetAllStatsQuery()

    return (
        <>
        <Head>
            <title>Bots [by 1ekk]</title>
            <meta name="description" content="1ekk x idolbg bots list" />
            <link rel="icon" type="image/svg+xml" href="/vercel.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@500&family=Teko:wght@500&display=swap" rel="stylesheet"/>
            
        </Head>
        <div className={s.container}>
            <main>
                <div className={s.middle__section}>
                    <div className={s.total__money}>
                        <img className={s.total__img} src='/assets/money.svg' alt="" />
                        <h1 className='total__digits'>{isLoading ? <SpinnerText/> : numberWithSpaces(money.totalDep)} $</h1>
                    </div>
                    <BotFilter/>
                </div>
                <BotList/>
            </main>
        </div>
        </>
    )
}
