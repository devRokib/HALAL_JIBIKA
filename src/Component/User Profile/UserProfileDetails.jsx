import React from 'react'
import { useLoaderData } from 'react-router-dom';



function UserProfileDetails() {
    const Profile = useLoaderData()
    const {username,name,email,phone,photoURL} =Profile
  return (
    <div className='profileSection'>
      <div className="profileContainer">
        <div className="profileItem">
          <div className="profileImg">
            {/* <img src={photoURL} alt="" /> */}
          </div>
          <div className="profileContent">
            <h3>{email}</h3>
            <h3>{username}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileDetails;
