import fs from 'fs'

export const storeData = (data: any) => {
    try {
        fs.writeFileSync("data.json", JSON.stringify(data))

    } catch (err) {
        console.log(err)
    }
}