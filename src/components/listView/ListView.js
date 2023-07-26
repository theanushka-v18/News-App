import React from 'react';
import NewsArticle from './NewsArticle';
import "./styles.css"

const ListView = ({newsArticles}) => {
    return (
        <div className='list-view'>
            <ul className="news-list">
                {newsArticles.map((article, index) => (
                    <NewsArticle key={index} title={article.title} publishedAt={article.publishedAt} />
                ))}
            </ul>
        </div>
    )
}

export default ListView
