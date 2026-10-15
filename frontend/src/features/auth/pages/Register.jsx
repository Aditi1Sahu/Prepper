import { useState } from "react"
import { useNavigate,Link} from "react-router"
import { useAuth } from "../hooks/useAuth"


const Register = () => {

    const navigate=useNavigate()
    const [username, setusername]=useState("")
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")

    const {loading,handleregister }=useAuth()

     const handlesubmit=async (e)=>{
        e.preventDefault()

        await handleregister({username,email,password})
        navigate("/")
    }


     if(loading){
        return (<main><h1>Loading.......</h1></main>)
    }

    
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>

            <form onSubmit={handlesubmit}>


                <div className="input-group">
                <label htmlFor="username">username</label>
                <input 
                 onChange={(e)=>{setusername(e.target.value) }}
                type="text" id="username" name="username" placeholder="Enter username" />
                </div>

                <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                 onChange={(e)=>{setemail(e.target.value) }}
                type="text" id="email" name="email" placeholder="Enter your email" />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                     onChange={(e)=>{setpassword(e.target.value) }}
                    type="password" id="password" name="password" placeholder="enter password" />
                </div>

                <button className="button primary-button">Register</button>


            </form>
       
               <p>Already have an account? <Link to={"/login"}>Login</Link> </p>
        </div>
    </main>
  )
}

export default Register