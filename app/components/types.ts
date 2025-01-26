export type gridConfig = {
    url:string,
    name: string
  }
  

  export type post = {
    id:number,
    url:string,
    name: string,
    image:string
  }

  export type user = {
    id:number,
    name: string,
    image:string
  }

  export type comment = {
    id:number,
    user:user
    content:string
  }

  export type userAuthData = {
    token:string,
    email:string,
    id:number,
    name: string,
    image:string
  }