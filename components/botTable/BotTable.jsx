import { useState, useCallback } from 'react'

import SpinnerContent from '../spinner/SpinnerContent'

import { useGetAllStatsQuery } from '../../slices/apiSlice'



const BotTable = () => {

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

    let botList = []
    if (isSuccess) {
        botList = bots.data.map(transformBot)  
    }

    const [sortKey, setSortKey] = useState('key')
    const [sortOrder, setSortOrder] = useState('ascn')

    const headers = [
        {key: "key", label: "#", clazz: "table__n-th"},
        {key: "name", label: "Name", clazz: "table__name-th"},
        {key: "server", label: "Server", clazz: "table__server-th"},
        {key: "id", label: "ID", clazz: "table__id-th"},
        {key: "lvl", label: "LVL", clazz: "table__lvl-th"},
        {key: "fam", label: "FAM", clazz: "table__fam-th"},
        {key: "dep", label: "Deposit", clazz: "table__dep-th"},
        {key: "cash", label: "Cash", clazz: "table__cash-th"},
        {key: "time", label: "Last Update", clazz: "table__upd-th"}
    ]

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function sortData({tableData, sortKey, reverse}) {
        if (!sortKey) return tableData

        const sortedData = botList.sort((a, b) => {
            return a[sortKey] > b[sortKey] ? 1 : -1
        })

        if (reverse) return sortedData.reverse()
        
        return sortedData
    }
    //eslint-disable-next-line
    const sortedData = useCallback(() => sortData({tableData: botList, sortKey, reverse: sortOrder === 'desc'}),[botList, sortKey, sortOrder])

    function renderBots(arr) {
        const bots = arr.map((bot, i) => {
            return (
                <tr key={i}>
                    <td className='table__n-td'>{bot.key}</td>
                    <td className='table__name-td'>{bot.name} <div className={bot.connected ? 'dot__green' : 'dot__red'}></div></td>
                    <td className='table__server-td'>{bot.server}</td>
                    <td className='table__id-td'>{bot.id}</td>
                    <td className='table__lvl-td'>{bot.lvl}</td>
                    <td className='table__fam-td'>{bot.fam ? "✔️" : "✖️"}</td>
                    <td className='table__dep-td'>{numberWithSpaces(bot.dep)}</td>
                    <td className='table__cash-td'>{numberWithSpaces(bot.cash)}</td>
                    <td className='table__upd-td'>{bot.time}</td>
                </tr>
            )
        })
        return bots
    }

    const renderList = renderBots(sortedData())

    const spinner = isLoading ? <SpinnerContent/> : null
    const content = isSuccess ? renderList : null
    
   
    function changeSort(key) {
        setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn')
        setSortKey(key)    
      
    }

    return (
        <>
        <div className="wrapper">
            <div className="bot__table-container">
                <table className="bot__table">
                    <thead>
                        <tr>
                            {headers.map(row => {
                                return <th key={row.key} className={row.clazz}>{row.label} 
                                    <button onClick={() => changeSort(row.key)} className={sortKey === row.key && sortOrder === 'desc' 
                                        ? ' table__btn sort-reverse' 
                                        : ' table__btn'}>
                                        ▼
                                        </button> 
                                        </th>
                            })}
                            
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="spinner">
            {spinner}
        </div>
        </>
       
    )
}

export default BotTable
