import s from './BotCard.module.scss'
import models from '../../data/models';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { selectBotChat } from '../../slices/botChatSlice'


const BotCard = ({bot, clickHandler}) => {
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    function getModel(id) {
        const botModel = models.filter(model => {
           return  model.id == id ? model.src : null
        })
        if (botModel.length === 0) return models.filter(model => model.id == 370)[0].src
        return botModel[0].src
    }
    
    const dispatch = useDispatch()



    const selectBot = (bot) => {
        clickHandler()
        dispatch(selectBotChat(bot))
    }

    return (
        <li className={s.bot__card} onClick={() => selectBot(bot)}>
            <div className={bot.connected ? s.bot__dot_green : s.bot__dot_red}></div>
            <Image className={s.bot__model} src={getModel(bot.model)} alt="Bot skin model" width={190} height={70}/>
            <div className={s.bot__info}>
                <p className={s.bot__name}>{bot.name}<span>({bot.id})</span></p>
                <p className={s.bot__server}>{bot.server}</p>
                <div className={s.bot__stats}>
                    <p><span className={s.bot__stat}>DPZT:</span><span>{numberWithSpaces(bot.dep)} $</span><span className={s.hide}>q</span></p>
                    <p><span className={s.bot__stat}>CASH:</span><span>{numberWithSpaces(bot.cash)} $</span><span className={s.hide}>q</span></p>
                    <p><span className={s.bot__stat}>LVL:</span><span>{bot.lvl}</span><span className={s.hide}>q</span></p>
                    <p><span className={s.bot__stat}>FAM:</span><span>{bot.fam ? "✔️" : "✖️"}</span><span className={s.hide}>q</span></p>
                </div>
                <p className={s.bot__updated}>UPDATED {bot.time}</p>
            </div>
        </li>
    )
}

export default BotCard