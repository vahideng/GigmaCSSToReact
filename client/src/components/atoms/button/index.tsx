/* @flow */
import * as React from 'react'


import './style.scss'

export const ButtonType : any = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

type Props = {
  type?:  "button" | "submit" | "reset" | undefined,
  theme?: string,
  size?: string,
  onClick ?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>  void,
  children ?: React.ReactNode,
  className?: string,
  disabled?: boolean,
}

const Button : React.FC<Props> = (props)  => {
  const { type, onClick, children, theme, size, className, disabled } = props

  const classProps: string = `button ${theme} ${size} ${disabled} ${className}`
  
  

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: '',
  disabled: false,
}

export default Button
