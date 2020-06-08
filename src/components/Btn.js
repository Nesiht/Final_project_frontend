import React from 'react'
import { Button } from 'components/style'

export const Btn = (props) => {
  const { type, title, handleAction } = props
  return (
    <Button type={type} onClick={handleAction}>
      {title}
    </Button>
  )
}