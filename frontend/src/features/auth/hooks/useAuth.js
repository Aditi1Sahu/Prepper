import { useContext,useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login,register,logout,getme } from "../services/auth.api";

export const useAuth=()=>{
    const context = useContext(AuthContext)
    const {user,setuser,loading,setloading}=context

    const handlelogin= async({ email,password})=>{
        setloading(true)

        try{
            const data=await login( {email,password})
            setuser(data.user)
            return data
        }catch(err){
            console.log(err);

        }finally{
            setloading(false)
        }
       
       
    }


    const handleregister= async({ username,email,password})=>{
        setloading(true)

        try{
        const data=await register( {username,email,password})
        setuser(data.user)
    }catch(err){
       console.log(err);
       
    }finally{
           setloading(false)
    }
        
    }

    const handlelogout= async()=>{
        setloading(true)
        try{
           const data=await logout()
           setuser(null)
        }catch(err){ 
            console.log(err);
            
        }finally{  
        setloading(false)
         }
    }


      useEffect(() => {
    const getandsetuser = async () => {
        try {
            const data = await getme();
            setuser(data.user);
        } catch (err) {
            console.log(err);
            setuser(null);
        } finally {
            setloading(false);
        }
    };

    getandsetuser();
}, []);

    return {user,loading,handleregister,handlelogin,handlelogout}
}