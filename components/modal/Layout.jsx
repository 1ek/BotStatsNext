import { CSSTransition } from "react-transition-group"
import { useEffect, useRef, useState } from "react"

import { useDispatch } from 'react-redux';
import { selectBotChat } from '../../slices/botChatSlice'

import styles from '../../styles/Modal.module.scss'
import animStyles from '../../styles/Animation.module.scss'

import { ANIMATION_TIME } from "../../data/data"

const overlayAnimation = {
    enter: animStyles.overlayEnter,
    enterActive: animStyles.overlayEnterActive,
    exit: animStyles.overlayExit,
    exitActive: animStyles.overlayExitActive,
}

const contentAnimation = {
    enter: animStyles.contentEnter,
    enterActive: animStyles.contentEnterActive,
    exit: animStyles.contentExit,
    exitActive: animStyles.contentExitActive,
}

const Layout = ({ onClose, children, opened }) => {
    const overlayRef = useRef()
    const contentRef = useRef()

    const dispatch = useDispatch()

    const closeOverlay = () => {
        setTimeout(() => { dispatch(selectBotChat(null)) }, 500)
        onClose()
    }

    const [animationIn, setAnimationIn] = useState(false)

    useEffect(() => {
        setAnimationIn(opened);
        opened && (document.body.style.overflowY = 'hidden')
        !opened && ( document.body.style.overflowY = 'unset')
        
      }, [opened])

    return (
        <div className={styles.container}>
            <CSSTransition 
                in={animationIn}
                nodeRef={overlayRef}
                timeout={ANIMATION_TIME}
                mountOnEnter
                unmountOnExit
                classNames={overlayAnimation}
            >
                <div ref={overlayRef} className={styles.overlay} onClick={() => closeOverlay()}></div>
            </CSSTransition>
            <CSSTransition 
                in={animationIn}
                nodeRef={contentRef}
                timeout={ANIMATION_TIME}
                mountOnEnter
                unmountOnExit
                classNames={contentAnimation}
            >
                <div ref={contentRef} className={styles.content}>{children}</div>
            </CSSTransition>
        </div>
    )
}

export default Layout