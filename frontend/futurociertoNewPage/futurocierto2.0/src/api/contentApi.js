
/*import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';

const contentApi = () => {
  const { language } = useLanguage();

  const instance = axios.create({
    baseURL: 'http://localhost:8000/FuturoCiertoContent/api/v1',
    headers: {
      'Accept-Language': language,
    },
  });

  return instance;
};

export default contentApi;*/



import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import axios from 'axios';

const useContentApi = () => {
    const { language } = useLanguage();

    const contentNews = useMemo(() => {
        return axios.create({
            //baseURL: 'http://3.12.151.15:8080/FuturoCiertoContent/api/v1',
            //baseURL: 'http://localhost:8000/FuturoCiertoContent/api/v1',
            baseURL:'https://draacostafit.com/FuturoCiertoContent/api/v1/',

            headers: {
                'Accept-Language': language,
            },
        });
    }, [language]); // Solo se crea una nueva instancia si cambia el idioma.

    return contentNews;
};

export default useContentApi;
