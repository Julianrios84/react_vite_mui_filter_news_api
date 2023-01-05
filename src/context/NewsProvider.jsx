import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const NewsContext = createContext();

const NewsProvider = ({children}) => {
  const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNews, setTotalNews] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const { data } = await axios(url);
      setNews(data.articles);
      setTotalNews(data.totalResults);
      setPage(1);
    };
    fetchApi();
  }, [category]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${page}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const { data } = await axios(url);
      setNews(data.articles);
      setTotalNews(data.totalResults);
    };
    fetchApi();
  }, [page]);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangePage = (e, valor) => {
    setPage(valor);
  };
  return (
    <NewsContext.Provider
      value={{
        category,
        handleChangeCategory,
        news,
        totalNews,
        handleChangePage,
        page
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
export { NewsProvider };
export default NewsContext;
