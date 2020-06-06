import React from 'react'
import { useSelector } from 'react-redux';

// Need to add information if !token so that you can see as a user that you need to login in order to get access

export const Dashboard = () => {
  const token = useSelector((store) => store.user.login.accessToken)
  
  return (
    <>
      {token}
      {token && <p>You have a legit accessToken</p>}
    </>
  )
}