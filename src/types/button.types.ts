import React from "react"
export type buttonType = {
    text: string,
    bootstrapClasses: string[],
    onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
}