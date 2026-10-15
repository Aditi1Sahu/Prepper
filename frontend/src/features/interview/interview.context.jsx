import { useState } from "react";
import { createContext } from "react";


export const Interviewcontext =createContext()


export const Interviewprovider = ({ children })=>{
    const [loading, setloading] =useState(false)
    const [report, setreport] = useState(null)
    const [reports, setreports] = useState([])

    return (
        <Interviewcontext.Provider value={ {loading, setloading, report, setreport ,reports , setreports} }>
            {children}
        </Interviewcontext.Provider>
    )
}