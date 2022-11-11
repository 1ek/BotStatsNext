import { useState, useEffect } from "react"

import { ANIMATION_TIME } from "../../data/data"

export const useMount = ({opened}) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        if (opened && !mounted) {
            setMounted(true)
        } else if (!opened && mounted) {
            setTimeout(() => {
                setMounted(false)
            }, ANIMATION_TIME)
        }
        //eslint-disable-next-line
    }, [opened])

    return { mounted }
}