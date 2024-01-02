import './Jobs.css'
import { NavLink, useLoaderData } from 'react-router-dom'
import JobDetails from './JobDetails/JobDetails'
import Job from '../../Component/Job/Job'
import { useState } from 'react'

function Jobs() {
  const userData = useLoaderData()
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Job 1',  },
    { id: 2, title: 'Job 2',  },
    
  ]);

  const handleDelete = async (id) => {
    try {
     await new Promise(resolve => setTimeout(resolve, 0));
     setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    } catch (error) {
    }
  };
  return (
    <div className="jobsMainSection">
     <div className="jobsTitle">
     <h1 style={{textAlign:'center'}}>Available Jobs</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et non voluptas adipisci odit, sapiente voluptates.</p>
     </div>
        <div className='jobsMainContainer'>
        {
          userData.map((data)=><Job key={data.id}  data= {data} onDelete={handleDelete} userData={userData} setJobs={setJobs}/>)
        }
        </div>
        <div className="addjobWrapper">
        <NavLink className='addJobBtn' to='/addjob'>add job</NavLink>
        </div>
    </div>
  )
}

export default Jobs
