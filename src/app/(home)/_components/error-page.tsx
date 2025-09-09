interface ErrorPageProps {
    error: string
}

export const ErrorPage = ({error}: ErrorPageProps) => {
    return (
        <main className="w-full min-h-screen flex items-center justify-center">
            <h4>Error Page</h4>
            <p>{error}</p>
        </main>
    )
}