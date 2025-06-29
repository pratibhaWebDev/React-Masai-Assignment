import React from 'react'

const ProfileCard = ({ name = "Anonymous", age, bio = "No biography provided." }) => {

    const truncatedBio = bio.length > 100 ? bio.slice(0, 100) + "… Read More":bio;
  return (
    <div style={{border:"2px solid black",background:"grey",padding:"20px",fontFamily:"sans-serif",textAlign:"left", }}>
      <div style={{}}> <em>Name:</em>{name}</div>
      <div style={{}}> <em>Age:</em> {age}</div>
      <div style={{}}> <em>Bio:</em> {truncatedBio}</div>
    </div>
  )
}

export default ProfileCard