import React from 'react';
import {useNewsArticle} from "../../context/newsArticleContext";
import { useParams } from 'react-router-dom';


const DetailedView = () => {
    const {newsArticles} = useNewsArticle();
    return (
        <div className='detailed-view-container'>
            DetailedView
        </div>
    )
}

export default DetailedView
