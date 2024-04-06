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



async function getProblem(req,res) {
   try {
     const  response = await  problemService.getAllProblem();
     return  res.status(StatusCodes.OK).json({
        success:true,
        message: "Successfully fetched all  problem",
        error: {},
        data: response
     })
   } catch (error) {
    next(error)
   }
    
}


async function getProblem(req,res,next) {

    try {
        const response = await  problemService.getProblem(req.params.id);
        return  res.status(StatusCodes.OK).json({
            success:true,
            message: "Successfully fetched problem by ID",
            error: {},
            data: response
         })

    } catch (error) {
        next(error)
    }
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
    getProblem,
    deleteProblem,
    updateProblem,
    pingProblemController
}