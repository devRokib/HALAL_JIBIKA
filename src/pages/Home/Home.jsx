import { NavLink, useLoaderData } from 'react-router-dom'
import './Home.css'
import LatestJob from './LatestJob/LatestJob'

function Home() {
  const data = useLoaderData()
  
  console.log(data)
  return (
    <div>
      <div className="homeSection">
        <div className="homeContainer">
          <div className="homeContent">
            <div className="homeLeft">
              <h3>The Biggest Job Placed</h3>
              <h1>The Easiest <span className='BnrTitleEdit'>Way to Get</span> Your New Job</h1>
              <p>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day.Join now today</p>
              <NavLink to='/signup' className='exploreBtn'>Explore Now</NavLink>
            </div>
            <div className="homeRight">
              <div className="headerImg">
              <img src="https://img.freepik.com/free-vector/businessman-business-icons_1284-4591.jpg?w=740&t=st=1704177746~exp=1704178346~hmac=fa3ffade9b4b677ee8c9de1f2a87be718d68a8b024ee97cd6c6e20faefd536f7" alt="" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="titleWraper">
      <h1 className='latestTitle'>Latest Jobs</h1>
      <div className="jobMainContainer">
      {
        data.slice(0,6).map((latest)=><LatestJob key={latest.id} latest={latest}/>)
      }
      </div>
      <div className="exploreWrapper">
      <NavLink className='exploreMoreBtn' to='./jobs'>Explore More</NavLink>
      </div>
      </div>
    </div>
  )
}

export default Home
