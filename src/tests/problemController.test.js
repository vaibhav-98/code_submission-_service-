const problemController = require('../controllers/problem.controller.js')
const problemService = require('../services/problem.service.js')
const { StatusCode} = require('http-status-codes')


jest.mock('../services/problem.service');

describe("tests", () => {
    beforEach(() => {
        req = {};
        res = {
            status: jest.fn( () => res),
            json: jest.fn()
        };
        next = jest.fn()
    });

    test('Should get all problem', async () => {
        const problems = [] ;
        problemService.prototype.getAllProblems.mockResolvedValue(problems);

        await problemController.getProblems(req,res,next);

        expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        expect(problemService.prototype.getAllProblems).toHaveBeenCalledTime(1);
        expect(next).not.toHaveBeenCalled()
    })
})








