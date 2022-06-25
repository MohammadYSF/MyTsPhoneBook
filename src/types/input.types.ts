import React from "react"
export type inputProps = {
    type: string,
    classes?: string[],
    elementId?: string,
    value?:string,
    placeHolder?:string,
    handleChange?:(e:React.ChangeEvent<HTMLInputElement>)=> void
}