export const ErrorService = (err: unknown): string => {
    let errorMessage = "An unexpected error occurred!"

    if(err instanceof Error) errorMessage = err.message

    return errorMessage
}