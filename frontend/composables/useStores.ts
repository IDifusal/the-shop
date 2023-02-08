import type { StoreAPIResponse } from "~~/interfaces/StoreApiResponse";
import axios from 'axios'
const listStores = ref()
const loadStores = async () => {
    try {
        const response = await axios.get<StoreAPIResponse>('http://localhost:8080/stores')
        let newArray = response.data.data.map(obj => {
            const id = obj.links[0].uri.split('/').pop();
            return { ...obj, id: id }
        })
        listStores.value = newArray
    } catch (error) {
        throw new Error(`Error ${error}`);
    }
}

const useStores = () => {
    return {
        loadStores,
        listStores
    }
}

export default useStores