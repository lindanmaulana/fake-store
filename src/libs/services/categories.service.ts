import { ErrorService } from "../helper/error-service."

export const fetchCategories = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/categories")
        const result = await response.json()

        return result
    } catch (err) {
        const errorMessage = ErrorService(err)

        return {
            error: errorMessage
        }
    }
}