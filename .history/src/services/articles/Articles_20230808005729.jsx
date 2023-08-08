import axios from "axios"
import { useEffect, useState } from "react"
import Feed from "./Feed";

function Articles() {
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
    <div className="lh-screen w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
      <div className="bg-black flex-box rounded-lg py-3 px-6 mb-5">
        <img src="https://cdn-images-1.medium.com/max/303/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png" alt="logo" />
      </div>

      {articles.map((article, i) =>
        <Feed key={i} title={article.item.title} link={article.item.link} date={article.item.pubDate} />
      )}
    </div>
  );
}

export default Articles;
