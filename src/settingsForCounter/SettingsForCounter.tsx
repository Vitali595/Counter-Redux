import React, {ChangeEvent} from "react";
import {ButtonComponent} from "../Buttons/ButtonComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, store} from "../redux/store";
import {
    disabledIncButtonAC,
    disabledSetButtonAC,
    maxInputValueAC,
    maxValueAC,
    minInputValueAC,
    minValueAC,
    setCountOrMessageAC,
    setMessageAC
} from "../redux/counter-reducer";
import style from "./SettingsForCounter.module.css"
import {TextField} from "@material-ui/core";
import {saveState} from "../utils/localstorage-utils";

export const SettingsForCounter = React.memo(() => {

    const maxInputValue = useSelector<AppStateType, number>(state => state.counter.maxInputValue)
    const minInputValue = useSelector<AppStateType, number>(state => state.counter.minInputValue)
    const disableSetButton = useSelector<AppStateType, boolean>(state => state.counter.disableSetButton)
    const message = useSelector<AppStateType, string>(state => state.counter.message)

    const dispatch = useDispatch()

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value <= 0 || +e.currentTarget.value <= minInputValue) {
            dispatch(setMessageAC("Incorrect value!"))
            dispatch(disabledSetButtonAC(true))
            dispatch(setCountOrMessageAC(false))
        } else if (+e.currentTarget.value > 0 && minInputValue >= 0) {
            dispatch(setMessageAC("enter values and press \"set\""))
            dispatch(disabledSetButtonAC(false))
            dispatch(setCountOrMessageAC(false))
        }
        dispatch(maxInputValueAC(+e.currentTarget.value))
    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value < 0 || +e.currentTarget.value >= maxInputValue) {
            dispatch(setMessageAC("Incorrect value!"))
            dispatch(disabledSetButtonAC(true))
            dispatch(setCountOrMessageAC(false))
        } else if (+e.currentTarget.value >= 0 && maxInputValue > 0) {
            dispatch(setMessageAC("enter values and press \"set\""))
            dispatch(disabledSetButtonAC(false))
            dispatch(setCountOrMessageAC(false))
        }
        dispatch(minInputValueAC(+e.currentTarget.value))

    }

    const setValues = () => {

        dispatch(disabledIncButtonAC(false))
        dispatch(disabledSetButtonAC(true))
        dispatch(setCountOrMessageAC(true))
        dispatch(maxValueAC(maxInputValue))
        dispatch(minValueAC(minInputValue))
        saveState({
            counter: store.getState()
        })
    }

    return (
        <div className={style.set_counter}>
            <div className={style.input}>
                <div className={style.text_field}>max value: <TextField type="number"
                                                                        value={maxInputValue}
                                                                        onChange={maxValueHandler}
                                                                        variant={"outlined"}
                                                                        error={message === "Incorrect value!"}
                                                                        size={"small"}
                /></div>
                <div className={style.text_field}>min value: <TextField type="number"
                                                                        value={minInputValue}
                                                                        onChange={minValueHandler}
                                                                        variant={"outlined"}
                                                                        error={message === "Incorrect value!"}
                                                                        size={"small"}
                /></div>
            </div>
            <div className={style.button}>
                <ButtonComponent disabled={disableSetButton} onClick={setValues} name={"set"}/>
            </div>
        </div>
    )
})