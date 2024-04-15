const devErrosHandle = (res, error) => {
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stackTrace: error.stack,
        error: error
    });
}

export default function (error, req, res, next) {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    return devErrosHandle(res, error);
}
