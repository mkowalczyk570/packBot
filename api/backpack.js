import 'dotenv/config'
import axios from "axios"

const API_KEY = process.env.BACKPACK_API_KEY

const priceCheckItem = async (itemName) => {
    const url = `https://backpack.tf/api/IGetPriceHistory/v1?item=${itemName}&key=${API_KEY}`
    const response = await axios.get(url)
    return response
}


const exportedMethods = {priceCheckItem}

export default exportedMethods