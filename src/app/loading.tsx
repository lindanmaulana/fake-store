import { ImSpinner } from "react-icons/im"

const LoadingPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <ImSpinner className="animate-spin text-3xl" />
        </div>
    )
}

export default LoadingPage