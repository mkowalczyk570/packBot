import "dotenv/config"
import axios from "axios"

const API_KEY = process.env.BACKPACK_API_KEY

export const getItemPrice = async (itemName) => {
    const url = `https://backpack.tf/api/IGetPriceHistory/v1?item=${itemName}&key=${API_KEY}`
    const res = await axios.get(url)
    return res
}