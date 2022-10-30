import { useGetAllStatsQuery } from "../../slices/apiSlice"
import BotCard from "../botCard/BotCard"
import { useSelector } from "react-redux"
import SpinnerContent from "../spinner/SpinnerContent"

import s from './BotList.module.scss'

const BotList = () => {

    function renderBots(arr) {
        const bots = arr.map((bot, i) => {
            return <BotCard bot={bot} key={i}/>
        })
        return bots
    }

    const {data: bots, isLoading, isSuccess} = useGetAllStatsQuery()

    const transformBot= (bot, i) => {
        return {
            name: bot.name,
            id: +bot.id,
            server: bot.server,
            connected: bot.connected,
            lvl: +bot.lvl,
            health: bot.health,
            cash: +bot.cash,
            dep: +bot.dep,
            fam: bot.fam,
            time: bot.time,
            model: bot.model,
            key: i+1
        }
    }

    let readyBots = []
    if (isSuccess) {
       readyBots = bots.data.map(transformBot)  
    }

    // **************************FILTERING STUFF********************************

    const searchInput = useSelector(state => state.filters.searchInput)
    const selectedServer = useSelector(state => state.filters.selectedServer)
    const selectedSort = useSelector(state => state.filters.selectedSort)

    const searchEmp = (bots, input) => {
        if (input.length === 0) { return bots }

        return bots.filter(bot => {
            return bot.name.toLowerCase().indexOf(input) > -1
        })
    }

    const filterServer = (bots, selectedServer) => {
        if (selectedServer.label == 'ALL SERVERS') {return bots} else {
            return bots.filter(bot => bot.server == selectedServer.label)
        }
    }

    const filterSort = (bots, selectedSort) => {
        if (selectedSort.value == 'hightolow') {
            return bots.sort((a,b) => (+b.dep) - (+a.dep))
        }
        if (selectedSort.value == 'lowtohigh') {
            return bots.sort((a,b) => (+a.dep) - (+b.dep))
        }
    }

    let visible = searchEmp(readyBots, searchInput)
        visible = filterServer(visible, selectedServer)
        visible = filterSort(visible, selectedSort)
    
    const renderList = renderBots(visible)

    return(
        <div>
            <ul className={s.bot__list}>
                {isLoading ? <SpinnerContent/> : renderList}
            </ul>
        </div>
    )
}

export default BotList