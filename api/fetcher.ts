import axios from 'axios';

export interface IFetcher{
    method: string
    url: string
    data?: {}
}
const fetcher = async (props:IFetcher):Promise<any>=>{
    return axios({
        baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
        method: props.method,
        url: props.url,
        data: props.data
    })
}
export default fetcher;