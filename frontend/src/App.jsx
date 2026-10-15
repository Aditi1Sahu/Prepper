import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { Interviewprovider } from "./features/interview/interview.context.jsx"


const App = () => {
  return (

    <AuthProvider>
      <Interviewprovider>
           <RouterProvider router={router}/>
      </Interviewprovider>
          
    </AuthProvider>
   
  )
}

export default App