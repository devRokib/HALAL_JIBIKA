import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'

function EditJob() {
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    position: '',
    logo: '',
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault(event);
    console.log('Submitted form data:', formData);
    Navigate('/jobs');
  };
  
  
  
  return (
    <div className='editSection'>
      <div className="editformContainer">
        <div className="editForm">
          <form action="#" onSubmit={handleSubmit}>

            <label htmlFor="title">Title</label><br />
            <input onChange={handleChange} type="text" name="title" id="title" /><br /> <br />

            <label htmlFor="companyname">Company Name</label><br />
            <input onChange={handleChange} type="text" name="company" id="companyname" /><br /> <br />

            <label htmlFor="position">Position</label><br />
            <input onChange={handleChange} type="text" name="position" id="position" /><br /> <br />

            <label htmlFor="logo">Logo Url</label><br />
            <input onChange={handleChange} type="text" name="logo" id="logo" /><br /> <br />

            <button >
              <input type="submit" value='Edit Job'/>
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default EditJob

