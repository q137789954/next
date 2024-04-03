import { Headers, Option } from "../type";
import Http from './http';


// const { headers } = option;
//     if(headers) {
//       Object.keys(headers).forEach((key) => {
//         this.headers.append(key, headers[key])
//       })
//     }




class NewHttp extends Http {


    constructor( path: string, headers?: Headers, option?:Option ){

        super('aaaa')
    }

    create(){

        return {

        }
    }
}

const http = (path: string, headers?: Headers, option?: Option ) => {

    const request = new NewHttp(path, headers, option);



    return {
        get: request.get
    }
}
