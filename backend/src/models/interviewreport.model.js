const mongoose = require('mongoose')

const technicalquestionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical Question is required"]
    },

    intention:{
        type:String,
        required:[true,"Technical Question is required"]

    },
    answer:{
        type:String,
        required:[true,"Technical Question is required"]
    }
},{
    _id:false
})


const behavioralquestionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical Question is required"]
    },

    intention:{
        type:String,
        required:[true,"Technical Question is required"]

    },
    answer:{
        type:String,
        required:[true,"Technical Question is required"]
    }
},{
    _id:false
})


const skillgapsSchema=new mongoose.Schema({
    skill:{
        type:String,
        required:[true,"Technical Question is required"]
    },

    severity:{
        type:String,
        required:[true,"Technical Question is required"]

    }
},{
    _id:false
})


const preparationplanSchema=new mongoose.Schema({
    day:{
        type:Number,
        required:[true,"Technical Question is required"]
    },

    focus:{
        type:String,
        required:[true,"Technical Question is required"]

    },
    tasks:[{
        type:String,
        required:[true,"Technical Question is required"]
    }]
})


const interviewreportSchema=new mongoose.Schema({

    jobdescription:{
        type:String,
        required:[true,'job description is required']
    },

    resume:{
        type:String,
    },
    selfdescription:{
        type:String, 
    },

    matchscore:{
        type:Number,
        min:0,
        max:100,
    },

    technicalquestions:[technicalquestionSchema ],
    behavioralquestions: [ behavioralquestionSchema ],
    skillgaps: [ skillgapsSchema ],
    preparationplan : [ preparationplanSchema ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },

    title: {
        type:String,
        required:[ true, "Job title is required"]
    }
},{

   timestamps:true

})


const interviewreportModel= mongoose.model( "interviewreport ", interviewreportSchema);

module.exports =interviewreportModel;