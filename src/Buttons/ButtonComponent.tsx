import React from "react";
import {Button} from "@material-ui/core";

type ButtonComponentPropsType = {
    onClick: () => void
    name: string
    disabled?: boolean
}

export const ButtonComponent = (props: ButtonComponentPropsType) => {
    return <Button
        disabled={props.disabled}
        onClick={props.onClick}
        variant={"contained"}
        color={props.name === "reset" ? "secondary" : "primary"}
    >{props.name}</Button>

}