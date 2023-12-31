import React from 'react'

function JobDetails({data}) {
    const {id,companyName,description,logo,position,title,} = data
  return (
    <div>
      <h3>{id}</h3>
      <h3>{companyName}</h3>
      <h3>{description}</h3>
      <h3>{logo}</h3>
      <h3>{title}</h3>
      <h3>{position}</h3>
    </div>
  )
}

export default JobDetails
