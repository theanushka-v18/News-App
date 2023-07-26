import React from 'react'
import { useNavigate } from 'react-router-dom';

const NewsArticle = ({title,publishedAt}) => {
    const navigate = useNavigate();

    function gotoDetailedView() {
        navigate(`/detailedView`);
    }

    return (
        <>
            <li onClick={gotoDetailedView} className="news-article">
                <h4>{title}</h4>
                <h5>{publishedAt}</h5>
            </li>
        </>
    )
}

export default NewsArticle
