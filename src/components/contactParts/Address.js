import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  color: ${props => props.theme.colors.grey};
  line-height: 1.8;
`

export default function Address() {
  return (
    <div>
      <StyledParagraph>By Chance Bar and Bistro</StyledParagraph>
      <StyledParagraph>1 Webber Cres, </StyledParagraph>
      <StyledParagraph>Calwell ACT 2905</StyledParagraph>
    </div>
  )
}
