import axios from "axios"

const api= axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export const generateinterviewreport = async ({ jobdescription, selfdescription, resumefile })=>{
       const formdata= new FormData()
       formdata.append("jobdescription",jobdescription)
       formdata.append("selfdescription",selfdescription)
       formdata.append('resume',resumefile)

       const response =await api.post("/api/interview/", formdata, {
        headers:{
            "Content-Type":"multipart/form-data"
        }
       })

       return response.data
}


export const getinterviewreportbyid= async (interviewId)=>{
    const response= await api.get(`/api/interview/report/${interviewId}`)
     
    return response.data

}


export const getallinterviewreports= async ()=>{
    const response= await api.get(`/api/interview/`)
     
    return response.data

}

export const generateResumePdf = async ({ interviewReportId }) => {
    const response = await api.post(`/api/interview/resume/pdf/${interviewReportId}`, null, {
        responseType: "blob"
    })

    return response.data
}