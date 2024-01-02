import React, { useState } from 'react';
import './AddJob.css'
function AddJob({ createJob }) {
    const [jobData, setJobData] = useState({
        title: '',
        companyName: '',
        description: '',
        position: '',
        logo: null,
    });

    const handleChange = (event) => {
        setJobData({ ...jobData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await createJob(jobData);
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
                        <textarea id="description" name="description" value={jobData.description} onChange={handleChange} required />

                        <label htmlFor="position">Position:</label>
                        <input type="text" id="position" name="position" value={jobData.position} onChange={handleChange} required />

                        <label htmlFor="logo">Logo:</label>
                        <input type="file" id="logo" name="logo" onChange={(event) => setJobData({ ...jobData, logo: event.target.files[0] })} /> <br />

                        <button type="submit">Add Job</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddJob;

