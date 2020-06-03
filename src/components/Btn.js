import React from 'react'
import { Button } from 'components/style'

export const Btn = (props) => {
  return (
    <Button type={props.type}>
      {props.title}
    </Button>
  )
}