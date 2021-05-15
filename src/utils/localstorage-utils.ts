export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("app-state")
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state.counter)
        localStorage.setItem("app-state", serializedState)
    } catch {
        // ignore write errors
    }
}