const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const interviewController =require("../controllers/interview.controller")
const upload= require("../middlewares/file.middleware")


const interviewRouter = express.Router()

interviewRouter.post("/", authMiddleware.authUser,upload.single("resume"), interviewController.generateinterviewreportcontroller)


interviewRouter.get("/report/:interviewId",authMiddleware.authUser, interviewController.getinterviewreportbyidcontroller)


interviewRouter.get("/",authMiddleware.authUser, interviewController.getallinterviewreportscontroller)


interviewRouter.post("/resume/pdf/:interviewreportid",authMiddleware.authUser,interviewController.generateResumePdfController)

module.exports = interviewRouter