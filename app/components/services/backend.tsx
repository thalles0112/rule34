
//const url = 'http://fdmanimais.pythonanywhere.com'
const url = 'http://10.0.0.161:8000'


const headerToken = (token="")=> {return ({'Content-Type':'Application/JSON', 'Accept':'Application/JSON', 'Authorization':`token ${token}`})}
const header = () => {return ({'Content-Type':'Application/JSON', 'Accept':'Application/JSON'})}


export const backend = {
    get: async (path:string, token="")=>{
        return await fetch(`${url}${path}`,{method:'GET', headers:token?headerToken(token):header()})
    },

    put: async (path:string, data:any, token="")=>{
        return await fetch(`${url}${path}`,{method:'PUT', headers:token?headerToken(token):header(), body: JSON.stringify(data)})
    },

    post: async (path:string, data:any, token="")=>{
        return await fetch(`${url}${path}`,{method:'POST', headers:token?headerToken(token):header(), body: JSON.stringify(data)})
    },

    delete: async (path:string, token="")=>{
        return await fetch(`${url}${path}`,{method:'DELETE', headers:token?headerToken(token):header()})
    }
}