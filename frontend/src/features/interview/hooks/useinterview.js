import { getallinterviewreports,generateinterviewreport,getinterviewreportbyid, generateResumePdf } from "../services/interview.api";
import { useCallback, useContext, useEffect } from "react";
import { Interviewcontext } from "../interview.context";
import { useParams } from "react-router"


export const useInterview =()=> {

     const context = useContext(Interviewcontext)
     const { interviewId } = useParams()

     if(!context){
        throw new Error("useInterview must be used within an InterviewProvider")
     }

     const {loading, setloading, report, setreport ,reports , setreports} = context


     const generatereport= async ({jobdescription ,selfdescription ,resumefile})=>{
        setloading(true)
        let response = null

        try{
         response = await generateinterviewreport({ jobdescription, selfdescription, resumefile})
         console.log("🔥 REPORT FROM BACKEND:", response.interviewreport)   
         setreport(response.interviewreport)
        }catch(error){
            console.log(error)
        }finally{
            setloading(false)
        }

        return response?.interviewreport ?? null
     }


          const getreportbyid = useCallback(async (interviewid) => {
        setloading(true)
        let response = null

        try{
            response = await getinterviewreportbyid(interviewid)
            setreport(response.interviewreport)
        }catch(error){
            console.log(error)
        }finally{
            setloading(false)
        }

        return response?.interviewreport ?? null
    }, [ setloading, setreport ])


          const getreports = useCallback(async () => {
        setloading(true)
        let response = null

        try{
             response = await getallinterviewreports()
            setreports(response.interviewreports)
        }catch(error){
            console.log(error)
        }finally{
            setloading(false)
        }

        return response?.interviewreports ?? []
    }, [ setloading, setreports ])



      const getResumePdf = async (interviewReportId) => {
        setloading(true)
        try {
            const response = await generateResumePdf({ interviewReportId })
            const url = window.URL.createObjectURL(new Blob([ response ], { type: "application/pdf" }))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `resume_${interviewReportId}.pdf`)
            document.body.appendChild(link)
            link.click()
        }
        catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }
    }

    useEffect(() => {
        if (interviewId) {
            getreportbyid(interviewId)
        } else {
            getreports()
        }
    }, [ getreportbyid, getreports, interviewId ])

     return {loading, report, reports , generatereport , getreportbyid, getreports, getResumePdf}
}