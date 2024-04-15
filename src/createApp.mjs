import express from 'express';
import apis from "./api/index.mjs";
import globalExceptionHandle from './middleware/errorHandle.mjs';
import { CustomError } from './models/customError.mjs';

export function createApp() {
    const app = express();
    app.use(express.json());
    app.use(apis);
    // handle non-exit api endpoint
    app.all('*', (req, _, next) => {
        const err = new CustomError(`can't find ${req.method} ${req.originalUrl} on the server!`, 404);
        next(err);
    });
    app.use(globalExceptionHandle)
    return app;
}