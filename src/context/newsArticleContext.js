import { createContext, useContext, useState } from "react";

const NewsArticleContext = createContext();

export const NewsArticleContextProvider = ({children}) => {
    
    const [newsArticles, setNewsArticles] = useState([]);

    const values = {
        newsArticles,
        setNewsArticles
    }
    return (<NewsArticleContext.Provider value={values}>{children}</NewsArticleContext.Provider>)
}

export const useNewsArticle = () => useContext(NewsArticleContext)