export const fetchProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const result = await response.json()


        return result
    } catch (err) {
        let errorMessage = "An unexpected error occurred!"

        if(err instanceof Error) errorMessage = err.message

        return {
            error: errorMessage
        }
    }
}