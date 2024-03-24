const express = require('express') 

const { problemController} = require('../../controllers')

const problemRouter = express.Router()  

// If any  request comes and  route continues with /ping, we map it to pingProblemController
problemRouter.get('/ping', problemController.pingProblemController)

problemRouter.get('/:id', problemController.getProblem)

problemRouter.get('/:id', problemController.getProblems)

problemRouter.get('/:id', problemController.addProblem)

problemRouter.get('/:id', problemController.deleteProblem)

problemRouter.get('/:id', problemController.updateProblem)




module.exports = problemRouter









