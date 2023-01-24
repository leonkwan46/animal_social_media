const errorHandler= (err, req, res, next) => {
    console.log('====================================');
    console.log("ErrorHandler:");
    console.log(err.message);
    console.log('====================================');
    res.status(err.status || 500).json(err.message || "Internal Server Error")
}

module.exports = errorHandler