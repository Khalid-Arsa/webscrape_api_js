import axios from "axios"
import { config } from "./config"


export const getData = async () => {
    const result: any[] = []

    try {
        const url: string = `https://api.bjs.com/digital/live/api/v${config.version}/pdp/10201?productId=${config.productId}&pageName=${config.pageName}`
        const data: any = await axios.get(url)

        if (data.status === 200) {
            result.push(data.data)
            
        } else {
            console.log('Error response status code: ', data.status)
        }

    } catch (err) {
        console.log('Err: ', err)
        //pass
    }

    return result
} 