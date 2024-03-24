const express = require('express') 

const { ProblemController} = require('../../controllers')

const problemRouter = express.Router()  

problemRouter.get('/ping', ProblemController.pingProblemController)

problemRouter.get('/:id', ProblemController.getProblem)

problemRouter.get('/:id', ProblemController.getProblems)

problemRouter.get('/:id', ProblemController.addProblem)

problemRouter.get('/:id', ProblemController.deleteProblem)

problemRouter.get('/:id', ProblemController.updateProblem)




module.exports = problemRouter









