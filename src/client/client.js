export class Client{
    static async sendPeticion(method,body,url,token=''){

        let result = {}

        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }

        if(method !=='GET' && method !=='DELETE'){
            options.body = JSON.stringify(JSON.parse(body))
        }

        try{
            const start = performance.now()
            const res = await fetch(url, options)
            const end = performance.now()
            result.duration = (end-start)
            const dataFetch = await res.json()
            const text = JSON.stringify(dataFetch)
            result.size = new TextEncoder().encode(text).length
            result.data = dataFetch
            result.status = await res.status

            return result

        }catch(error){
            console.log(error)
        }
    }
}