import React from 'react'

function User(props) {
  return (
    <div>
      <h2>User Profile</h2>
      {props.user && (
        <div>
          <p>Name: {props.user.name}</p>
          <p>Email: {props.user.email}</p>
        </div>
      )}
      <h1>{props.user.name}</h1>
    </div>
  )
}

export default User
