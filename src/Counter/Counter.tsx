import React from "react";
import {ButtonComponent} from "../Buttons/ButtonComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {
    disabledIncButtonAC,
    incStartValueAC,
    maxCountValueAC,
    resetValueAC,
    setCountOrMessageAC
} from "../redux/counter-reducer";
import style from "./Counter.module.css";

export const Counter = React.memo(() => {

    const countValue = useSelector<AppStateType, number>(state => state.counter.countValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const disableIncButton = useSelector<AppStateType, boolean>(state => state.counter.disableIncButton)
    const message = useSelector<AppStateType, string>(state => state.counter.message)
    const countOrMessage = useSelector<AppStateType, boolean>(state => state.counter.countOrMessage)

    const dispatch = useDispatch()

    const incStartValue = () => {
        dispatch(setCountOrMessageAC(true))
        dispatch(incStartValueAC())
        if (countValue >= maxValue) {
            dispatch(maxCountValueAC(maxValue))
        }
        if (countValue >= maxValue - 1) {
            dispatch(disabledIncButtonAC(true))
        }
    }

    const resetValue = () => {
        dispatch(resetValueAC(minValue))
        dispatch(disabledIncButtonAC(false))
    }

    return (
        <div className={style.counter}>
            <div className={style.message}>
                {countOrMessage
                    ? <span style={{color: countValue >= maxValue ? "red" : ""}}>{countValue}</span>
                    : <span style={{color: message === "Incorrect value!" ? "red" : ""}}>{message}</span>
                }
            </div>
            <div className={style.buttons}>
                <span><ButtonComponent onClick={incStartValue} disabled={disableIncButton} name={"inc"}/></span>
                <span><ButtonComponent onClick={resetValue} name={"reset"}/></span>
            </div>
        </div>
    )
})