const { StatusCodes } = require('http-status-codes')
const NotImplementError = require('../errors/NotImplemented.error')
const BadRequests = require('../errors/badrequest.error')


function pingProblemController(req,res) {
    return res.json({message : 'Ping controller is runnning'})
}



function addProblem(req,res,next) {
   try {
     throw new BadRequests('Problem Name',{missing: ["Problem Name"]})
     
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