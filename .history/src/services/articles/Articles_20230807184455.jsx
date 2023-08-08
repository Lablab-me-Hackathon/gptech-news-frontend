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
    <div>
      {articles.map((item, i) =>
        <Feed key={i} title- />
      )}
    </div>
  );
}

export default Articles;
