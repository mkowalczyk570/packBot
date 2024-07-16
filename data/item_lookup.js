import axios from "axios"
import * as cheerio from "cheerio"

const url = "https://wiki.alliedmods.net/Team_Fortress_2_Item_Definition_Indexes"

export const itemLookup = async(itemName) =>{
    
    const {data} = await axios.get(url)
    
    const $ = cheerio.load(data)
    
    const itemMappings = {}
    
    $('table > tbody > tr').each((index, element) => {
        const columns = $(element).find('td')
        const id = $(element).find('th')
        const itemId = $(id).text().trim()
        if(columns.length > 1){
            
            const itemName = $(columns[0]).text().trim();
            
            
            itemMappings[itemName] = itemId
        }
    })

    return itemMappings[itemName]
}