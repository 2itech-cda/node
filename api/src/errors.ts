export class DomainError extends Error {
    public reason?: string;
    public code: number = 500;
    public data?: {};

    constructor(message: string) {
        super(message);
    }
}

export class NotFoundError extends DomainError {

}

export class InternalServerError extends DomainError {
    
}
