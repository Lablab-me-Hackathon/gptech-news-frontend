import { useEffect, useState } from "react"
import Feed from "./Feed";

function News() {
  const [news, setNews] = useState([])

  const getNews = async () => {
    try {
      let response = await fetch('https://news-api-dxu3.onrender.com')
      let res = await response.json()
      // console.log(res)
      setNews(res.articles)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className="mx-6 border p-5 rounded-xl bg-gray-800 w-full">
      <div
        className="mt-6 flex flex-col rounded-lg flex-box w-full">
        <div className="py-6 grid-cols-1 sm:grid md:grid-cols-3 w-full">
          {news.map((article, i) =>
            <Feed key={i} title={article.title} link={article.url} date={article.publishedAt} image={article.urlToImage} description={article.description} author={article.author} />
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
