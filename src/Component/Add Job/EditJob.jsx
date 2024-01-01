import {   useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
// import { NavLink } from 'react-router-dom'



function EditJob() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    position: '',
    logo: '',
  });
  const { id } = useParams();
  const navigate = useNavigate()
  const handleChange =async (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit =async (event) => {
    event.preventDefault(event);
    try {
       const response = await fetch(`http://localhost:9000/jobs/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
         toast.success('Job updated successfully!');
        navigate('/jobs');
      } else {
        toast.error('Failed to update job.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
   };

  return (
    <div className='editSection'>
      <div className="editformContainer">
        <div className="editForm">
          <form  onSubmit={handleSubmit}>

            <label htmlFor="title">Title</label><br />
            <input onChange={handleChange} type="text" name="title" id="title" /><br /> <br />

            <label htmlFor="companyName">Company Name</label><br />
            <input onChange={handleChange} type="text" name="companyName" id="companyName" /><br /> <br />

            <label htmlFor="position">Position</label><br />
            <input onChange={handleChange} type="text" name="position" id="position" /><br /> <br />

            <label htmlFor="logo">Logo Url</label><br />
            <input onChange={handleChange} type="text" name="logo" id="logo" /><br /> <br />

            <button type='submit' >
              Edit Job
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default EditJob;
