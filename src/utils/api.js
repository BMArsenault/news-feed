export const newsSearch = (query) => {
    return fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=2022-06-30&sortBy=publishedAt&apiKey=8d5018d4ac02488896d8006c0aed6568`
    )
}