

export class Neofetch{

    static #buildUrl(url,params=[]){

        const searchParams = new URLSearchParams()

        params.forEach(({key,value}) => searchParams.append(key,value))

        return `${url}?${searchParams.toString()}` 

    } 

    static #buildOptions(method,headers,body,options){

        switch(method){
            case "GET":
            case "DELETE":
                return {
                    method,
                    headers: {"Content-Type": "application/json",...headers},
                    ...options
                }
            case "POST":
            case "PUT":
            case "PATCH":
                return{
                    method,
                    headers: {"Content-Type": "application/json",...headers},
                    body: body ? JSON.stringify(body) : undefined,
                    ...options
                }
        }
    }

    static async #buildRequest(method,url,{body,params,headers,...options}){
        
        const swapurl = this.#buildUrl(url,params)

        const response = await fetch(swapurl,this.#buildOptions(method,headers,body,options))

        return response
    }

    static async get(url,options={}){

        return this.#buildRequest("GET",url,options)

    }

    static async post(url,options={}){

        return this.#buildRequest("POST",url,options)

    }

    static async put(url,options){

        return this.#buildRequest("PUT",url,options)

    }

    static async patch(url,options){

        return this.#buildRequest("PATCH",url,options)

    }

    static async delete(url,options){

        return this.#buildRequest("DELETE",url,options)

    }

}