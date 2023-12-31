import React from 'react'
import { NavLink } from 'react-router-dom'
import './Job.css'
function Job({data}) {
    const {id,title,companyName,description,logo} = data
  return (
    <div className='jobSection'>
      <div className="jobItem">
        <div className="jobImg">
            <img src={logo} alt="" />
        </div>
        <div className="jobContent">
          <h1>{title}</h1>
          <h1>{companyName}</h1>
        </div>
        <NavLink to={`/jobs/${id}`}>
            moreinfo
        </NavLink>
      </div>
    </div>
  )
}

export default Job
