
import React from 'react'

const Profile = async () => {
  
    //this code is for showing the loading component
    await new Promise((resolve)=> setTimeout(resolve,3000));
    
  return (
    <div>
        <h1>Profile Page</h1>
    </div>
  )
}

export default Profile