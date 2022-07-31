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
                url: news.url,
            }));

            setSearchedNews(newsData);
            setSearchInput('');
        }   catch (err) {
            console.error(err);
        }
    };
    
    return (
        <>
        <div className='container search'>
            <h1>Search the News</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                name='searchInput'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type='text'
                placeholder='Search news'/>
                <button type='submit'>Search</button>
            </form>
        </div>
        <div>
            <h2>
            {searchedNews.length
            ? `Viewing ${searchedNews.length} results:`
            : 'Search news topic to begin'}
            </h2>
            
        </div>

        </>
    )
}

export default News;