import React from 'react'
import { Button } from 'components/style'

export const Btn = (props) => {
  const { type, title } = props
  return (
    <Button type={type}>
      {title}
    </Button>
  )
}