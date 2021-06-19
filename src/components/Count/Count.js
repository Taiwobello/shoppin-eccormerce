import React from 'react'
import { Value, StyledCount } from './Count.styles'

function Count({count}) {
    
    return (
            <StyledCount>
                <Value>{count}</Value>
            </StyledCount>
    )
}

export default Count
