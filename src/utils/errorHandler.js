const BaseError = require("../errors/base.errror")
const { StatusCodes } =  require('http-status-codes')


function errorHandler(err, req, res, next) {
    if(err instanceof BaseError) {
        return  res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {} // because this is exception so no data is going to be provided
        });
    }

    return  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message:'Something went wrong',
        error: err,
        data: {} //
    })
}

module.exports = errorHandler;
















