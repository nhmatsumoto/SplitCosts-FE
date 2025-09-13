export type ErrorType =
    | "Validation"
    | "NotFound"
    | "Unauthorized"
    | "Conflict"
    | "BadRequest"
    | "ServerError";

export interface Result<T> {
    isSuccess: boolean;
    errorMessage?: string;
    errorType?: ErrorType;
    data?: T;
    validationErrors?: Record<string, string[]>;
}
