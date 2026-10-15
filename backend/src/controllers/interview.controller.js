const pdfparse = require("pdf-parse")
const {generateinterviewreport, generateResumePdf}=require("../services/ai.service")

const interviewreportModel = require("../models/interviewreport.model")


async function generateinterviewreportcontroller(req,res){
   const resumefile=req.file

   const resumecontent=await (new pdfparse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
   const { selfdescription , jobdescription } = req .body

   const interviewreportbyai=await generateinterviewreport({
    resume:resumecontent.text,
    selfdescription,
    jobdescription
   })

   const interviewreport =await interviewreportModel.create({
      user: req.user.id,
      resume:resumecontent.text,
      selfdescription,
      jobdescription,
      ...interviewreportbyai
   })

   res.status(201).json({
      message: "Interview report generated successfully" ,
      interviewreport
   })
}


async function getinterviewreportbyidcontroller(req,res) {

   const { interviewId } = req.params
   const interviewreport =await interviewreportModel.findOne({_id: interviewId , user:req.user.id})
   

   if(!interviewreport){
      return res.status(404).json({
         message:"Interview report not found"
      })
   }


   return res.status(200).json({
         message:"Interview report fetched successfully.",
         interviewreport
      })
}


async function getallinterviewreportscontroller(req,res) {

 const interviewreports= await interviewreportModel.find({ user:req.user.id}).sort({ createdAt:-1 }).select("-resume -selfdescription -jobdescription -__v -technicalquestions -behavioralquestions -skillgaps -preparationplan")
   return res.status(200).json({
         message:"Interview reports fetched successfully.",
         interviewreports
      })
}


 async function generateResumePdfController(req,res) {

   const { interviewreportid } = req.params

   const interviewreport= await interviewreportModel.findById(interviewreportid)

   if(!interviewreport){
      return res.status(404).json({
         message:"Interview report not found."
      })
   }

   const {resume, jobdescription ,selfdescription} =interviewreport
   const pdfBuffer = await generateResumePdf( {resume, jobdescription ,selfdescription})
   res.set({
      "Content-Type":"application/pdf",
      "Content-Disposition":`attachment; filename="resume_${interviewreportid}.pdf"`
   })

   res.send(pdfBuffer)
 }

module.exports={generateinterviewreportcontroller,getinterviewreportbyidcontroller, getallinterviewreportscontroller,generateResumePdfController}