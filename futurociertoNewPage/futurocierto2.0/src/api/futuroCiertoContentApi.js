import axios from 'axios'


export const getNav = () =>{

    return axios.get('http://localhost:8000/FuturoCiertoContent/api/v1/navigation/');

}

export const getEvent = ()=>{
    return axios.get ('http://localhost:8000/FuturoCiertoContent/api/v1/event/');

}


export const getLogo = ()=>{
    return axios.get('http://localhost:8000/FuturoCiertoContent/api/v1/logo/')
}


export const getBanner = ()=>{
    return axios.get('http://localhost:8000/FuturoCiertoContent/api/v1/banner/')
}

export const getMissionValue = ()=>{
    return axios.get('http://localhost:8000/FuturoCiertoContent/api/v1/missionValues/')
}


export const getWoWeAre = ()=>{
    return axios.get('http://localhost:8000/FuturoCiertoContent/api/v1/whoWeAre/')
}

export const getNews = ()=>{
    return axios.get('http://localhost:8000/FuturoCiertoContent/api/v1/news/')
}


export const getNewsID = (newsID)=>{
    return axios.get(`http://localhost:8000/FuturoCiertoContent/api/v1/news/${newsID}/`)
}




export const getEducation = ()=>{
    return axios.get('http://localhost:8000/FuturoCiertoContent/api/v1/education/')
}


export const getEducationID = (educationID)=>{
    return axios.get(`http://localhost:8000/FuturoCiertoContent/api/v1/education/${educationID}/`)
}


export const getCause = ()=>{
    return axios.get('http://localhost:8000/FuturoCiertoContent/api/v1/cause/')
}





