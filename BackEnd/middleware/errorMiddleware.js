// create error response

// middleware allow to runcode before compleing request --> help modify response
// next = to call further middleware
const errorHandler = (err,req,res,next) =>{
    // check statusCode if it is the mentioned status code in controller
    // if not set to 500
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        // stack give more information about err for developers
        stack: process.env.NODE_ENV ==='production' ? null : err.stack
    })
}

module.exports={
    errorHandler,
}