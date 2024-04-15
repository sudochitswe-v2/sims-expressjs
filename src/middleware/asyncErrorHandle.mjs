
// this model will warp all contorllers to handle any exception 
// next(err) will invoke errorHandle
export const asyncErrorHandle = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(err => {
            console.error("middleware log", err);
            next(err);
        });
    }
} 