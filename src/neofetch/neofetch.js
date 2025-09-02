

export class Neofetch{

    static #buildUrl(url,paramas=[]){

        const searchParams = new URLSearchParams()

        params.foreach(({key,value}) => searchParams.append(key,value))

        return `${url}?${searchParams.toString()}` 

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