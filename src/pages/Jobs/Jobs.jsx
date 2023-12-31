import React from 'react'
import { useLoaderData } from 'react-router-dom'
import JobDetails from './JobDetails/JobDetails'

function Jobs() {
  const userData = useLoaderData()
  console.log(userData)
  return (
    <div>
      {
        userData.map((data)=><JobDetails key={data.id} data ={data}/>)
      }
    </div>
  )
}

export default Jobs
