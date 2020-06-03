import React from 'react'
import { Button } from 'components/style'

export const Btn = (props) => {
  return (
    <Button>
      {props.title}
    </Button>
  )
}