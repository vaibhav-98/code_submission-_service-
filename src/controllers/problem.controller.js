const { StatusCodes } = require('http-status-codes')
const NotImplementError = require('../errors/NotImplemented.error')
const { ProblemService } = require('../services')
const { ProblemRepository } = require('../repositories')

const problemService = new ProblemService ( new ProblemRepository())

function pingProblemController(req,res) {
    return res.json({message : 'Ping controller is runnning'})
}



async function addProblem(req,res,next) {
   try {
     
    console.log("incoming req body", req.body);
    const newproblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
        success:true,
        message: "Successfully created a new problem",
        error: {},
        data: newproblem
    })
     
   } catch (error) {
     next(error)
   }

}

function getProblem(req,res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    })
    
}


function getProblems(req,res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    })
    
}


function deleteProblem(req,res) {

    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    })
}

function updateProblem(req,res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    })
    
}



module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}