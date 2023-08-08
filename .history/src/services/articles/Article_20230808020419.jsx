import axios from "axios"
import { useEffect, useState } from "react"
import Feed from "./Feed";

function Article() {
  const [articles, setArticles] = useState([])
  console.log(articles);
  const getArticles = async () => {
    try {
      const res = await axios.get('http://localhost:4000/')
      setArticles(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getArticles()
  }, [])
  return (
    <div className="h-screen w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
      <div className="bg-black flex-box rounded-lg py-3 px-6 mb-5">
        <img src="https://cdn-images-1.medium.com/max/303/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png" alt="logo" />
      </div>

      {articles.map((article, i) =>
        <Feed key={i} title={article.item.title} link={article.item.link} date={article.item.pubDate} />
      )}
      <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
  <div
    class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
        alt="Hollywood Sign on The Hill" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
  </div>
    </div>
  );
}

export default Article;
