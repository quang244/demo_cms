import fetcher from "@/api/fetcher";
import Constant from "@/api/Constant";

const getUser = async () => {
    return await fetcher ({
        method: 'GET',
        url: Constant.API_PATH.GET_USER
    })
}

export default {
    getUser
}