import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import './Job.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import Swal from 'sweetalert2';

function Job({data,onDelete,setJobs,userData }) {
  const { id, title, companyName, description, position, logo } = data;
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await onDelete(id);
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));

      Swal.fire(
        'Deleted!',
        'The job has been deleted successfully.',
        'success'
      );
    } catch (error) {
      
      Swal.fire('Error!', 'Something went wrong. Please try again.', 'error');
    }
  };
    
  return (
    <div className='jobSection'>
      <div className="jobItem">
        <div className="jobImg">
            <img src={logo} alt="" />
        </div>
        <div className="jobContent">
          <h1>Title: {title}</h1>
          <h2>Company: {companyName}</h2>
          <h3>Position: {position}</h3>
        </div>
        <div className="jobButton">
        <NavLink className='moreInfoBtn' to={`/jobs/${id}`}>
            moreinfo
        </NavLink>
          <div className="editDeleteBtn">
            <NavLink className='editBtn' to={`/jobs/${id}/editjob`}><FaEdit /></NavLink>
            <NavLink  onClick={handleDeleteClick} className='deleteBtn'><MdDelete /></NavLink>
            <NavLink className='favoriteBtn' to={`/jobs/${id}/favorite`}><MdOutlineFavorite /></NavLink>
          </div>

        <NavLink className='moreInfoBtn' to={`/jobs/${id}/applynow/`}>
            Apply Now
        </NavLink>
        </div>
      </div>
      {showDeleteConfirmation && (
        <div className="deleteConfirmation">
          <p>Are you sure you want to delete this job?</p>
          <button onClick={handleConfirmDelete}>Confirm Delete</button>
          <button onClick={() => setShowDeleteConfirmation(false)}>Cancel</button>
        </div>
      )}
      
    </div>
  )
}

export default Job;
