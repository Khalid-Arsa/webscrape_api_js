import { getData } from "./api_call"
import { storeData } from "./helper"

const scrapeData = async () => {
    console.log('======= Processing Data =======')

    try {
        const response_json = await getData()

        if (response_json.length > 0) {
            storeData(response_json)

        } else {
            console.log('No data found')
        }
    } catch (err) {
        console.log('Err: ', err)
    }

    console.log('======= Done Processing Data =======')
}

scrapeData()