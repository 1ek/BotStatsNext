import s from './TotalStats.module.scss'

import SpinnerText from '../Spinner/SpinnerText'


import { useGetAllStatsQuery } from '../../slices/apiSlice'

const TotalStats = () => {
    const {data: stats, isLoading, isSuccess} = useGetAllStatsQuery()

    
    

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <div className={s.stats__wrapper}>
        <div className={s.total__stats}>

            <div className={s.stats__container}>
                <div className={s.stat__container}>
                    <span className={s.label}>DEP</span>
                    <div className={s.logo__dep}>
                        <img className={s.img} src='/assets/deposit.svg' alt="" />
                        {isLoading ? <SpinnerText/> : null}
                        <span className={s.stats__span}>{isSuccess ? numberWithSpaces(stats.totalDep) : null} $</span>  
                    </div>
                </div>
            </div>


            <div className={s.stats__container}>
                <div className={s.stat__container}>
                    <span className={s.label}>$/HOUR</span>
                    <div className={s.logo__hourly}>
                        <img className={s.img} src='/assets/hourly.svg' alt="" />
                        {isLoading ? <SpinnerText/> : null}
                        <span className={s.stats__span}>{isSuccess ? numberWithSpaces(stats.hourlyDep) : null} $</span>   
                    </div>
                </div>
            </div>

            <div className={s.stats__container}>
                <div className={s.stat__container}>
                    <span className={s.label}>CASH</span>
                    <div className={s.logo__cash}>
                        <img className={s.img} src='/assets/cash.svg' alt="" />
                        {isLoading ? <SpinnerText/> : null}
                        <span className={s.stats__span}>{isSuccess ? numberWithSpaces(stats.totalCash) : null} $</span> 
                    </div>
                </div>
            </div>

            <div className={s.stats__container}>
                <div className={s.stat__container}>
                    <span className={s.label}>TOTAL</span>
                    <div className={s.logo__total}>
                        <img className={s.img} src='/assets/money.svg' alt="" />
                        {isLoading ? <SpinnerText/> : null}
                        <span className={s.stats__span}>{isSuccess ? numberWithSpaces(stats.totalLoot) : null} $</span>    
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TotalStats