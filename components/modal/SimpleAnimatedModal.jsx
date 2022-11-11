import Portal from "./Portal"
import { useMount } from "./useMount"

import Layout from "./Layout"

const SimpleAnimatedModal = ({opened, onClose, children}) => {
    const { mounted } = useMount({ opened })

    if (!mounted) {
        return null
    }

    return (
        // <Portal>
            <Layout onClose={onClose} opened={opened}>
                {children}
            </Layout>
        // </Portal>
    )
}

export default SimpleAnimatedModal