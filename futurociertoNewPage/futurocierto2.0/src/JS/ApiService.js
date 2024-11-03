import axios from 'axios'

const API_BASE_URL = "https://localhost:7261/api/";

const api = axios.create({

    baseURL: API_BASE_URL
});

export const getNavigation = async ()=>{

    try{
        const response = await api.get('Navigation')
        return response.data;
    }catch(error){
        console.error('There are an error fetcheing the navigation data!', error);
        throw error;
    }
}