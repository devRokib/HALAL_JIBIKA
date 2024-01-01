import './ApplyNow.css'

function ApplyNow() {
  return (
    <div>
      <div className="applyNowSection">
        <div className="applyNowContainer">
            <div className="applyNowForm">
                <form >
                    <label htmlFor="fullName">Your Full Name</label><br />
                    <input type="text" name="fullName" id="fullName" placeholder='Your Name'/><br /> <br />

                    <label htmlFor="email">Your Email</label><br />
                    <input type="text" name="email" id="email" placeholder='Email' /><br /><br />

                    <label htmlFor="conpanyName">Company Name</label><br />
                    <input type="text" name="conpanyName" id="conpanyName" /><br /><br />

                    <label htmlFor="position">Position</label><br />
                    <input type="text" name="position" id="position" placeholder='Position' /><br /><br />

                    <label htmlFor="number">Phone Number</label><br />
                    <input type="number" name="number" id="number" placeholder='Phone Number' /><br /><br />

                    <button>Apply Now</button>

                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyNow
