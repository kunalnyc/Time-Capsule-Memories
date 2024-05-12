import React from "react"

export const Button = (buttonProps: _buttonProps) => {
    return <button onClick={buttonProps.handleClickEvent}>click</button>
}
type _buttonProps = {
    handleClickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void
}