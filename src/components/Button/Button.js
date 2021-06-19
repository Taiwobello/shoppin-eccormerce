import React from 'react'
import { StyledButton } from './Button.styles'

function Button({className, text, backgroundColor, color}) {
    return (
        <StyledButton className={className} backgroundColor={backgroundColor} color={color}>
            {text}
        </StyledButton>
    )
}

export default Button
