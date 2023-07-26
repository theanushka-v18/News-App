import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ListView from "../listView/ListView";
import GridView from "../gridView/GridView";
import {useNewsArticle} from "../../context/newsArticleContext";

const NewsFeed = () => {
    let API_KEY = "9739b9a80b1c4ae9987637c9ac12f8dc";
    const [viewType, setViewType] = useState('list');
    const {newsArticles, setNewsArticles} = useNewsArticle();

    function handleViewChange(type) {
        setViewType(type);
    }

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=IN&apiKey=${API_KEY}`)
        .then((response) => {
            console.log(response.data.articles);
            setNewsArticles(response.data.articles);
        })
        .catch((err) => {
            console.log("Error found");
        })
    }, [])
    return (
        <div className='newsfeed'>
            <button onClick={() => handleViewChange('list')}>List View</button>
            <button onClick={() => handleViewChange('grid')}>Grid View</button>
            {viewType === 'list' ? <ListView newsArticles={newsArticles} /> : <GridView newsArticles={newsArticles} />}
        </div>
    )
}

export default NewsFeed
