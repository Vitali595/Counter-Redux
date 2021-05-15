const initialState = {
    countValue: 0,
    maxInputValue: 5,
    minInputValue: 0,
    maxValue: 5,
    minValue: 0,
    disableSetButton: true,
    disableIncButton: false,
    countOrMessage: false,
    message: "enter values and press \"set\""
}

type InitialStateType = typeof initialState

export type IncStartValueAT = ReturnType<typeof incStartValueAC>
export type ResetValueAT = ReturnType<typeof resetValueAC>
export type MaxCountValueAT = ReturnType<typeof maxCountValueAC>
export type MaxInputValueAT = ReturnType<typeof maxInputValueAC>
export type MinInputValueAT = ReturnType<typeof minInputValueAC>
export type MaxValueAT = ReturnType<typeof maxValueAC>
export type MinValueAT = ReturnType<typeof minValueAC>
export type DisabledSetButtonAT = ReturnType<typeof disabledSetButtonAC>
export type DisableIncButtonAT = ReturnType<typeof disabledIncButtonAC>
export type SetMessageAT = ReturnType<typeof setMessageAC>
export type SetCountOrMessageAT = ReturnType<typeof setCountOrMessageAC>

type ActionType = IncStartValueAT
    | ResetValueAT | MaxCountValueAT
    | MaxInputValueAT | MinInputValueAT
    | MaxValueAT | MinValueAT
    | DisabledSetButtonAT | DisableIncButtonAT
    | SetMessageAT | SetCountOrMessageAT

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC_START_VALUE": {
            return {
                ...state,
                countValue: state.countValue + 1
            }
        }
        case "RESET_VALUE": {
            return {
                ...state,
                countValue: action.minValue
            }
        }
        case "MAX_COUNT_VALUE": {
            return {
                ...state,
                countValue: action.maxCountValue
            }
        }
        case "MAX_INPUT_VALUE": {
            return {
                ...state,
                maxInputValue: action.maxInputValue
            }
        }
        case "MIN_INPUT_VALUE": {
            return {
                ...state,
                minInputValue: action.minInputValue
            }
        }
        case "MAX_VALUE": {
            return {
                ...state,
                maxValue: action.maxValue
            }
        }
        case "MIN_VALUE": {
            return {
                ...state,
                countValue: action.minValue,
                minValue: action.minValue
            }
        }
        case "DISABLED_SET_BUTTON": {
            return {
                ...state,
                disableSetButton: action.disableSetButton
            }
        }
        case "DISABLED_INC_BUTTON": {
            return {
                ...state,
                disableIncButton: action.disableIncButton
            }
        }
        case "SET_MESSAGE": {
            return {
                ...state,
                message: action.message
            }
        }
        case "SET_COUNT_OR_MESSAGE": {
            return {
                ...state,
                countOrMessage: action.countOrMessage
            }
        }
        default:
            return state
    }
}

export const incStartValueAC = () => ({type: "INC_START_VALUE"} as const)
export const resetValueAC = (minValue: number) => ({type: "RESET_VALUE", minValue} as const)
export const maxCountValueAC = (maxCountValue: number) => ({type: "MAX_COUNT_VALUE", maxCountValue} as const)
export const maxInputValueAC = (maxInputValue: number) => ({type: "MAX_INPUT_VALUE", maxInputValue} as const)
export const minInputValueAC = (minInputValue: number) => ({type: "MIN_INPUT_VALUE", minInputValue} as const)
export const maxValueAC = (maxValue: number) => ({type: "MAX_VALUE", maxValue} as const)
export const minValueAC = (minValue: number) => ({type: "MIN_VALUE", minValue} as const)
export const disabledSetButtonAC = (disableSetButton: boolean) => ({
    type: "DISABLED_SET_BUTTON",
    disableSetButton
} as const)
export const disabledIncButtonAC = (disableIncButton: boolean) => ({
    type: "DISABLED_INC_BUTTON",
    disableIncButton
} as const)
export const setMessageAC = (message: string) => ({type: "SET_MESSAGE", message} as const)
export const setCountOrMessageAC = (countOrMessage: boolean) => ({type: "SET_COUNT_OR_MESSAGE", countOrMessage} as const)

