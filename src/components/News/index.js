import React, { useState } from 'react';
import { newsSearch } from '../../utils/api'

const News = () => {
    // create state for holding returned news api data
    const [searchedNews, setSearchedNews] = useState([]);
    // create state for holding search field data
    const [searchInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await newsSearch(searchInput);
            
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const { articles } = await response.json();

            const newsData = articles.map((news) => ({
                title: news.title,
                author: news.author,
                description: news.description,
                date: news.publishedAt,
                website: news.url,
            }));

            setSearchedNews(newsData);
            setSearchInput('');
        }   catch (err) {
            console.error(err);
        }
    };
    
    return (
        <>
        <div className='search center'>
            <h1>Search the News</h1>
            <form onSubmit={handleFormSubmit} className='wrapper'>
                <input
                name='searchInput'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type='text'
                placeholder='Search'
                className='search'/>
                <button type='submit'>Search</button>
            </form>
        </div>
        <div>
            <div className='searched-news center'>
            {searchedNews.length
            ? `Viewing ${searchedNews.length} results`
            : 'Search news topic to begin'}
            </div>
            <section className='card-container'>
                {searchedNews.map((news) => {
                    return (
                    <div className='card card-center card-blue'>
                        <div className='card-content'>
                        <span className='card-title'>{news.title}</span>
                            <p className='card-text'>{news.description}</p>
                        </div>
                        <p className='card-date'>Date: {news.date}</p>
                        <div className='card-link'>
                            <a href={news.website}>Read Article</a>
                        </div>
                    </div>
                    )
                }
                )}
            </section>

        </div>

        </>
    )
}

export default News;