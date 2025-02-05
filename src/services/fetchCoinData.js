import axiosInstance from "../helpers/axiosInstance"

export async function fetchCoinData() {
    try {
        const response = await axiosInstance.get("/coins/markets?vs_currency=inr");
        console.log(response);
        
        return response;

    } catch (error) {
        console.log(error);
        return null;
        
    }
}