import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess'

interface ButtomContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  sucess: 'green'
}

export const ButtonContainer = styled.button<ButtomContainerProps>`
  width: 100px;
  height: 40px;

  background: ${props => props.theme.primary};

  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
