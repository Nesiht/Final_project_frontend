import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { user } from '../reducers/user'

export const Logout = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(user.actions.logout())
    history.push(`/home`)
   })
  
  return <></>
}