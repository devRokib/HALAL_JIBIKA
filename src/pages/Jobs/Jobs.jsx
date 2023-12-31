import './Jobs.css'
import { NavLink, useLoaderData } from 'react-router-dom'
import JobDetails from './JobDetails/JobDetails'
import Job from '../../Component/Job/Job'

function Jobs() {
  const userData = useLoaderData()
  // const {id,title,companyName,logo} = userData
  
  return (
    <div className='jobsMainContainer'>
      {
        userData.map((data)=><Job key={data.id}  data= {data}/>)
      }
      
    </div>
  )
}

export default Jobs
