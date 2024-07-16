import axios from "axios"
import * as cheerio from "cheerio"
import { itemLookup } from "./item_lookup.js"

const uri = "https://marketplace.tf/items/tf2/"

export const pricecheck_unique_item = async(itemName) =>{
    
  
    const itemId = await itemLookup(itemName)
    const url = uri + itemId + ";6"
    

    const response = await axios.get(url, {
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.5',
          'Connection': 'keep-alive',
          'Host': 'marketplace.tf',
          'Priority': 'u=0, i',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Sec-Fetch-User': '?1',
          'TE': 'Trailers',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0'
        }
      });

    return response
    
    
    
    
}