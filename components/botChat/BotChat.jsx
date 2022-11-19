import {  useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'


import styles from './Chat.module.scss'

const BotChat = ({opened}) => {
    const selectedBot = useSelector(state => state.botChat.selectedBotChat)

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    

    const sendMessage = async () => {
        const message = {
            event: 'message',
            message: msg.current.value, 
            botid: selectedBot?.server + selectedBot?.name,
            sender: 'USER',
            pass: pass
        }
        msg.current.value = ''
        socket.current.send(JSON.stringify(message))
    }

    function sendDisconnect()  {
        // console.log('Disconnect')
        const message = {
            event: 'disconnection',
            botid: selectedBot?.server + selectedBot?.name,
            sender: 'USER',
        }
        socket.current.send(JSON.stringify(message))
    }


    useEffect(() => {
        window.addEventListener('beforeunload', sendDisconnect)
        return () => {
            window.removeEventListener('beforeunload', sendDisconnect)
        }
    },[])

    useEffect(() => {
        if (!opened && socket.current) {
            sendDisconnect()
            socket.current.close()
        }
    }, [opened])

    const [pass, setPass] = useState('')

    const socket = useRef()
    const msg = useRef()
    const conInp = useRef()

    const [connected, setConnected] = useState(false)
    const [authorized, setAuthorized] = useState(false)
    const [messages, setMessage] = useState([])

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    function connect() {
        conInp.current.value = ''
        socket.current = new WebSocket('wss://1ek.xyz:5000')
        let uid

        socket.current.onopen = () => {
            setConnected(true)
            // console.log('Connected')
            uid = Date.now()
            const message = {
                event: 'connection',
                botid: selectedBot?.server + selectedBot?.name,
                sender: 'USER',
                uid: uid,
                pass: pass,
            }
            // console.log(message)
            socket.current.send(JSON.stringify(message))
        }

        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            switch (message.event) {
                case 'message': 
                    // if (message.botid == (selectedBot?.server + selectedBot?.name)) {
                    //     console.log(message.message)
                    // }
                    break 
                case 'botmsg': 
                    if (message.botid == (selectedBot?.server + selectedBot?.name)) {
                        // console.log(message.message)
                        setMessage(prev => [message, ...prev])
                    }
                    break
                case 'verification': 
                    if ( (message.status === true) && (message.uid === uid) ) {
                        setAuthorized(true)
                    }
                break
            }
            
        }

        socket.current.onclose = () => {
            // console.log('Closed')
        }
        socket.current.onerror = () => {
            // console.log('Error')
        }
    

    }

    const colorizer = (text) => {
        const reg = /({......})/gm
        if (!text.match(reg)) { return text}
        let colors = text.match(reg).map(color => color.replace(/[{,}]/g, ''))
        colors.unshift('')
        let strings = text.split(reg)
        strings = strings.filter(string => !string.match(reg))
        // console.log(colors)
        // console.log(strings)
        return (
            <>
                {strings.map((string, i) => 
                    (
                        <span className={styles.chat__word} style={{'color': `#${colors[i]}`}} key={i}>{string}</span>
                    )
                )}
            </>
        )
    }

    

    const handleKey = (e) => {
        if (e.key == 'Enter') {
            sendMessage()
        }
      }

    if (!connected) {
        return (
            <div className={styles.connect__container}>
                <input className={styles.connect__input} type="text" placeholder="Enter secret key..." onChange={e => setPass(e.target.value)} ref={conInp}/>
                <button className={styles.connect__button} onClick={connect}>CONNECT</button>
            </div>
        )
    }

    return (
        <div className={styles.chat__container}>
                <h3 className={styles.chat__info}> Connected to: <span style={{'color':'#30E457'}}>{selectedBot?.name}</span> | {selectedBot?.server}</h3>
      
                    <ul className={styles.chat__msglist}>
                        <li ref={messagesEndRef} />
                        {messages.map(msg => {
                            return <li style={{'color': `#${msg.color1}`}} className={styles.chat__message} key={msg.id}>{colorizer(msg.message)}</li>
                        })}
                    </ul>
            
                <div className={styles.chat__sender}>
                    <input className={styles.chat__input} type="text" placeholder={authorized ? 'Enter your message' : 'WRONG SECRET KEY'} ref={msg} onKeyDown={handleKey} disabled={!authorized}/>
                    <button className={styles.chat__send} onClick={sendMessage} disabled={!authorized}>SEND</button>
                </div>
        </div>
    )
}

export default BotChat