

export class Neofetch{

    static #buildUrl(url,paramas=[]){

        const searchParams = new URLSearchParams()

        params.foreach(({key,value}) => searchParams.append(key,value))

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

    static async get(){
    }

    static async post(){

    }

    static async put(){

    }

    static async patch(){

    }

    static async delete(){
        
    }

}