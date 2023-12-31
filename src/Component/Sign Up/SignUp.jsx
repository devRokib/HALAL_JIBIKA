
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from'react-firebase-hooks/auth'
import './SignUp.css'
import { NavLink, useNavigate } from 'react-router-dom';

import auth from "../../fireConfige/FirebaseConfig";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import SocialAccount from "../SocialAccount/SocialAccount";


function SignUp() {
    const [createUserWithEmailAndPassword,
           user,loading,error ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true})
           const navigate = useNavigate()

           let[updateProfile,updating] = useUpdateProfile(auth)
           if(loading||updating){
            return <Loading/>
           }
           let errorElement;
           if(error){
            errorElement = <p>{error?.message}</p>
           }
           if(user){
            navigate('/')
           }


  const formSubmitHandler = (async(e)=>{
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let confirmPassword = e.target.confirmPassword.value;
          // console.log(name, email, password, confirmPassword)
          e.target.reset();
          if(name === ""){
           return toast.error("please give your name")
          }
          
          else if(email === ""){
           return toast.error('Email field is  required')
          }

          else if(password < 6){
           return toast.error('Minimum  6 Digit Password is required')
          }

          else if(password !== confirmPassword){
           return toast.error(" Password doesn't match")
          }
          
          else{
            await createUserWithEmailAndPassword(email,password)
            await updateProfile({displayName:name})
            return toast.success('Successfully Submitted !')
          }
         
  })
  return (
    <div className='signupSection'>
        <div className="formContainer">
          <h1>Create Account</h1>
           
          <form action="#" onSubmit={formSubmitHandler}>
            <SocialAccount/>
           <input  type="text" name="name" id="name" placeholder='Full Name' />

            <input type="email" name="email" id="email" placeholder='Email' />

            <input type="password" name="password" id="password" placeholder='Password' />

            <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />

            <input id="submitBtn" type="submit" value="Sign Up" />

            <NavLink className='login' to= '/signin'>You have an account? Log in</NavLink>

          </form>
        </div>
    </div>
  )
}

export default SignUp
