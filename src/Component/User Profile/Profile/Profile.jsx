import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Profile from './Profile';

function Profile() {
    const Profile = useLoaderData()
    console.log(ProfileInformation)
    const {username,name,email,phone} = Profile
  return (
    <div>
      
    </div>
  )
}

export default Profile
