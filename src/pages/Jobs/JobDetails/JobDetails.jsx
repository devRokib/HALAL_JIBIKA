
import { useLoaderData } from 'react-router-dom'
import './JobDetails.css'
// import { NavLink } from 'react-router-dom';

function JobDetails() {
    const userData = useLoaderData()
    console.log(userData)
    const {logo,companyName,title} = userData
  return (
    <div className='jobSection'>
     <div className="jobItem">
     
          <div className="jobImg">
          <img src={logo} alt="companyName"/>
          </div>

          <div className="jobContent">
          <h3>{companyName}</h3>
          <h3>{title}</h3>
          </div>
         </div>
    </div>
  )
}

export default JobDetails
