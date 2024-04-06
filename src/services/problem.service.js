const sanitizeMarkdownContent = require("../utils/markdownSanitizer");


class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        try {
            // 1.  Sanitize the  markdown for  description
            problemData.description = sanitizeMarkdownContent(problemData.description);
              
            console.log("Problem data", problemData);
         const problem = await this.problemRepository.createProblem(problemData);
           console.log("Problem created", problem);
          return problem;
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }

    async getAllProblem() {
        const problems = await this.problemRepository.getAllProblem();
        return problems

    }
    
    async getProblem(problemId) {
        const problem = await this.problemRepository.getProblem(problemId)
        return problem
    }

}




module.exports  = ProblemService






