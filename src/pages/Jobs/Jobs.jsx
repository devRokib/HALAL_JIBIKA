import './Jobs.css'
import { NavLink, useLoaderData } from 'react-router-dom'
import JobDetails from './JobDetails/JobDetails'
import Job from '../../Component/Job/Job'

function Jobs() {
  const userData = useLoaderData()
  // const {id,title,companyName,logo} = userData
  
  return (
    <div className="jobsMainSection">
     <div className="jobsTitle">
     <h1 style={{textAlign:'center'}}>Available Jobs</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et non voluptas adipisci odit, sapiente voluptates.</p>
     </div>
        <div className='jobsMainContainer'>
        {
          userData.map((data)=><Job key={data.id}  data= {data}/>)
        }
        </div>
    </div>
  )
}

export default Jobs
