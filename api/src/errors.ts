export class DomainError extends Error {
    public reason?: string;
    public code: number = 500;
    public data?: {};

    constructor(message: string) {
        super(message);

        // https://nodejs.org/api/errors.html#errors_error_capturestacktrace_targetobject_constructoropt
        Error.captureStackTrace(this, this.constructor);
    }
}

export class NotFoundError extends DomainError {
    constructor(resource: string, reason?: string) {
        super(`Resource ${resource} was not found`);

        this.code = 404;
        this.reason = reason;
    }
}

export class InternalServerError extends DomainError {
    constructor(reason?: string) {
        super('Internal Server Error');

        this.code = 500;
        this.reason = reason;
    }
}
