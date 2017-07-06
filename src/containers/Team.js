import React from 'react'

const Team = (props) => {
  return (
    <div>
      <h1>Team Page</h1>
      <p>
        {
          props.teamData
        }
      </p>
      <a href="#">
        Back to the other page.
      </a>
    </div>
  )
}

export default Team
