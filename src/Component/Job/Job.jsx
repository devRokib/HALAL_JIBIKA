import React from 'react'
import { NavLink } from 'react-router-dom'
import './Job.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

function Job({data}) {
    const {id,title,companyName,description,position,logo} = data
  return (
    <div className='jobSection'>
      <div className="jobItem">
        <div className="jobImg">
            <img src={logo} alt="" />
        </div>
        <div className="jobContent">
          <h1>Title: {title}</h1>
          <h1>Company: {companyName}</h1>
          <h1>{position}</h1>
        </div>
        <div className="jobButton">
        <NavLink className='moreInfoBtn' to={`/jobs/${id}`}>
            moreinfo
        </NavLink>
          <div className="editDeleteBtn">
            <NavLink to='/editjob'><FaEdit /></NavLink>
            <NavLink><MdDelete /></NavLink>
            <NavLink to='/favorite'><MdOutlineFavorite /></NavLink>
          </div>

        <NavLink className='moreInfoBtn' to={`/jobs/${id}`}>
            Apply Now
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Job
