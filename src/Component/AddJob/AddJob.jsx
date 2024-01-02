import React, { useState } from 'react';
import './AddJob.css'
import axios from 'axios';
function AddJob() {
    const [jobData, setJobData] = useState({
        title: '',
        companyName: '',
        description: '',
        position: '',
        logo:'',
    });

    const handleChange = (event) => {
        setJobData({ ...jobData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(` http://localhost:9000/jobs`,jobData)
            setJobData('job added success' ,response.data)
            
            setJobData({ ...jobData, logo: null });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="addJobSection">
            <div className="addJobContainer">
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" value={jobData.title} onChange={handleChange} required />

                        <label htmlFor="companyName">Company Name:</label>
                        <input type="text" id="companyName" name="companyName" value={jobData.companyName} onChange={handleChange} required />

                        <label htmlFor="description">Description:</label>
                        <input type='text' id="description" name="description" value={jobData.description} onChange={handleChange} required />

                        <label htmlFor="position">Position:</label>
                        <input type="text" id="position" name="position" value={jobData.position} onChange={handleChange}  />

                        <label htmlFor="logo">Logo Url</label>
                        <input type="text" id="logo" name="logo" value={jobData.logo} onChange={handleChange} /> <br />

                        <button type="submit">Add Job</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddJob;

