//Custom Error 
// if route is not found
const notFound = (req, res, next) =>{
    const err = new Error(`URL not found : ${req.originalUrl}`)
    console.log('we reached here')
    res.status(404);
    next(err)
}

// global error handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack : process.env.NODE_ENV == 'production' ? null : err.stack
    })    
}

export { errorHandler, notFound }

